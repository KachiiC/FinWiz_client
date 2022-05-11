import { Form, Button } from 'antd';

interface AntdFormProps {
  data: {
    name: string;
    rules: any[];
    content: JSX.Element;
  }[];
}

const AntdForm = (props: AntdFormProps) => {

  const onSubmit = (values: any) => {
    console.log('Success:', values);
  };

  const onSubmitFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const displayForm = props.data.map((form) => (
    <Form.Item name={form.name} key={form.name} rules={form.rules}> 
      {form.content}
    </Form.Item>
  ));
  return (
    <div className='genericContainer'>
      <Form 
        name="basic"
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
      >
        <div className='genericInnerContainer'>
          <div className='antdFormSpacing'>
            {displayForm}
          </div>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AntdForm;