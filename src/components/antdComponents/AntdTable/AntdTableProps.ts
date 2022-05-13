import { GetComponentProps } from 'rc-table/lib/interface';

export interface SiteAntdTableProps {
    data: any[];
    columns: {
        title: string;
        dataIndex: string;
    }[];
    row?: GetComponentProps<Event>
}