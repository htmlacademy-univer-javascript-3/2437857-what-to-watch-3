import { Navigate } from 'react-router-dom';

export type AuthorisedContentProps = {
  authorizationPassed?: boolean;
  children: JSX.Element;
}

function AuthorisedContent({ authorizationPassed, children }: AuthorisedContentProps): JSX.Element {
  return authorizationPassed ? children : <Navigate to={'/login'} />;
}

export default AuthorisedContent;
