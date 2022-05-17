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

const UpdateAntdForm = ({ data, params }: any) => {
  const { useUserAddStockMutation, useUserAddCryptoMutation } = userApi;
  const [userAddStock] = useUserAddStockMutation();
  const [userAddCrypto] = useUserAddCryptoMutation();

  const { user } = useAuth0();
  const navigate = useNavigate();

  // Inside this function we call api service.
  const onSubmit = (values) => {
    const { numberOfShares, marketValuePerShare, date } = values;

    // format the data
    const asset = {
      symbol: params.symbol,
      quantity: numberOfShares,
      buyCost: marketValuePerShare,
      date: date._d,
      sub: user?.sub,
    };

    if (params.asset === 'stock') {
      userAddStock(asset);
    } else if (params.asset === 'crypto') {
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
            <p className='updateFormParam'>{params.asset.slice(0, 1).toUpperCase().concat(params.asset.slice(1))}</p>
            <p className='updateFormParam'>{params.symbol}</p>
            <AntdFormFields data={data} />
            {AntdFormButton}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UpdateAntdForm;
