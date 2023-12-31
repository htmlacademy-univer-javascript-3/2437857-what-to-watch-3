import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import { FilmType } from '../../types/film-type';
import Genres from '../../components/genres/genres';
import { useAppSelector } from '../../hooks/useAppSelector';
import ShowMore from '../../components/show-more/show-more';
import { DEFAULT_SHOWN_FILMS_NUM } from '../../consts/shown-const';


const filterByGenre = (films: FilmType[], genre: string) => {
  if (genre === 'All genres') {
    return films.slice();
  }

  return films.filter((movie) => movie.genre === genre);
};

function Main(): JSX.Element {
  const { films, genre } = useAppSelector((state) => state);
  const [shownFilmsNum, setShownFilmsNum] = useState(DEFAULT_SHOWN_FILMS_NUM);

  useEffect(() => {
    setShownFilmsNum(DEFAULT_SHOWN_FILMS_NUM);
  }, [genre]);

  const handleShowMoreClick = () => {
    setShownFilmsNum(shownFilmsNum + DEFAULT_SHOWN_FILMS_NUM);
  };

  const filteredFilms = filterByGenre(films, genre);
  const promoFilm = films[0];

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="markup/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm.posterImage}
                alt={promoFilm.title}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Genres />

          <FilmsList propFilms={filteredFilms.slice(0, shownFilmsNum)} />;

          {shownFilmsNum < filteredFilms.length && (
            <ShowMore onClick={handleShowMoreClick} />
          )}
        </section>
        <footer className="page-footer">
          <Logo footer />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
