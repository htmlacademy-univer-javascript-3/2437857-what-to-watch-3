import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {FilmType} from '../types/film-type';
import {setDataLoadingStatus, setFilms} from './action';
import {APIRoute} from '../consts/route-consts';

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
