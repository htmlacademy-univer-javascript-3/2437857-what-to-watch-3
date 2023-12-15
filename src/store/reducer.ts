import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../consts/genre-const';
import { setGenre, setFilms, setDataLoadingStatus } from './action';
import { FilmType } from '../types/film-type';

type InitialState = {
  films: FilmType[];
  promoFilm: FilmType | null;
  genre: string;
  isDataLoading: boolean;
};

const initialState: InitialState = {
  films: [],
  promoFilm: null,
  genre: DEFAULT_GENRE,
  isDataLoading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});
