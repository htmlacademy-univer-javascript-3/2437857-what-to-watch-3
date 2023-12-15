import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from '../../pages/main-page/main';
import NotFound from '../../pages/four-oh-four/four-oh-four';
import AddReview from '../../pages/add-review/add-review';
import FilmPage from '../../pages/film-page/film-page';
import MyList from '../../pages/my-list-page/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import AuthorisedContent from '../authorised-content/authorised-content';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/login" element={<SignIn/>}/>
        <Route
          path="/mylist"
          element={
            <AuthorisedContent>
              <MyList />
            </AuthorisedContent>
          }
        />
        <Route path="films/:id" element={<FilmPage />} />
        <Route path="films/:id/review" element={<AddReview />} />
        <Route path="player/:id" element={<Player />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

