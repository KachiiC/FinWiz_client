// Imports
import { InputNumber, DatePicker, Select } from 'antd';
// Local Imports
import AntdForm from 'components/antdComponents/antdform/AntdForm';

const stocksFormData = [
  {
    name:'typeselector', // this needs to be selector
    rules:[{ required: true, message: 'Please input the date purchased' }],
    content:     
    <Select defaultValue="stock">
      <Select.Option value="stock">Stock</Select.Option>
      <Select.Option value="crypto">Crypto</Select.Option>
    </Select>
  },
  {
    name:'numberOfShares',
    rules:[{ required: true, message: 'Please input the quantity purchased' }],
    content: <InputNumber placeholder='Please enter the quantity'/>
  },
  {
    name: 'marketValuePerShare',
    rules: [{ required: true, message: 'Please input the cost of purchase' }],
    content: <InputNumber placeholder='Please enter the buy price' />
  },
  {
    name:'date',
    rules:[{ required: true, message: 'Please input the date purchased' }],
    content: <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
  },
];

const AddInvestmentForm = () => {
  return (
    <AntdForm data={stocksFormData}/>
  );
};

export default AddInvestmentForm;