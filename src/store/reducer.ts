import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../consts/genre-const';
import {
  setGenre, setFilms, setDataLoadingStatus, requireAuthorization, setError, setUser, setFilm, setPromoFilm, setSimilarFilms, setReviews,
} from './action';
import { FilmType } from '../types/film-type';
import { AuthorizationStatus } from '../consts/auth-consts';
import { UserType } from '../types/user-type';
import { ReviewType} from '../types/review-type';

type InitialState = {
  films: FilmType[];
  film: FilmType | null;
  promoFilm: FilmType | null;
  similarFilms: FilmType[];
  reviews: ReviewType[];
  genre: string;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserType | null;
  error: string | null;
};

const initialState: InitialState = {
  films: [],
  film: null,
  similarFilms: [],
  reviews: [],
  promoFilm: null,
  genre: DEFAULT_GENRE,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
