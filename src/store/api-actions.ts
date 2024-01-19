import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, FilmData, State} from '../types/state';
import {FilmType} from '../types/film-type';
import {redirectToRoute} from './action';
import {APIRoute, AppRoute} from '../consts/route-consts';
import {AuthData} from '../types/auth-data';
import {UserType} from '../types/user-type';
import {ReviewType} from '../types/review-type';
import {dropToken, saveToken} from '../services/token';
import {FavouritesAdditionType} from '../consts/favourites-addition-type';


//film-actions
export const fetchFilmAction = createAsyncThunk<
  FilmType,
  string,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (filmId, {extra: api}) => {
  const {data} = await api.get<FilmType>(`${APIRoute.Films}/${filmId}`);
  return data;
});

export const fetchFilmsAction = createAsyncThunk<
  FilmType[],
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, {extra: api}) => {
  const {data} = await api.get<FilmType[]>(APIRoute.Films);
  return data;
});

export const fetchFilmDetailsAction = createAsyncThunk<
  Omit<FilmData, 'isDataLoading'>,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilmDetails', async (filmId, {extra: api}) => {
  const filmRoute = `${APIRoute.Films}/${filmId}`;

  const {data: film} = await api.get<FilmType>(filmRoute);
  const {data: reviews} = await api.get<ReviewType[]>(
    `${APIRoute.Comments}/${filmId}`
  );
  const {data: similar} = await api.get<FilmType[]>(
    `${filmRoute}${APIRoute.Similar}`
  );

  return {film, reviews, similar};
});

export const fetchPromoFilmAction = createAsyncThunk<
  FilmType,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, {extra: api}) => {
  const {data} = await api.get<FilmType>(APIRoute.Promo);
  return data;
});

export const fetchFavoriteFilmsAction = createAsyncThunk<
  FilmType[],
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteFilms', async (_arg, {extra: api}) => {
  const {data} = await api.get<FilmType[]>(`${APIRoute.Favorite}`);
  return data;
});

const changeFavoriteAction = async (
  api: AxiosInstance,
  dispatch: AppDispatch,
  filmId: string,
  status: FavouritesAdditionType
) => {
  const {data} = await api.post<FilmType>(
    `${APIRoute.Favorite}/${filmId}/${status}`
  );
  dispatch(fetchFavoriteFilmsAction());
  return data;
};

export const changeFavoriteFilmAction = createAsyncThunk<
  FilmType,
  { filmId: string; status: FavouritesAdditionType },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/changeFavoriteSimpleFilm',
  async ({filmId, status}, {dispatch, extra: api}) =>
    changeFavoriteAction(api, dispatch, filmId, status)
);

export const changeFavoritePromoFilmAction = createAsyncThunk<
  FilmType,
  { filmId: string; status: FavouritesAdditionType },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/changeFavoritePromoFilm',
  async ({filmId, status}, {dispatch, extra: api}) =>
    changeFavoriteAction(api, dispatch, filmId, status)
);

//review-action
export const postReviewAction = createAsyncThunk<
  void,
  { comment: string; rating: number; filmId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/postReview',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    await api.post(`${APIRoute.Comments}/${filmId}`, {
      comment,
      rating,
    });
    dispatch(fetchFilmDetailsAction(filmId));
    dispatch(redirectToRoute(`${AppRoute.Films}/${filmId}`));
  }
);

//authentication-actions
export const checkAuthAction = createAsyncThunk<
  UserType,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, {extra: api}) => {
  const {data} = await api.get<UserType>(APIRoute.Login);
  return data;
});

export const loginAction = createAsyncThunk<
  UserType,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({email, password}, {dispatch, extra: api}) => {
  const {data} = await api.post<UserType>(APIRoute.Login, {
    email,
    password,
  });
  saveToken(data.token);
  dispatch(redirectToRoute(AppRoute.Root));
  return data;
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, {extra: api}) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
