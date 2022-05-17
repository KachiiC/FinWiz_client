// COMPONENTS
import UpdateAntdForm from 'components/antdComponents/UpdateAntdForm';
// DATA
import { updateFormData } from './components/UpdateInvestmentFormComponents';
// STYLES
import './UpdateInvestment.scss';

const UpdateInvestments = () => <UpdateAntdForm data={updateFormData} />;

export default UpdateInvestments;