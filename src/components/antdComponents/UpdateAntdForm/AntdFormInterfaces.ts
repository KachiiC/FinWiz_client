export interface AntdFormProps {
    data: {
        name: string;
        rules?: any[];
        content: JSX.Element;
    }[]
}

export interface AntdValueField {
    value: string
}