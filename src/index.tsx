import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './store';
import 'react-toastify/dist/ReactToastify.css';
import {checkAuthAction, fetchFavoriteFilmsAction, fetchFilmsAction, fetchPromoFilmAction} from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(fetchPromoFilmAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchFavoriteFilmsAction());
store.dispatch(checkAuthAction());


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
