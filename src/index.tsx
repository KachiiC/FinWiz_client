// Imports
import { StrictMode } from 'react';
import { render } from 'react-dom';

// Local imports
import App from './App';
import AuthApp from 'AuthApp';

// Styles
import './index.scss';
import 'antd/dist/antd.min.css';

const root = document.getElementById('root');
// todo - set this value in context api
const auth = true;

render(
  <StrictMode>
    {auth ? <AuthApp /> : <App />}
  </StrictMode>,
  root
);

