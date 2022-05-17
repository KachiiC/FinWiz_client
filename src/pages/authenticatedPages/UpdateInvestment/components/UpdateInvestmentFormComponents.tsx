// COMPONENTS
import { InputNumber, DatePicker } from 'antd';
// DATA

export const requiredRule = (message: string) => [{ required: true, message }];

export const updateFormData = [
  {
    name: 'typeOfInvestment',
    content: <InputNumber placeholder='Crypto/ Stock'  disabled={true}/>, // Placeholder should be type of investment
  },
  {
    name: 'symbol',
    content: <InputNumber placeholder='Symbol'  disabled={true} />, // Placeholder should be symbol
  },
  {
    name: 'numberOfShares',
    rules: requiredRule('Please input the quantity purchased'),
    content: <InputNumber placeholder='Please enter the quantity' />, // Placeholder should be current value 
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
