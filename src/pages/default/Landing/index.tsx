// Imports

// Local imports
import LineChart from 'components/default/LineChart';
import PieChart from 'components/default/PieChart';
import BarChart from 'components/default/BarChart';

// Styles
import './styles/landing.scss';

const Landing = () => {

  return (
    <div className='landingContainer'>
      <LineChart />
      <PieChart />
      <BarChart />
    </div>
  );
};

export default Landing;
