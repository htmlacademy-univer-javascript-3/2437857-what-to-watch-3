import { Navigate } from 'react-router-dom';

export type AuthorisedContentProps = {
  authorizationStatus: boolean;
  children: JSX.Element;
}

export default function AuthorisedContent(props: AuthorisedContentProps): JSX.Element {
  if (!props.authorizationStatus) {
    return <Navigate to="/login" />;
  }
  return <div>{props.children}</div>;
}
