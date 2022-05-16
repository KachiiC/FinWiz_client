import { useState } from 'react';
// COMPONENTS
import { AuthButton, NavLogoIcon } from './NavComponents';
import { defaultMenus, menuRender } from 'helpers/menuHelpers';
// DATA
import { navMenuList } from './NavbarMenuData';
// EXTERNAL
import { useAuth0 } from '@auth0/auth0-react';
// IMAGES
import Icons from 'assets/icons';

const { BurgerImg } = Icons;


const MobileMenu = () => {
  
  const { isAuthenticated } = useAuth0();
  
  // Toogles the mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);

  // Auth Logic
  const authLogic = isAuthenticated ? 'Logout' : 'Login';
  const menuList = isAuthenticated ? navMenuList : defaultMenus();

  const mobileMenuButton = (
    <img
      src={BurgerImg}
      className='hamburgerIcon'
      alt='mobile-menu'
      onClick={() => setMobileMenu(!mobileMenu)}
    />
  );

  // Dropdown Mobile Menu
  const mobileMenuDropDown = (
    <div className='mobileNavLinks' id='mobileNavLinks'>
      {menuRender(menuList, 'mobile')}
      <AuthButton type={authLogic} mobile={true} />
    </div>
  );

  return (
    <>
      <header className='mobileHeader'>
        <nav className='mobileNav'>
          <NavLogoIcon />
          {mobileMenuButton}
        </nav>
      </header>
      {mobileMenu && mobileMenuDropDown}
    </>
  );
};

export default MobileMenu;
