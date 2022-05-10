// Imports
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

// Local Imports
import BrowseImg from 'assets/icons/search.svg';
import LogoutImg from 'assets/icons/logout.svg';
import BurgerImg from 'assets/icons/menu.svg';
import handleMenuClick from 'helpers/handleMenuClick';

const MobileNavbarDefault = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <header className="mobileHeader">
      <nav className="mobileNav">
        <Link to="/">
          <h1 className="logo">FinWiz</h1>
        </Link>
        <img className="hamburgerIcon" id="hamburgerIcon" src={BurgerImg} alt="menu" onClick={handleMenuClick} />
      </nav>

      <div className="mobileNavLinks" id="mobileNavLinks">
        <Link to="/browse" className="mobileLink" onClick={handleMenuClick}>
          <img className="navIcon" src={BrowseImg} alt="browse" />
          Browse
        </Link>

        <Link to="/" className="mobileLink" onClick={loginWithRedirect}>
          <img className="navIcon" src={LogoutImg} alt="logout" />
          Login
        </Link>
      </div>
    </header>
  );
};

export default MobileNavbarDefault;