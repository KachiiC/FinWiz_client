// Imports
import { useAuth0 } from '@auth0/auth0-react';
import { Form, Button } from 'antd';
import AutoCompleteInput from './AutoCompleteForm';
// Local Imports


interface AntdFormProps {
  data: {
    name: string;
    // eslint-disable-next-line
    rules: any[];
    content: JSX.Element;
  }[];
}

const AntdForm = (props: AntdFormProps) => {

  const { user } = useAuth0();

  const onSubmit = (values) => {
    console.log('Success:', values, user?.sub);
  };

  const onSubmitFailed = (errorInfo) => {
    console.log('Failed:', errorInfo, user?.sub);
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
            <Form.Item  name='symbol' rules={[{ required: true, message: 'Please input symbol!' }]} >
              <AutoCompleteInput />
            </Form.Item>
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