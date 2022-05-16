import { Button, Form } from 'antd';

const { Item } = Form;

export const AntdFormFields = ({ data }) => {
  return data.map((form) => {
    const { name, rules, content } = form;

    return (
      <Item name={name} key={name} rules={rules}>
        {content}
      </Item>
    );
  });
};

export const AntdFormButton = (
  <Item>
    <Button type='primary' htmlType='submit'>
      Submit
    </Button>
  </Item>
);
