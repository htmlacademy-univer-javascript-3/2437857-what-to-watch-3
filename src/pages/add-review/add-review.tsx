import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import ReviewBase from '../../components/review-base/review-base';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import NotFound from '../four-oh-four/four-oh-four';
import { fetchFilmAction } from '../../store/api-actions';
import { AppRoute } from '../../consts/route-consts';

function AddReview(): JSX.Element {
  const { id } = useParams();

  const { film } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const filmId = Number(id);
    if (filmId && (!film || film.id !== filmId)) {
      dispatch(fetchFilmAction(filmId));
    }
  }, [id, dispatch, film]);

  if (!film) {
    return <NotFound />;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.title} />
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
                  {film.title}
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
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="markup/img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.title}
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
