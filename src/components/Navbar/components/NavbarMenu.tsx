// DATA
import { navMenuList } from './NavbarMenuData';
// HELPERS
import { defaultMenus, menuRender } from 'helpers/menuHelpers';

export const authNavMenus = menuRender(navMenuList, 'desktop');

export const defaultNavMenus = () => menuRender(defaultMenus(), 'desktop');
