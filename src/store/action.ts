import { createAction } from '@reduxjs/toolkit';
import { FilmType } from '../types/film-type';

export const setGenre = createAction<{ genre: string }>('setGenre');
export const setFilms = createAction<FilmType[]>('setFilms');
