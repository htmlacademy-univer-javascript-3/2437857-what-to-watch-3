import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {FilmType} from '../types/film-type';
import {
  setDataLoadingStatus,
  setFilms,
  requireAuthorization,
  redirectToRoute,
  setUser,
  setFilm,
  setSimilarFilms,
  setPromoFilm,
} from './action';
import { APIRoute, AppRoute } from '../consts/route-consts';
import { AuthorizationStatus } from '../consts/auth-consts';
import { AuthData } from '../types/auth-data';
import { UserType } from '../types/user-type';
import { dropToken, saveToken } from '../services/token';


export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, {dispatch, extra: api}) => {
  dispatch(setDataLoadingStatus(true));
  const {data} = await api.get<FilmType[]>(APIRoute.Films);
  dispatch(setFilms(data));
  dispatch(setDataLoadingStatus(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserType>(APIRoute.Login);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const fetchFilmAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (filmId, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  const { data } = await api.get<FilmType>(`${APIRoute.Films}/${filmId}`);
  dispatch(setFilm(data));
  dispatch(setDataLoadingStatus(false));
});

export const fetchFilmDetailsAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilmDetails', async (filmId, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));

  const filmRoute = `${APIRoute.Films}/${filmId}`;

  const { data: film } = await api.get<FilmType>(filmRoute);
  dispatch(setFilm(film));

  // const { data: reviews } = await api.get<Comment[]>(
  //   `${APIRoute.Comments}/${filmId}`
  // );
  // dispatch(setReviews(comments));

  const { data: similarFilms } = await api.get<FilmType[]>(
    `${filmRoute}${APIRoute.Similar}`
  );
  dispatch(setSimilarFilms(similarFilms));

  dispatch(setDataLoadingStatus(false));
});

export const fetchPromoFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadingStatus(true));
  const { data } = await api.get<FilmType>(APIRoute.Promo);
  dispatch(setPromoFilm(data));
  dispatch(setDataLoadingStatus(false));
});


export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<UserType>(APIRoute.Login, {
    email,
    password,
  });
  saveToken(data.token);
  dispatch(setUser(data));
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Root));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setUser(null));
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
