// Imports
import { BrowserRouter } from 'react-router-dom';

// Local imports
import { Pages } from 'pages';

// Styles
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {Pages}
      </BrowserRouter>
    </div>
  );
};

export default App;
