
import { Film } from '../../types/film';
import FilmCard from '../film-card/film-card';

export type FilmsListProps = {
  propFilms: Film[];
};

function FilmsList({ propFilms }: FilmsListProps) {

  return (
    <div className="catalog__films-list">
      {propFilms.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmsList;
