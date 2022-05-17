// COMPONENTS
import { AntdFormButton, AntdFormFields } from './components/AntdFormComponents';
import { Form, Select } from 'antd';
// EXTERNAL
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
// INTERFACES
import { AntdFormProps } from './AntdFormInterfaces';
// REDUX
import { userApi } from 'redux/store';

const UpdateAntdForm = ({ data, params }: AntdFormProps) => {
  // Here we need to import redux services for buy and sell
  const { useUpdateUserCryptoMutation, useUpdateUserStockMutation } = userApi;
  const [userUpdateCrypto] = useUpdateUserCryptoMutation();
  const [userUpdateStock] = useUpdateUserStockMutation();

  const { user } = useAuth0();
  const navigate = useNavigate();

  // Inside this function we call api service.
  const onSubmit = (values) => {
    const { numberOfShares, marketValuePerShare, date, select } = values;

    if(select === 'buy' || select === 'sell' && numberOfShares <= params.quantity) {

      // format the data
      const asset = {
        boughtOrSold: select === 'buy' ? true : false,
        symbol: params.symbol,
        quantity: numberOfShares,
        price: marketValuePerShare,
        date: date._d,
        sub: user?.sub,
      };

      // TODO add in redux functions for all 4 cases 
      if (params.asset === 'stock') {
        userUpdateStock(asset);
      } else if (params.asset === 'crypto') {
        userUpdateCrypto(asset);
      }

      // redirect
      navigate('/profile');
    } else {
      alert('You cannot sell more stocks than you own');
    }
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
            <Form.Item name='select'>
              <Select placeholder='Select Investment Type'>
                <Select.Option value='buy'>Buy</Select.Option>
                <Select.Option value='sell'>Sell</Select.Option>
              </Select>
            </Form.Item>
            <AntdFormFields data={data} />
            {AntdFormButton}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UpdateAntdForm;
