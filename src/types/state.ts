import { store } from '../store';
import { AuthorizationStatus } from '../consts/auth-consts';
import { ReviewType } from './review-type';
import { FilmType } from './film-type';
import { UserType } from './user-type';

export type FilmData = {
  film: FilmType | null;
  reviews: ReviewType[];
  similar: FilmType[];
  isDataLoading: boolean;
};

export type MainProcess = {
  films: FilmType[];
  promoFilm: FilmType | null;
  favouriteFilms: FilmType[];
  genre: string;
  isDataLoading: boolean;
};

export type UserProcess = {
  user: UserType | null;
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
