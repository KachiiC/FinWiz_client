// COMPONENTS
import AntdForm from 'components/antdComponents/AntdForm';
// DATA
import { stocksFormData } from './components/InvestmentFormComponents';
// STYLES
import './AddInvestment.scss';

const AddInvestments = () => <AntdForm data={stocksFormData} />;

export default AddInvestments;
