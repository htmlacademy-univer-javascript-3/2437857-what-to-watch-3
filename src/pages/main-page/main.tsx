import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import { FilmType } from '../../types/film-type';
import Genres from '../../components/genres/genres';
import { useAppSelector } from '../../hooks/useAppSelector';
import ShowMore from '../../components/show-more/show-more';
import { DEFAULT_SHOWN_FILMS_NUM } from '../../consts/shown-const';
import { AppRoute } from '../../consts/route-consts';
import NotFound from '../four-oh-four/four-oh-four';
import UserBlock from '../../components/user-block/user-block';
import {DEFAULT_GENRE} from '../../consts/genre-const';
import {getFilms, getGenre, getPromoFilm} from '../../store/main/main-selectors';
import Button from '../../components/my-list-details/button';
import Footer from '../../components/footer/footer';


const filterByGenre = (films: FilmType[], genre: string) => {
  if (genre === DEFAULT_GENRE) {
    return films.slice();
  }

  return films.filter((f) => f.genre === genre);
};

function Main(): JSX.Element {
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const genre = useAppSelector(getGenre);
  const [shownFilmsNum, setShownFilmsNum] = useState(DEFAULT_SHOWN_FILMS_NUM);

  useEffect(() => {
    setShownFilmsNum(DEFAULT_SHOWN_FILMS_NUM);
  }, [genre]);

  if (!promoFilm) {
    return <NotFound />;
  }

  const handleShowMoreClick = () => {
    setShownFilmsNum(shownFilmsNum + DEFAULT_SHOWN_FILMS_NUM);
  };

  const filteredFilms = filterByGenre(films, genre);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.posterImage} alt={promoFilm.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm.backgroundImage}
                alt={promoFilm.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${AppRoute.Player}/${promoFilm.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <Button film={promoFilm} isPromo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Genres />

          <FilmsList propFilms={filteredFilms.slice(0, shownFilmsNum)} />

          {shownFilmsNum < filteredFilms.length && (
            <ShowMore onClick={handleShowMoreClick} />
          )}
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
