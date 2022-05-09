// COMPONENTS
import { BrowserRouter } from 'react-router-dom';
// CSS
import './App.css';
// PAGES
import { AuthPages } from 'pages';

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
