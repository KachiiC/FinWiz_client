import { Table } from 'antd';
import { SiteAntdTableProps } from './AntdTableProps';
import './AntdTable.css';

const AntdTable = (props: SiteAntdTableProps) => {

  const { data, columns, row } = props;

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
      onRow={row}
    />
  );
};

export default AntdTable;
