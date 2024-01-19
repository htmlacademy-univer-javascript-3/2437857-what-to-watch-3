import {Slice} from '../../consts/slices';
import { State } from '../../types/state';
import {FilmType} from '../../types/film-type';

import {ReviewType} from '../../types/review-type';

export const getFilm = (state: State): FilmType | null =>
  state[Slice.Film].film;
export const getComments = (state: State): ReviewType[] =>
  state[Slice.Film].reviews;
export const getSimilar = (state: State): FilmType[] =>
  state[Slice.Film].similar;
export const isFilmDataLoading = (state: State): boolean =>
  state[Slice.Film].isDataLoading;
