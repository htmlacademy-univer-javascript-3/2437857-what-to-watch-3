import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';
import { AuthorizationStatus } from '../consts/auth-consts';
import { UserType } from '../types/user-type';

export const setGenre = createAction<{ genre: string }>('film/setGenre');
export const setFilms = createAction<FilmType[]>('data/setFilms');
export const setFilm = createAction<FilmType>('data/setFilm');
export const setPromoFilm = createAction<FilmType>('data/setPromoFilm');
export const setSimilarFilms = createAction<FilmType[]>('data/setSimilar');

export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus');
export const setUser = createAction<UserType | null>('user/setUser');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);

export const redirectToRoute = createAction<string>('main/redirectToRoute');
