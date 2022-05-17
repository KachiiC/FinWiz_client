// COMPONENTS
import { useParams } from 'react-router-dom';
import UpdateAntdForm from 'components/antdComponents/UpdateAntdForm';
// DATA
import { updateFormData } from './components/UpdateInvestmentFormComponents';
// STYLES
import './UpdateInvestment.scss';

const UpdateInvestments = () => {

  const params = useParams();

  return (
    <UpdateAntdForm params={params} data={updateFormData} />
  );
};

export default UpdateInvestments;