import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts/route-consts';
import { AuthorizationStatus } from '../../consts/auth-consts';
import { useAppSelector } from '../../hooks/useAppSelector';

export type AuthorisedContentProps = {
  children: JSX.Element;
}

function AuthorisedContent({ children }: AuthorisedContentProps): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);
  return (authorizationStatus === AuthorizationStatus.Auth) ? children : <Navigate to={AppRoute.Login} />;

}

export default AuthorisedContent;
