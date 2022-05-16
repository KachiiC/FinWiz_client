import { TablePaginationConfig } from 'antd';
import { GetComponentProps } from 'rc-table/lib/interface';

export interface SiteAntdTableProps {
    data: object[];
    columns: {
        title: string;
        dataIndex: string;
        sorter?: ((a, b) => number);
        render?: (record) => JSX.Element | string
    }[];
    pagination?: false | TablePaginationConfig | undefined;
    row?: GetComponentProps<object>
}