import { Middleware } from 'redux';
import browserHistory from '../../history';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () => (next) => (action) => {
    if (action.type === 'main/redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
