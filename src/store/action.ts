import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';

export const setGenre = createAction<{ genre: string }>('film/setGenre');
export const setFilms = createAction<FilmType[]>('data/setFilms');
export const setDataLoadingStatus = createAction<boolean>(
  'data/setDataLoadingStatus');
