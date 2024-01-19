import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts/route-consts';
import { AuthorizationStatus } from '../../consts/auth-consts';
import { useAppSelector } from '../../hooks/useAppSelector';
import {getAuthorizationStatus} from '../../store/user/user-selectors';

export type AuthorisedContentProps = {
  children: JSX.Element;
}

function AuthorisedContent({ children }: AuthorisedContentProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (authorizationStatus === AuthorizationStatus.Auth) ? children : <Navigate to={AppRoute.Login} />;
}

export default AuthorisedContent;
