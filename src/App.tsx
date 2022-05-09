// Imports
import { BrowserRouter } from 'react-router-dom';

// Local imports
import { Pages } from 'pages';
import Navbar from 'components/default/Navbar';

// Styles
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {Pages}
      </BrowserRouter>
    </div>
  );
};

export default App;
