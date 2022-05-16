import { useState } from 'react';
// COMPONENTS
import { AutoComplete } from 'antd';
// INTERFACES
import { AntdAutoCompleteProps, AntdValueField } from '../AntdFormInterfaces';

const AutoCompleteForm = ({ values }: AntdAutoCompleteProps) => {
  const [options, setOptions] = useState<AntdValueField[]>([]);

  const newValue = (input: string) => {
    const results = values.filter((el) => el.value.includes(input.toUpperCase()));
    results.length === 0 ? setOptions([]) : setOptions(results);
  };

  const onSearch = (searchText: string) => {
    !searchText
      ? setOptions([])
      : newValue(searchText);
  };


  return <AutoComplete options={options} onChange={onSearch} placeholder='Please enter a symbol' />;
};

export default AutoCompleteForm;
