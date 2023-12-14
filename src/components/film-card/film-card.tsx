import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

type FilmCardProps = {
  film: Film;
  setHoverId: Dispatch<SetStateAction<number | null>>;
}

function FilmCard({film, setHoverId}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setHoverId(film.id)}
      onMouseLeave={() => setHoverId(null)}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.description} width={280} height={175}/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.title}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
