import {Link} from 'react-router-dom';

export type LogoProps = {
  footer?: boolean;
};

function Logo({footer}: LogoProps) {
  return (
    <div className="logo">
      <Link
        to="/"
        className={footer ? 'logo__link logo__link--light' : 'logo__link'}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
