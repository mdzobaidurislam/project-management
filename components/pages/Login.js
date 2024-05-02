"use client"

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

export default function Login() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
  return (
  <div className=' bg-slate-300 '>
      <div className='container m-auto'>
        <div className='flex justify-center  items-center min-h-screen '>
        <Form
      name="normal_login"
      className="login-form card bg-white pt-6 pr-4 pl-4 pb-4 rounded  shadow-lg w-[450px] "
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        className='mb-3'
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />}  className='h-[50px]' placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        hasFeedback
        className='mb-3'
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          className='h-[50px]'
        />
      </Form.Item>
      <Form.Item  className='mb-3'>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item  className='mb-2'>
        <Button type="primary" htmlType="submit" className="w-full h-[50px]">
          Log in
        </Button>
        
      </Form.Item>
    </Form>
        </div>
    </div>
  </div>
  )
}
