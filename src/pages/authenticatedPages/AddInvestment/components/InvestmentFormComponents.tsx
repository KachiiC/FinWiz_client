// COMPONENTS
import AutoCompleteForm from 'components/antdComponents/AntdForm/components/AutoCompleteForm';
import { autoCompleteRules } from 'components/antdComponents/AntdForm/components/AntdFormRules';
import { InputNumber, DatePicker } from 'antd';
// DATA
import { SelectOptions } from './InvestmentsFormsData';
import { stockFormValues } from 'data/FormValues';

const requiredRule = (message: string) => [{ required: true, message }];

export const stocksFormData = [
  {
    name: 'typeselector', 
    rules: requiredRule('Please input the date purchased'),
    content: <SelectOptions />,
  },
  {
    name: 'autoselector',
    rules: autoCompleteRules,
    content: <AutoCompleteForm values={stockFormValues}/>,
  },
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