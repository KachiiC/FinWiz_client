// Imports
import { BrowserRouter } from 'react-router-dom';

// Local Imports
import { AuthPages } from 'pages';

// Styles
import './App.scss';

const AuthApp = () => {
  return (
    <div className="App">
      <BrowserRouter>
        { AuthPages }
      </BrowserRouter>
    </div>
  );
};

export default AuthApp;
