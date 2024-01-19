import {createSlice} from '@reduxjs/toolkit';
import {MainProcess} from '../../types/state';
import {DEFAULT_GENRE} from '../../consts/genre-const';
import {
  changeFavoritePromoFilmAction,
  fetchFavoriteFilmsAction,
  fetchFilmsAction,
  fetchPromoFilmAction,
} from '../api-actions';
import {setGenre} from '../action';

const initialState: MainProcess = {
  films: [],
  promoFilm: null,
  favouriteFilms: [],
  isDataLoading: false,
  genre: DEFAULT_GENRE,
};

export const mainProcess = createSlice({
  name: 'MAIN',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isDataLoading = false;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favouriteFilms = action.payload;
        state.isDataLoading = false;
      })
      .addCase(changeFavoritePromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(setGenre, (state, action) => {
        state.genre = action.payload;
      });
  },
});
