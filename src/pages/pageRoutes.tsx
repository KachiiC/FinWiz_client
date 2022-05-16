// COMPONENTS
import { Route } from 'react-router-dom';
// DATA
import pagesData from './pagesData';

export const defaultPageRoutes = pagesData
  .map(({ path, element, title }) => {
    
    const routeArgs = { path, element };

    return <Route {...routeArgs} key={title} />;
  });

export const authPageRoutes = pagesData
  .filter((page) => !page.showDefault)
  .map(({ path, element, title }) => {
    const routeArgs = { path, element };

    return <Route {...routeArgs} key={title} />;
  });
