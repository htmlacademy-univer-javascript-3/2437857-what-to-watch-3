import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../consts/genre-const';
import { setGenre, setFilms } from './action';
import { films } from '../mocks/films';

const initialState = {
  films,
  promoFilm: films[0],
  genre: DEFAULT_GENRE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
});
