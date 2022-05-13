// Imports
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

// Local Imports
import BrowseImg from 'assets/icons/search.svg';
import LoginImg from 'assets/icons/login.svg';

const DesktopNavbarDefault = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <header className='mainHeader'>
      <nav className='topNavbar'>
        <Link to='/'>
          <h1 className='logo'>FinWiz</h1>
        </Link>
        <ul className='navLinks'>
          <li className='navLink'>
            <Link to='/news' className='link'>
              <img className='navIcon' src={BrowseImg} alt='browse' />
              News
            </Link>
          </li>
          <li className='navLink'>
            <Link to='/browse/stock' className='link'>
              <img className='navIcon' src={BrowseImg} alt='browse' />
              Browse
            </Link>
          </li>
          <li className='navLink' onClick={loginWithRedirect}>
            <Link to='/' className='link'>
              <img className='navIcon' src={LoginImg} alt='login' />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavbarDefault;
