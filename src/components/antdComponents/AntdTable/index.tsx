import { Table } from 'antd';

interface SiteAntdTableProps {
  data: {
    [x: string]: number | string;
  }[];
  columns: {
    title: string;
    dataIndex: string;
  }[];
}

const AntdTable = (props: SiteAntdTableProps) => {
  const { data, columns } = props;

  return <Table dataSource={data} columns={columns} pagination={false}/>;
};

export default AntdTable;