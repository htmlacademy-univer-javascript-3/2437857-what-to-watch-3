import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts/route-consts';
import { FilmType } from '../../types/film-type';
import VideoPlayer from '../videoplayer/videoplayer';

type FilmCardProps = {
  film: FilmType;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const ms = 1000;

  const handleCardMouseEnter = () => {
    const id = setTimeout(setIsPlaying, ms, true);
    setTimeoutId(id);
  };

  const handleCardMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsPlaying(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
      onClick={() => navigate(`${AppRoute.Films}/${film.id}`)}
    >
      <div className="small-film-card__image">
        {isPlaying ? (
          <VideoPlayer
            src={film.videoLink}
            poster={film.previewImage}
            muted
          />
        ) : (
          <img
            src={film.previewImage}
            alt={film.description}
            width="280"
            height="175"
          />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Films}/${film.id}`}>
          {film.title}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
