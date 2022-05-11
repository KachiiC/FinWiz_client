import { AutoComplete } from 'antd';
import { useState } from 'react';

const mock = [{ value: 'AMD' }, { value: 'AAPL' }, { value: 'NIO' }, { value: 'SOFI' }];

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const AutoCompleteForm: React.FC = () => {


  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    !searchText ? setOptions([]) : [mock.forEach(el => (el.value.includes(searchText) && !options.includes(el)) && setOptions([...options, el]) )];
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  return (
    <>
      <AutoComplete
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="Please enter a symbol"
      />
    </>
  );

};

export default AutoCompleteForm;