import { Route, Routes} from 'react-router-dom';
import Main from '../../pages/main-page/main';
import NotFound from '../../pages/four-oh-four/four-oh-four';
import AddReview from '../../pages/add-review/add-review';
import FilmPage from '../../pages/film-page/film-page';
import MyList from '../../pages/my-list-page/my-list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import AuthorisedContent from '../authorised-content/authorised-content';
import { AppRoute } from '../../consts/route-consts';
import { AuthorizationStatus } from '../../consts/auth-consts';
import Spinner from '../../pages/spinner/spinner';
import { useAppSelector } from '../../hooks/useAppSelector';
import {isMainDataLoading} from '../../store/main/main-selectors';
import {getAuthorizationStatus} from '../../store/user/user-selectors';
import HistoryRouter from '../history/history-router';
import browserHistory from '../../history';

function App(): JSX.Element {
  const isDataLoading = useAppSelector(isMainDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isDataLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root}/>
        <Route index element={<Main />} />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <AuthorisedContent>
              <MyList />
            </AuthorisedContent>
          }
        />
        <Route path={`${AppRoute.Films}/:id`} element={<FilmPage />} />
        <Route
          path={`${AppRoute.Films}/:id/review`}
          element={
            <AuthorisedContent>
              <AddReview />
            </AuthorisedContent>
          }
        />
        <Route path={`${AppRoute.Player}/:id`} element={<Player />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;

