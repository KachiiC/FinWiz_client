// COMPONENTS
import { Spin } from 'antd';
// STYLES
import './Spinner.scss';

const Spinner = () => (
  <div className='spinnerContainer'>
    <Spin size='large' className='spinner' />
  </div>
);

export default Spinner;
