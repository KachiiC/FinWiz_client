import { AutoComplete, Form } from 'antd';
import { useState } from 'react';

const mock = [{ value: 'AMD' }, { value: 'AAPL' }, { value: 'NIO' }, { value: 'SOFI' }, { value: 'DAME' }, { value: 'DAMV' }];

const AutoCompleteForm: React.FC = () => {

  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    !searchText ? setOptions([]) : [mock.forEach(el => (el.value.includes(searchText.toUpperCase()) && !options.includes(el)) && setOptions([el]) )];
  };
  const onSelect = (data: string) => {
    console.log('data', data);
  };

  return (
    <Form.Item  name='symbol' rules={[{ required: true, message: 'Please input symbol!' },{ max: 4, message: 'Symbol must not exceed 4 characters' }]} >
      <AutoComplete
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="Please enter a symbol"
      />
    </Form.Item>
  );

};

export default AutoCompleteForm;