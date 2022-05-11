// Imports
import { Spin } from 'antd';

// Styles
import './styles/Spinner.scss';

const Spinner = () => {
  return (
    <div className='spinnerContainer'>
      <Spin size='large' className='spinner' />
    </div>
  );
};

export default Spinner;