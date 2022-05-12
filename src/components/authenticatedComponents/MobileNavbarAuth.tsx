// Imports
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// Local imports
import ProfileImg from 'assets/icons/profile.svg';
import AddImg from 'assets/icons/add.svg';
import BrowseImg from 'assets/icons/search.svg';
import LogoutImg from 'assets/icons/logout.svg';
import BurgerImg from 'assets/icons/menu.svg';
import handleMenuClick from 'helpers/handleMenuClick';

const MobileNavbarAuth = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    return logout({ returnTo: window.location.origin });
  };

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
        <Link to='/profile' className='mobileLink' onClick={handleMenuClick}>
          <img className='navIcon' src={ProfileImg} alt='profile' />
          Profile
        </Link>
        <Link to='/addInvestments' className='mobileLink subLink' onClick={handleMenuClick}>
          <img className='navIcon' src={AddImg} alt='add-investment' />
          Add
        </Link>
        <Link to='/browse' className='mobileLink' onClick={handleMenuClick}>
          <img className='navIcon' src={BrowseImg} alt='browse' />
          Browse
        </Link>
        <Link to='/news' className='mobileLink' onClick={handleMenuClick}>
          <img className='navIcon' src={BrowseImg} alt='browse' />
          News
        </Link>
        <Link to='/' className='mobileLink' onClick={handleLogout}>
          <img className='navIcon' src={LogoutImg} alt='logout' />
          Logout
        </Link>
      </div>
    </header>
  );
};

export default MobileNavbarAuth;
