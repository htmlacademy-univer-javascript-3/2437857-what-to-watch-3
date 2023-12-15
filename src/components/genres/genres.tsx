import {DEFAULT_GENRE} from '../../const/genre-const';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {setGenre} from '../../store/action';
import {FilmType} from '../../types/film-type';

export const getGenres = (films: FilmType[]) => [
  DEFAULT_GENRE,
  ...new Set(films.map((f) => f.genre)),
];

function GenresList() {
  const currentGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);
  const allGenres = getGenres(films);
  const dispatch = useAppDispatch();

  const onClick = (genre: string) => {
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
            onClick={(e) => {
              e.preventDefault();
              onClick(genre);
            }}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
