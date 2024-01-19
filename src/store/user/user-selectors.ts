import { State } from '../../types/state';
import { Slice } from '../../consts/slices';
import { UserType } from '../../types/user-type';
import {AuthorizationStatus} from '../../consts/auth-consts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[Slice.User].authorizationStatus;
export const getUser = (state: State): UserType | null =>
  state[Slice.User].user;
