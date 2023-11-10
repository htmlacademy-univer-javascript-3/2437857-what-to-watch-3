import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const appProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  releaseYear: 2014,
};

root.render(
  <React.StrictMode>
    <App {...appProps} />
  </React.StrictMode>
);