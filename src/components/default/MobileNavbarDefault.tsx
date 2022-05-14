// Imports
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

// Local Imports
import BrowseImg from 'assets/icons/search.svg';
import LoginImg from 'assets/icons/login.svg';
import BurgerImg from 'assets/icons/menu.svg';
import handleMenuClick from 'helpers/handleMenuClick';
import NewsImg from 'assets/icons/news.svg';
import AboutImg from 'assets/icons/about.svg';

const MobileNavbarDefault = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <header className='mobileHeader'>
      <nav className='mobileNav'>
        <Link to='/'>
          <h1 className='logo'>FinWiz</h1>
        </Link>
        <img
          className='hamburgerIcon'
          id='hamburgerIcon'
          src={BurgerImg}
          alt='menu'
          onClick={handleMenuClick}
        />
      </nav>

      <div className='mobileNavLinks' id='mobileNavLinks'>

        <Link to="/about" className='mobileLink' >
          <img className="navIcon" src={AboutImg} alt="about" />
          About
        </Link>
        <Link to='/browse' className='mobileLink' onClick={handleMenuClick}>
          <img className='navIcon' src={BrowseImg} alt='browse' />
          Browse
        </Link>
        <Link to='/news' className='mobileLink' onClick={handleMenuClick}>
          <img className='navIcon' src={NewsImg} alt='browse' />
          News
        </Link> 
        <Link to='/' className='mobileLink' onClick={loginWithRedirect}>
          <img className='navIcon' src={LoginImg} alt='login' />
          Login
        </Link>

      </div>
    </header>
  );
};

export default MobileNavbarDefault;
