import { Button, Form } from 'antd';

const { Item } = Form;

// returns a field base on data 
export const AntdFormFields = ({ data }) => {
  return data.map(({ name, rules, content }) => (
    <Item name={name} key={name} rules={rules}>
      {content}
    </Item>
  ));
};

export const AntdFormButton = (
  <Item>
    <Button type='primary' htmlType='submit'>
      Submit
    </Button>
  </Item>
);
