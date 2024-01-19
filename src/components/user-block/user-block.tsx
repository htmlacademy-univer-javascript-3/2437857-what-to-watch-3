import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts/route-consts';
import { AuthorizationStatus } from '../../consts/auth-consts';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {useNavigate} from 'react-router-dom';
import {getUser} from '../../store/user/user-selectors';
import {getAuthorizationStatus} from '../../store/user/user-selectors';


function UserBlock() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar"
              onClick={() => navigate(AppRoute.MyList)}
            >
              <img
                src={user?.avatar ?? 'img/avatar.jpg'}
                alt="avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to={AppRoute.Root}
              className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
            >
              Sign out
            </Link>
          </li>
        </>
      ) : (
        <Link to={AppRoute.Login} className="user-block__link">
          Sign in
        </Link>
      )}
    </ul>
  );
}

export default UserBlock;
