// COMPONENTS
import { InputNumber, DatePicker } from 'antd';

export const requiredRule = (message: string) => [{ required: true, message }];

export const updateFormData = [
  {
    name: 'numberOfShares',
    rules: requiredRule('Please input the quantity changed'),
    content: <InputNumber placeholder='Please enter the quantity changed' />, // Placeholder should be current value 
  },
  {
    name: 'marketValuePerShare',
    rules: requiredRule('Please input the price of change'),
    content: <InputNumber placeholder='Please enter the asset price' />,
  },
  {
    name: 'date',
    rules: requiredRule('Please input the date changed'),
    content: <DatePicker showTime format='YYYY-MM-DD HH:mm:ss' />,
  },
];
