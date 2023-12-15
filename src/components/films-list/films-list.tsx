
import { FilmType } from '../../types/film-type';
import FilmCard from '../film-card/film-card';

export type FilmsListProps = {
  propFilms: FilmType[];
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
