import { GetComponentProps } from 'rc-table/lib/interface';

export interface SiteAntdTableProps {
    // eslint-disable-next-line
    data: any[];
    columns: {
        title: string;
        dataIndex: string;
    }[];
    row?: GetComponentProps<Event>
}