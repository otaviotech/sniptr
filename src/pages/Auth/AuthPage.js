import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, Form, Input, Button, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as actionCreators from '../../store/modules/auth/actions';

import './AuthPage.scss';

const AuthPage = (props) => {
  const AUTH_MODE = {
    SIGNIN: 'SIGNIN',
    SIGNUP: 'SIGNUP',
  };

  const [form] = Form.useForm();
  const [authMode, setauthMode] = useState(AUTH_MODE.SIGNIN);

  const onFinish = (credentials) => {
    const actionToPerform = authMode === AUTH_MODE.SIGNIN
      ? props.signIn
      : props.signUp;

    actionToPerform(credentials);
  };

  const title = <h1 className="logo">{'<Snipter />'}</h1>;

  return (
    <div className="AuthPage">
      <Card title={title} className="login-card">
        <Form form={form} onFinish={onFinish}>
          <Form.Item wrapperCol={{xs: 24}}>
          <Radio.Group
            className="action"
            size="middle"
            defaultValue={AUTH_MODE.SIGNIN}
            buttonStyle="solid"
            value={authMode}
            onChange={(e) => setauthMode(e.target.value)}
          >
            <Radio.Button value={AUTH_MODE.SIGNIN}>Sign In</Radio.Button>
            <Radio.Button value={AUTH_MODE.SIGNUP}>Sign up</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="#/">Forgot password</a>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {/* Or <a href="#/">Sign Up</a> */}
      </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (credentials) => dispatch(actionCreators.signIn(credentials)),
  signUp: (credentials) => dispatch(actionCreators.signUp(credentials)),
  signOut: () => dispatch(actionCreators.signOut()),
  refreshAuth: () => dispatch(actionCreators.refreshAuth()),
});

export default connect(null, mapDispatchToProps)(AuthPage);
