// Imports
import { Routes } from 'react-router-dom';

// Local imports
import { defaultPageRoutes, authPageRoutes } from './pageRoutes';

const Pages = (
  <Routes>
    {defaultPageRoutes}
  </Routes>
);

const AuthPages = (
  <Routes>
    { authPageRoutes }
  </Routes>
);

export { Pages, AuthPages };