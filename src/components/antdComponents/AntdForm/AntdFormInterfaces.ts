import { Dispatch, SetStateAction } from 'react';

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
    setSymbol: Dispatch<SetStateAction<string>>
}

export interface AntdValueField {
    value: string
}