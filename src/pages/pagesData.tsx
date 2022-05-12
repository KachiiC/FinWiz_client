// Local Imports
// default
import Landing from './default/Landing';
import About from './default/About';
import Details from './default/Details';
import Contact from './default/Contact';
import Browse from './default/Browse';

// auth
import Profile from './authenticatedPages/Profile';
import AddInvestments from './authenticatedPages/AddInvestment';

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
    element: <About />,
    showAuth: true,
    showDefault: true
  },
  {
    title: 'Details',
    path: '/details/:symbol',
    element: <Details />,
    showAuth: true,
    showDefault: true
  },
  {
    title: 'Contact',
    path: '/contact',
    element: <Contact />,
    showAuth: true,
    showDefault: true
  },
  {
    title: 'Browse',
    path: '/browse',
    element: <Browse />,
    showAuth: true,
    showDefault: true
  },
  {
    title: 'Profile',
    path: '/profile',
    element: <Profile />,
    showAuth: true,
    showDefault: false
  },
  {
    title: 'AddInvestments',
    path: '/addInvestments',
    element: <AddInvestments />,
    showAuth: true,
    showDefault: false
  },
  {
    title: 'Not Found',
    path: '*',
    element: <h1>404 not found</h1>,
    showAuth: true,
    showDefault: true
  },
];

export default pagesData;