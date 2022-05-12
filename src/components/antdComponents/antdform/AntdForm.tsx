// Imports
import { useAuth0 } from '@auth0/auth0-react';
import { Form, Button } from 'antd';
// Local Imports
import AutoCompleteForm from './AutoCompleteForm';
import { AntdFormProps } from '../interfaces/IAntdFormProps';

const AntdForm = (props: AntdFormProps) => {

  const { user } = useAuth0();

  // Inside this function we call api service. Need to check if the SYMBL exists
  const onSubmit = (values) => {
    console.log('Success:', values, user?.sub);
  };
  // In this api we need to check the formatting of the dates

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
        <div className='formContainer'>
          <div className='antdFormSpacing'>
            <h2 className="formTitle">Add New Investment</h2>
            <AutoCompleteForm />
            {displayForm}
            <Form.Item>
              <Button type="primary" htmlType="submit">
            Submit
              </Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AntdForm;