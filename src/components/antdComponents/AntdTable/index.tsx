// COMPONENTS
import { Table } from 'antd';
// INTERFACES
import { SiteAntdTableProps } from './AntdTableInterfaces';
// STYLES
import './AntdTable.css';

const AntdTable = (props: SiteAntdTableProps) => {
  
  const { data, columns, row, pagination } = props;

  return <Table dataSource={data} columns={columns} pagination={pagination} onRow={row} />;
};

export default AntdTable;
