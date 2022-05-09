import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import AuthApp from 'AuthApp';
import './index.css';
import 'antd/dist/antd.min.css';

const root = document.getElementById('root');
const auth = true;

render(
  <StrictMode>
    {auth ? <AuthApp /> : <App />}
  </StrictMode>,
  root
);

