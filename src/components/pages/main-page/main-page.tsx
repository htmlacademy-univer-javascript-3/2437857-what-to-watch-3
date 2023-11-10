import FilmCard from '../../film-card/film-card';

type MainPageProps = {
  title: string;
  genre: string;
  releaseYear: number;
}

export function MainPage({title, genre, releaseYear}: MainPageProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="markup/img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

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
                src="markup/img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{releaseYear}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
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
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids &amp; Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>
          <div className="catalog__films-list">
            <FilmCard title="Fantastic Beasts: The Crimes of Grindelwald"
              image="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
            />
            <FilmCard title="Bohemian Rhapsody" image="img/bohemian-rhapsody.jpg"/>
            <FilmCard title="Macbeth" image="img/macbeth.jpg"/>
            <FilmCard title="Aviator" image="img/aviator.jpg"/>
            <FilmCard title="We need to talk about Kevin" image="img/we-need-to-talk-about-kevin.jpg"/>
            <FilmCard title="What We Do in the Shadows" image="img/what-we-do-in-the-shadows.jpg"/>
            <FilmCard title="Revenant" image="img/revenant.jpg"/>
            <FilmCard title="Johnny English" image="img/johnny-english.jpg"/>
            <FilmCard title="Shutter Island" image="img/shutter-island.jpg"/>
            <FilmCard title="Pulp Fiction" image="img/pulp-fiction.jpg"/>
            <FilmCard title="No Country for Old Men" image="img/no-country-for-old-men.jpg"/>
            <FilmCard title="Snatch" image="img/snatch.jpg"/>
            <FilmCard title="Moonrise Kingdom" image="img/moonrise-kingdom.jpg"/>
            <FilmCard title="Seven Years in Tibet" image="img/seven-years-in-tibet.jpg"/>
            <FilmCard title="Midnight Special" image="img/midnight-special.jpg"/>
            <FilmCard title="War of the Worlds" image="img/war-of-the-worlds.jpg"/>
            <FilmCard title="Dardjeeling Limited" image="img/dardjeeling-limited.jpg"/>
            <FilmCard title="Orlando" image="img/orlando.jpg"/>
            <FilmCard title="Mindhunter" image="img/mindhunter.jpg"/>
            <FilmCard title="Midnight Special" image="img/midnight-special.jpg"/>
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
