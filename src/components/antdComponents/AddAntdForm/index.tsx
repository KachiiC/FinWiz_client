// COMPONENTS
import { AntdFormButton, AntdFormFields } from './components/AntdFormCompoents';
import { Form, Select } from 'antd';
// DATA
import { stockFormValues, cryptoFormValues } from 'data/FormValues';
// EXTERNAL
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
// INTERFACES
import { AntdFormProps } from './AntdFormInterfaces';
// REDUX
import AutoCompleteForm from './components/AutoCompleteForm';
import { userApi } from 'redux/store';
import { useState } from 'react';

const AddAntdForm = ({ data }: AntdFormProps) => {
  const { useUserAddStockMutation, useUserAddCryptoMutation } = userApi;
  const [userAddStock] = useUserAddStockMutation();
  const [userAddCrypto] = useUserAddCryptoMutation();
  const [symbolVal, setSymbolVal] = useState('');
  const [investmentType, setInvestmentType] = useState('stock');

  const { user } = useAuth0();
  const navigate = useNavigate();

  // Inside this function we call api service. Need to check if the SYMBL exists
  const onSubmit = (values) => {
    const { numberOfShares, marketValuePerShare, date, select } = values;

    // format the data
    const asset = {
      symbol: symbolVal,
      quantity: numberOfShares,
      buyCost: marketValuePerShare,
      date: date._d,
      sub: user?.sub,
    };

    if (select === 'stock') {
      userAddStock(asset);
    } else if (select === 'crypto') {
      userAddCrypto(asset);
    }

    // redirect
    navigate('/profile');
  };

  const formValues = {
    stock: stockFormValues,
    crypto: cryptoFormValues,
  };

  return (
    <div className='genericContainer'>
      <Form
        name='basic'
        onFinish={onSubmit}
        onValuesChange={(val) => setInvestmentType(val.select)}
      >
        <div className='formContainer'>
          <div className='antdFormSpacing'>
            <h2 className='formTitle'>Add New Investment</h2>
            <Form.Item name='select'>
              <Select placeholder='Select Investment Type'>
                <Select.Option value='stock'>Stock</Select.Option>
                <Select.Option value='crypto'>Crypto</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <AutoCompleteForm values={formValues[investmentType]} setSymbol={setSymbolVal} />
            </Form.Item>
            <AntdFormFields data={data} />
            {AntdFormButton}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddAntdForm;
