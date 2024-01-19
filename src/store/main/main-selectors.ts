
import { State } from '../../types/state';
import { FilmType} from '../../types/film-type';
import {Slice} from '../../consts/slices.ts';

export const getFilms = (state: State): FilmType[] => state[Slice.Main].films;
export const getPromoFilm = (state: State): FilmType | null =>
  state[Slice.Main].promoFilm;
export const getFavoriteFilms = (state: State): FilmType[] =>
  state[Slice.Main].favouriteFilms;
export const getGenre = (state: State): string => state[Slice.Main].genre;
export const isMainDataLoading = (state: State): boolean =>
  state[Slice.Main].isDataLoading;
