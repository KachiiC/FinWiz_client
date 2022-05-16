// COMPONENTS
import { Select } from 'antd';
import { Dispatch, SetStateAction } from 'react';

const { Option } = Select;

const investmentTypes = ['stock', 'crypto'];

interface SelectOptionProps {
  setType: Dispatch<SetStateAction<string>>;
}

export const SelectOptions = ({ setType }: SelectOptionProps) => {
  const displayOptions = investmentTypes.map((inv) => {
    return (
      <Option value={inv} key={inv}>
        <div onClick={() => setType(inv)}>
          {inv.toUpperCase()}
        </div>
      </Option>
    );
  });

  return <Select>{displayOptions}</Select>;
};
