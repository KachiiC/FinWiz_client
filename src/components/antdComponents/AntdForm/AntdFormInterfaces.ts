export interface AntdFormProps {
    data: {
        name: string;
        rules: any[];
        content: JSX.Element;
        values?: AntdAutoCompleteProps[]
    }[]
}

export interface AntdAutoCompleteProps {
    values: AntdValueField[]
}

export interface AntdValueField {
    value: string
}