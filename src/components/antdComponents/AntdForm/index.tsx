// External
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
// COMPONENTS
import { AntdFormButton, AntdFormFields } from './components/AntdFormCompoents';
import { Form } from 'antd';
// INTERFACES
import { AntdFormProps } from './AntdFormInterfaces';
// REDUX
import { userApi } from 'redux/store';

const AntdForm = ({ data }: AntdFormProps) => {

  const { useUserAddStockMutation, useUserAddCryptoMutation } = userApi;
  const [userAddStock] = useUserAddStockMutation();
  const [userAddCrypto] = useUserAddCryptoMutation();

  const { user } = useAuth0();
  const navigate = useNavigate();

  // Inside this function we call api service. Need to check if the SYMBL exists
  const onSubmit = (values) => {
    const { symbol, numberOfShares, marketValuePerShare, date } = values;

    // format the data
    const asset = {
      symbol,
      quantity: numberOfShares,
      buyCost: marketValuePerShare,
      date: date._d,
      sub: user?.sub,
    };

    // make the post request
    values.typeselector === 'stock' ? userAddStock(asset) : userAddCrypto(asset);

    navigate('/profile');
  };

  return (
    <div className='genericContainer'>
      <Form name='basic' onFinish={onSubmit}>
        <div className='formContainer'>
          <div className='antdFormSpacing'>
            <h2 className='formTitle'>Add New Investment</h2>
            <AntdFormFields data={data} />
            {AntdFormButton}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AntdForm;
