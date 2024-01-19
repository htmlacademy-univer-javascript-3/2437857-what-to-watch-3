import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';
import { AuthorizationStatus } from '../consts/auth-consts';
import { UserType } from '../types/user-type';
import { ReviewType } from '../types/review-type';

export const setGenre = createAction<string>('main/setGenre');
export const setFilms = createAction<FilmType[]>('data/setFilms');
export const setFilm = createAction<FilmType>('data/setFilm');
export const setPromoFilm = createAction<FilmType>('data/setPromoFilm');
export const setSimilarFilms = createAction<FilmType[]>('data/setSimilar');
export const setReviews = createAction<ReviewType[]>('data/setReviews');
export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus');
export const setUser = createAction<UserType | null>('user/setUser');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setError = createAction<string | null>('data/setError');
export const redirectToRoute = createAction<string>('main/redirectToRoute');
