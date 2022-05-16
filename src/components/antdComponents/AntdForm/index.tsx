// External
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
// COMPONENTS
import { AntdFormButton, AntdFormFields } from './components/AntdFormCompoents';
import { Form } from 'antd';
import { SelectOptions } from 'pages/authenticatedPages/AddInvestment/components/InvestmentsFormsData';
// INTERFACES
import { AntdFormProps } from './AntdFormInterfaces';
// REDUX
import { userApi } from 'redux/store';
import AutoCompleteForm from './components/AutoCompleteForm';
import { useState } from 'react';
import { stockFormValues, cryptoFormValues } from 'data/FormValues';

const AntdForm = ({ data }: AntdFormProps) => {
  const { useUserAddStockMutation, useUserAddCryptoMutation } = userApi;
  const [userAddStock] = useUserAddStockMutation();
  const [userAddCrypto] = useUserAddCryptoMutation();
  const [investmentType, setInvestmentType] = useState('stock');

  const { user } = useAuth0();
  const navigate = useNavigate();

  // Inside this function we call api service. Need to check if the SYMBL exists
  const onSubmit = (values) => {
    const { symbol, numberOfShares, marketValuePerShare, date, typeselector } = values;

    // format the data
    const asset = {
      symbol,
      quantity: numberOfShares,
      buyCost: marketValuePerShare,
      date: date._d,
      sub: user?.sub,
    };

    // make the post request
    typeselector === 'stock' ? userAddStock(asset) : userAddCrypto(asset);
    // redirect
    navigate('/profile');
  };

  const formValues = {
    stock: stockFormValues,
    crypto: cryptoFormValues,
  };

  console.log(formValues['crypto']);
  
  return (
    <div className='genericContainer'>
      <Form name='basic' onFinish={onSubmit}>
        <div className='formContainer'>
          <div className='antdFormSpacing'>
            <h2 className='formTitle'>Add New Investment</h2>
            <Form.Item>
              <SelectOptions setType={setInvestmentType} />
            </Form.Item>
            <Form.Item>
              <AutoCompleteForm values={formValues[investmentType]} />
            </Form.Item>
            <AntdFormFields data={data} />
            {AntdFormButton}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AntdForm;
