// Imports
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Local imports
import { Pages, AuthPages } from 'pages';
import AuthNavbar from 'components/auth/AuthNavbar';
import DefaultNavbar from 'components/default/DefaultNavbar';

// Styles
import './App.scss';

const App = () => {

  const { isAuthenticated } = useAuth0();

  const app = isAuthenticated ? (<><AuthNavbar /> {AuthPages}</>) : (<><DefaultNavbar /> {Pages}</>);

  return (
    <div className="App">
      <BrowserRouter>
        { app }
      </BrowserRouter>
    </div>
  );
};

export default App;
