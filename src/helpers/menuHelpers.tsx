// COMPONENTS
import { Link } from 'react-router-dom';
import { navMenuList } from 'components/Navbar/components/NavbarMenuData';

interface menuRenderData {
  title: string | null | undefined;
  icon: string;
}

// returns menu links based on type - mobile or desktop
export const menuRender = (data: menuRenderData[], type: 'mobile' | 'desktop') => {
  const typeLogic = type === 'mobile' ? 'mobileLink' : 'navLink';

  return data.map(({ title, icon }) => (
    <li className={typeLogic} key={title}>
      <Link to={`/${title}`} className='link'>
        <img className='navIcon' src={icon} alt='about' />
        {title}
      </Link>
    </li>
  ));
};

export const defaultMenus = () => navMenuList.filter(({ authentication }) => !authentication);
