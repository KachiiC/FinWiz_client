// COMPONENTS
import { navMenuList } from 'components/Navbar/components/NavbarMenuData';
import { Link } from 'react-router-dom';

interface menuRenderData {
  title: string | null | undefined;
  icon: string;
}

export const menuRender = (data: menuRenderData[], type: 'mobile' | 'desktop') => {
  const typeLogic = type === 'mobile' ? 'mobileLink' : 'navLink';

  return data.map((nav) => (
    <li className={typeLogic} key={nav.title}>
      <Link to={`/${nav.title}`} className='link'>
        <img className='navIcon' src={nav.icon} alt='about' />
        {nav.title}
      </Link>
    </li>
  ));
};

export const defaultMenus = () => navMenuList.filter((nav) => !nav.authentication);
