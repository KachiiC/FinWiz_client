// Imports
import { Input, InputNumber, DatePicker } from 'antd';
// Local Imports
import AntdForm from 'components/antdComponents/AntdForm';
import { userInfo } from 'os';

const stocksFormData = [
  {
    name: 'username',
    rules: [{ required: true, message: 'Please input your username!' }],
    content: <Input placeholder='Please enter a symbol'/>,
  },
  {
    name: 'title',
    rules:[{ required: true, message: 'Please input the title' }],
    content: <Input placeholder='Please enter a Title'/>
  },
  {
    name:'buyQuantity',
    rules:[{ required: true, message: 'Please input the quantity purchased' }],
    content: <InputNumber placeholder='0'/>
  },
  {
    name: 'buyCost',
    rules: [{ required: true, message: 'Please input the cost of purchase' }],
    content: <InputNumber placeholder='0' />
  },
  {
    name:'date',
    rules:[{ required: true, message: 'Please input the date purchased' }],
    content: <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
  },
];

const AddStocks = () => {
  return (
    <AntdForm data={stocksFormData}/>
  );
};

export default AddStocks;