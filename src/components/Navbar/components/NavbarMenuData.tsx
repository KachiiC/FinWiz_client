// COMPONENTS
import { Link } from 'react-router-dom';
// IMAGES
import Icons from 'assets/icons';

const { ProfileImg, AddImg, NewsImg, AboutImg } = Icons;

export const navMenuList = [
  {
    title: 'Profile',
    icon: ProfileImg,
    authentication: true,
  },
  {
    title: 'Add',
    icon: AddImg,
    authentication: true,
  },
  {
    title: 'About',
    icon: AboutImg,
    authentication: false,
  },
  {
    title: 'News',
    icon: NewsImg,
    authentication: false,
  },
];

export const browseDropdown = [
  {
    label: <Link to='/browse/stock'>Stock</Link>,
    key: 'stock',
  },
  {
    label: <Link to='/browse/crypto'>Crypto</Link>,
    key: 'crypto',
  },
  {
    label: <Link to='/browse/commodities'>Commodities</Link>,
    key: 'commodities ',
  },
];
