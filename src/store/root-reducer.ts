import { combineReducers } from '@reduxjs/toolkit';
import { Slice } from '../consts/slices';
import { filmData } from './film/film-data';
import { userProcess } from './user/user-process';
import { mainProcess } from './main/main-process';

export const rootReducer = combineReducers({
  [Slice.Film]: filmData.reducer,
  [Slice.User]: userProcess.reducer,
  [Slice.Main]: mainProcess.reducer,
});
