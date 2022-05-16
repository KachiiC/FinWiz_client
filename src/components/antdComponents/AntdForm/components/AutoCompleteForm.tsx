import { useState } from 'react';
// COMPONENTS
import { AutoComplete } from 'antd';
// INTERFACES
import { AntdAutoCompleteProps, AntdValueField } from '../AntdFormInterfaces';

const AutoCompleteForm = ({ values }: AntdAutoCompleteProps) => {
  const [options, setOptions] = useState<AntdValueField[]>([]);

  const onSearch = (searchText: string) => {
    !searchText
      ? setOptions([])
      : values.forEach(
        (el) =>
          el.value.includes(searchText.toUpperCase()) &&
            !options.includes(el) &&
            setOptions([el]),
      );
  };

  return <AutoComplete options={options} onSearch={onSearch} placeholder='Please enter a symbol' />;
};

export default AutoCompleteForm;
