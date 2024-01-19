
import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewBase from '../../components/review-base/review-base';
import { useAppSelector } from '../../hooks/useAppSelector';
import NotFound from '../four-oh-four/four-oh-four';
import { AppRoute } from '../../consts/route-consts';
import UserBlock from '../../components/user-block/user-block';
import {isFilmDataLoading, getFilm} from '../../store/film/film-selectors';
import {useFilm} from '../../hooks/useFilmDetails';
import Spinner from '../spinner/spinner';

function AddReview(): JSX.Element {
  const id = useParams().id || '';

  const film = useAppSelector(getFilm);
  const isDataLoading = useAppSelector(isFilmDataLoading);

  useFilm(id, film);

  if (isDataLoading) {
    return <Spinner />;
  }

  if (!film) {
    return <NotFound />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={`${AppRoute.Films}/${Number(id)}`}
                  className="breadcrumbs__link"
                >
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  to={`${AppRoute.Films}/${Number(id)}/review`}
                  className="breadcrumbs__link"
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>
      <ReviewBase />
    </section>
  );
}

export default AddReview;
