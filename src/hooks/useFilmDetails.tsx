import {useEffect} from 'react';
import {FilmType} from '../types/film-type';
import {useAppDispatch} from './useAppDispatch';
import {fetchFilmAction, fetchFilmDetailsAction} from '../store/api-actions';

export const useFilm = (
  filmId: string,
  film: FilmType | null,
  withDetails?: boolean
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted && (!film || film.id !== filmId)) {
      if (withDetails) {
        dispatch(fetchFilmDetailsAction(filmId));
      } else {
        dispatch(fetchFilmAction(filmId));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, film, filmId, withDetails]);
};
