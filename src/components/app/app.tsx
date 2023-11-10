import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import NotFound from '../pages/four-oh-four-page/four-oh-four-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import FilmPage from '../pages/film-page/film-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import PlayerPage from '../pages/player/player-page';
import SignInPage from '../pages/sign-in/sign-in-page';
import AuthorisedContent from '../AuthorisedContent/AuthorisedContent';


type AppProps = {
  title: string;
  genre: string;
  releaseYear: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage {...props}/>} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/mylist" element={
          <AuthorisedContent authorizationStatus>
            <MyListPage />
          </AuthorisedContent>
        }
        />
        <Route path="/films/:id" element={<FilmPage />} />
        <Route path="/films/:id/review" element={<AddReviewPage />} />
        <Route path="/player/:id" element={<PlayerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
