import { useAuth0 } from '@auth0/auth0-react';
// REDUX
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { userApi } from 'redux/store';
// COMPONENTS
import { AuthPages, Pages } from 'pages';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Spinner from 'components/antdComponents/AntdSpinner';
// STYLES
import 'sassVariables/App.scss';

const App = () => {
  // check if user is authenticated
  const { isAuthenticated, isLoading } = useAuth0();
  const app = isAuthenticated ? AuthPages : Pages;

  // if loading show loading placeholder
  // todo - replace with spinner or loading icon
  if (isLoading) return <Spinner />;

  return (
    <ApiProvider api={userApi}>
      <BrowserRouter>
        <Navbar />
        <main>{app}</main>
        <Footer />
      </BrowserRouter>
    </ApiProvider>
  );
};

export default App;
