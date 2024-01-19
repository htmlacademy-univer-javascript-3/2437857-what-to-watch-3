import {MouseEvent} from 'react';
import {DEFAULT_GENRE} from '../../consts/genre-const';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {setGenre} from '../../store/action';
import {FilmType} from '../../types/film-type';
import {getFilms, getGenre} from '../../store/main/main-selectors';
import {Link} from 'react-router-dom';

export const getGenres = (films: FilmType[]) => [
  DEFAULT_GENRE,
  ...new Set(films.map((f) => f.genre)),
];

function GenresList() {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector(getGenre);
  const films = useAppSelector(getFilms);
  const allGenres = getGenres(films).slice(0, 10);

  const handleGenreClick = (
    e: MouseEvent<HTMLAnchorElement>,
    genre: string
  ) => {
    e.preventDefault();
    dispatch(setGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${
            currentGenre === genre ? 'catalog__genres-item--active' : ''
          }`}
        >
          <Link
            to={`?genre=${genre}`}
            className="catalog__genres-link"
            onClick={(evt) => handleGenreClick(evt, genre)}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
