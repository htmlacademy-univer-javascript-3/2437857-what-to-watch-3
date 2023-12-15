import { MouseEvent } from 'react';
import {DEFAULT_GENRE} from '../../consts/genre-const';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {setGenre} from '../../store/action';
import {FilmType} from '../../types/film-type';

export const getGenres = (films: FilmType[]) => [
  DEFAULT_GENRE,
  ...new Set(films.map((f) => f.genre)),
];

function GenresList() {
  const { genre: currentGenre, films } = useAppSelector((state) => state);
  const allGenres = getGenres(films);
  const dispatch = useAppDispatch();

  const handleGenreClick = (
    e: MouseEvent<HTMLAnchorElement>,
    genre: string
  ) => {
    e.preventDefault();
    dispatch(setGenre({genre}));
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
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(e) => handleGenreClick(e, genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
