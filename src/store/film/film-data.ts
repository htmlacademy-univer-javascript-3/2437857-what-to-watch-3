import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../types/state';
import { fetchFilmAction, fetchFilmDetailsAction, changeFavoriteFilmAction } from '../api-actions';

const initialState: FilmData = {
  film: null,
  reviews: [],
  similar: [],
  isDataLoading: false,
};

export const filmData = createSlice({
  name: 'FILM',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFilmDetailsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmDetailsAction.fulfilled, (state, action) => {
        const { film, reviews, similar } = action.payload;
        state.film = film;
        state.reviews = reviews;
        state.similar = similar;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmDetailsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(changeFavoriteFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  },
});
