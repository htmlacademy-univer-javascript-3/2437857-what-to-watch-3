import { Navigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import Logo from '../../components/logo/logo';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { AppRoute} from '../../consts/route-consts';
import { AuthorizationStatus} from '../../consts/auth-consts';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getAuthorizationStatus} from '../../store/user/user-selectors';
import Footer from '../../components/footer/footer';


function SignIn(): JSX.Element {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} replace />;
  }

  const onSubmit = async (authData: AuthData) => {
    try {
      setError('');
      const result = await dispatch(loginAction(authData));
      const unwrapped = unwrapResult(result);
    } catch (err){
      setError('Перепроверьте email и попробуйте добавить в пароль и цифры, и буквы.');
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      email,
      password,
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {error && (
            <div className="sign-in__message">
              <p>{error}</p>
            </div>
          )}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              disabled={!email || !password}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      {}
      <Footer />
    </div>
  );
}

export default SignIn;
