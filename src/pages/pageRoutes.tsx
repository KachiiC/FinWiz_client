import pagesData from './pagesData';
import { Route } from 'react-router-dom';


const defaultPageRoutes = pagesData
  .filter((page) => page.showDefault)
  .map((page) => {
    const { path, element, title } = page;
    const routeArgs = {
      path,
      element,
    };

    return <Route {...routeArgs} key={title} />;
  });

const authPageRoutes = pagesData
  .filter((page) => page.showAuth)
  .map((page) => {
    const { path, element, title } = page;
    const routeArgs = {
      path,
      element,
    };

    return <Route {...routeArgs} key={title} />;
  });

export { defaultPageRoutes, authPageRoutes };