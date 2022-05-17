// COMPONENTS
import AddAntdForm from 'components/antdComponents/AddAntdForm';
// DATA
import { stocksFormData } from './components/InvestmentFormComponents';
// STYLES
import './AddInvestment.scss';

const AddInvestments = () => <AddAntdForm data={stocksFormData} />;

export default AddInvestments;
