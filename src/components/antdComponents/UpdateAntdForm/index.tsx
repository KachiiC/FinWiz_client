// COMPONENTS
import { AntdFormButton, AntdFormFields } from './components/AntdFormCompoents';
import { Form } from 'antd';
// EXTERNAL
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
// INTERFACES
import { AntdFormProps } from './AntdFormInterfaces';
// REDUX
import { userApi } from 'redux/store';

const UpdateAntdForm = ({ data }: AntdFormProps) => {
  const { useUserAddStockMutation, useUserAddCryptoMutation } = userApi;
  const [userAddStock] = useUserAddStockMutation();
  const [userAddCrypto] = useUserAddCryptoMutation();

  const { user } = useAuth0();
  const navigate = useNavigate();

  // Inside this function we call api service.
  const onSubmit = (values) => {
    const { numberOfShares, marketValuePerShare, date, select } = values;

    // format the data
    const asset = {
      // symbol: symbolVal, // get from params
      quantity: numberOfShares,
      buyCost: marketValuePerShare,
      date: date._d,
      sub: user?.sub,
    };

    // Instead of getting in an if statement we need to get from params
    if (select === 'stock') {
      userAddStock(asset);
    } else if (select === 'crypto') {
      userAddCrypto(asset);
    }

    // redirect
    navigate('/profile');
  };

  return (
    <div className='genericContainer'>
      <Form
        name='basic'
        onFinish={onSubmit}
      >
        <div className='formContainer'>
          <div className='antdFormSpacing'>
            <h2 className='formTitle'>Update Investment</h2>
            <AntdFormFields data={data} />
            {AntdFormButton}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UpdateAntdForm;
