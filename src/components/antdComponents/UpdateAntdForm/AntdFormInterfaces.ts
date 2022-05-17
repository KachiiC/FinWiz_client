export interface AntdFormProps {
    data: {
        name: string;
        rules?: any[];
        content: JSX.Element;
    }[],
    params: any
}

export interface AntdValueField {
    value: string
}