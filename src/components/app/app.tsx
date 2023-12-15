import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../../pages/main-page/main';
import { MainPageProps } from '../../pages/main-page/main';
import NotFound from '../../pages/four-oh-four/four-oh-four';
import AddReview from '../../pages/add-review/add-review';
import FilmPage from '../../pages/film-page/film-page';
import MyList from '../../pages/my-list-page/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import AuthorisedContent from '../authorised-content/authorised-content';
import { reviews } from '../../mocks/reviews';

function App({ promoFilm, films }: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main promoFilm={promoFilm} films={films}/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route
          path="/mylist"
          element={
            <AuthorisedContent>
              <MyList films={films}/>
            </AuthorisedContent>
          }
        />
        <Route path="films/:id" element={<FilmPage film={films[1]} reviews={reviews} similarFilms={films.slice(1)} /> }/>
        <Route path="films/:id/review" element={<AddReview film={films[0]} />}/>
        <Route path="player/:id" element={<Player film={films[0]} />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

