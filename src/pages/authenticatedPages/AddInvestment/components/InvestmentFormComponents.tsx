// COMPONENTS
import { InputNumber, DatePicker } from 'antd';
// DATA

export const requiredRule = (message: string) => [{ required: true, message }];

export const stocksFormData = [
  {
    name: 'numberOfShares',
    rules: requiredRule('Please input the quantity purchased'),
    content: <InputNumber placeholder='Please enter the quantity' />,
  },
  {
    name: 'marketValuePerShare',
    rules: requiredRule('Please input the cost of purchase'),
    content: <InputNumber placeholder='Please enter the buy price' />,
  },
  {
    name: 'date',
    rules: requiredRule('Please input the date purchased'),
    content: <DatePicker showTime format='YYYY-MM-DD HH:mm:ss' />,
  },
];
