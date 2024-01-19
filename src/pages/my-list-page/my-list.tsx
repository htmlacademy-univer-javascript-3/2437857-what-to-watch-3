import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getFavoriteFilms} from '../../store/main/main-selectors';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';

function MyList(): JSX.Element {
  const films = useAppSelector(getFavoriteFilms);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">
          My list{' '}
          <span className="user-page__film-count">{films.length}</span>
        </h1>

        <UserBlock/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList propFilms={films}/>
      </section>
      <Footer/>
    </div>
  );
}

export default MyList;
