import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../consts/genre-const';
import {
  setGenre, setFilms, setDataLoadingStatus, requireAuthorization, setUser, setFilm, setPromoFilm, setSimilarFilms,
} from './action';
import { FilmType } from '../types/film-type';
import { AuthorizationStatus } from '../consts/auth-consts';
import { UserType } from '../types/user-type';

type InitialState = {
  films: FilmType[];
  film: FilmType | null;
  promoFilm: FilmType | null;

  similarFilms: FilmType[];
  genre: string;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserType | null;
};

const initialState: InitialState = {
  films: [],
  film: null,
  similarFilms: [],
  promoFilm: null,
  genre: DEFAULT_GENRE,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
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
    });
});
