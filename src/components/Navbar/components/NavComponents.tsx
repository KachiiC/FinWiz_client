// COMPONENTS
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
// DATA
import { browseDropdown } from './NavbarMenuData';
// EXTERNAL
import { useAuth0 } from '@auth0/auth0-react';
// IMAGES
import Icons from 'assets/icons';
// INTERFACES
import { AuthButtonProps } from './NavbarInterfaces';

const { LogoutImg, LoginImg, BrowseImg, SiteLogo } = Icons;

const menuStyle = {
  backgroundColor: '#09111A',
  border: 'solid 1px lightgray',
};

export const NavLogoIcon = () => (
  <div className='nav-logo'>
    <Link to='/'>
      <img src={SiteLogo} alt='site-logo' className='nav-logo-img' />
    </Link>
  </div>
);

export const NavbarDropdown = () => {
  const BrowseDropDown = <Menu theme='dark' style={menuStyle} items={browseDropdown} />;

  return (
    <Dropdown overlay={BrowseDropDown}>
      <li className='navLink'>
        <img className='navIcon' src={BrowseImg} alt='browse' />
        Browse
      </li>
    </Dropdown>
  );
};

export const AuthButton = ({ type, mobile }: AuthButtonProps) => {
  const { logout, loginWithRedirect } = useAuth0();

  const handleLogout = () => logout({ returnTo: window.location.origin });

  const menuFunc = type === 'Logout' ? handleLogout : loginWithRedirect;
  const menuIcon = type === 'Logout' ? LogoutImg : LoginImg;

  const mobileLogic = mobile ? 'mobileLink' : 'navLink';

  return (
    <li className={mobileLogic} onClick={menuFunc}>
      <img className='navIcon' src={menuIcon} alt={type} />
      {type}
    </li>
  );
};
