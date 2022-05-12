interface AntdFormProps {
  data: {
    name: string;
    // eslint-disable-next-line
    rules: any[];
    content: JSX.Element;
  }[];
}

export type {
  AntdFormProps,
};