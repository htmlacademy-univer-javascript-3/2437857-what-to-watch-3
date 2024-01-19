import Logo from '../logo/logo';

function Footer() {
  return (
    <footer className="page-footer">
      <Logo footer />

      <div className="copyright">
        <p>© {new Date().getFullYear()} What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
