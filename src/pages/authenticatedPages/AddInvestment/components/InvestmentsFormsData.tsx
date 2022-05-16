// COMPONENTS
import { Select } from 'antd';

const { Option } = Select;

const investmentTypes = ['stock', 'crypto'];

export const SelectOptions = () => {
  const displayOptions = investmentTypes.map((inv) => (
    <Option value={inv} key={inv}>
      {inv.toUpperCase()}
    </Option>
  ));

  return <Select>{displayOptions}</Select>;
};
