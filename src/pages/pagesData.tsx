// Local Imports
import Landing from './default/Landing';

const pagesData = [
  {
    title: 'Landing',
    path: '/',
    element: <Landing />,
    showAuth: true,
    showDefault: true
  },
  {
    title: 'About',
    path: '/about',
    element: <h1>About</h1>,
    showAuth: true,
    showDefault: true
  },
];

export default pagesData;