import { AutoComplete, Form } from 'antd';
import { useState } from 'react';

const mock = [{ value: 'AMD' }, { value: 'AAPL' }, { value: 'NIO' }, { value: 'SOFI' }, { value: 'DAME' }, { value: 'DAMV' }];

const AutoCompleteForm = () => {

  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    !searchText ? setOptions([]) : [mock.forEach(el => (el.value.includes(searchText.toUpperCase()) && !options.includes(el)) && setOptions([el]) )];
  };
  const onSelect = (data: string) => {
    console.log('data', data);
  };

  const requirements = [{ required: true, message: 'Please input symbol!' },{ max: 5, message: 'Symbol must not exceed 4 characters' }];

  return (
    <Form.Item  name='symbol' rules={requirements} >
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