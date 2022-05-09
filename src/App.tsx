// COMPONENTS
import { BrowserRouter } from 'react-router-dom';
// CSS
import './App.css';
// PAGES
import { Pages } from 'pages';

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
