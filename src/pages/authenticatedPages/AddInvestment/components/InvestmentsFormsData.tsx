// COMPONENTS
import { Select } from 'antd';

const { Option } = Select;

const investmentTypes = ['stock', 'crypto'];

interface SelectOptionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setType: any;
}

export const SelectOptions = ({ setType }: SelectOptionProps) => {
  const displayOptions = investmentTypes.map((inv) => (
    <Option value={inv} key={inv} onClick={() => setType(inv)}>
      {inv.toUpperCase()}
    </Option>
  ));

  return <Select>{displayOptions}</Select>;
};
