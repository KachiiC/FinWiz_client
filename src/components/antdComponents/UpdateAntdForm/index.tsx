// COMPONENTS
import { AntdFormButton, AntdFormFields } from './components/AntdFormCompoents';
import { Form, Select } from 'antd';
// EXTERNAL
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
// INTERFACES
import { AntdFormProps } from './AntdFormInterfaces';
// REDUX
// import { userApi } from 'redux/store';

const UpdateAntdForm = ({ data, params }: AntdFormProps) => {
  // Here we need to import redux services for buy and sell
  // const { useUserAddStockMutation } = userApi;
  // const [userAddStock] = useUserAddStockMutation();

  const { user } = useAuth0();
  const navigate = useNavigate();

  // Inside this function we call api service.
  const onSubmit = (values) => {
    const { numberOfShares, marketValuePerShare, date, select } = values;

    // format the data
    const asset = {
      boughtOrSold: select === 'buy' ? true : false,
      symbol: params.symbol,
      quantity: numberOfShares,
      buyCost: marketValuePerShare,
      date: date._d,
      sub: user?.sub,
    };

    console.log('asset from update form', asset);

    // TODO add in redux functions for all 4 cases 
    if (params.asset === 'stock') {
      if (select === 'buy') {
        // userBuyStock(asset);
      } else if (select === 'sell') {
        // userSellStock(asset);
      }
    } else if (params.asset === 'crypto') {
      if (select === 'buy') {
        // userBuyCrypto(asset);
      } else if (select === 'sell') {
        // userSellCrypto(asset);
      }
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
