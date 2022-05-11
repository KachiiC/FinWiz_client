
import { AutoComplete } from 'antd';
import { useState } from 'react';

const AutoCompleteInput = () => {
  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <>
      <AutoComplete
        options={options}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="Please enter the symbol"
      />,
    </>
  );

};

export default AutoCompleteInput;