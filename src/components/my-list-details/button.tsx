import { useNavigate } from 'react-router-dom';
import {AuthorizationStatus} from '../../consts/auth-consts';
import {AppRoute} from '../../consts/route-consts';
import {FavouritesAdditionType} from '../../consts/favourites-addition-type';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthorizationStatus } from '../../store/user/user-selectors';
import {
  changeFavoritePromoFilmAction,
  changeFavoriteFilmAction,
} from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/main/main-selectors';
import { FilmType } from '../../types/film-type';

type MyListButtonProps = {
  film: FilmType;
  isPromo?: boolean;
};

function MyListButton({ film, isPromo }: MyListButtonProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    const changeFavoriteAction = isPromo
      ? changeFavoritePromoFilmAction
      : changeFavoriteFilmAction;
    dispatch(
      changeFavoriteAction({
        status: film.isFavorite ? FavouritesAdditionType.UndoAdd : FavouritesAdditionType.Add,
        filmId: film.id,
      })
    );
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleButtonClick}
    >
      {film.isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      )}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default MyListButton;
