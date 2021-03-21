import React from 'react';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ApplicationFacade } from './puremvc';
import { NotificationConstants } from './puremvc/constants';

enum LoginStatus {
    Idle = 'Idle',
    Failed = 'failed',
    Pedding = 'Pedding',
    Success = 'Success',
}

type LoginPanelStats = {
    status: LoginStatus;
};

class LoginPanel extends React.PureComponent<any, LoginPanelStats> {
    facade: ApplicationFacade;

    state = {
        status: LoginStatus.Idle,
    };

    constructor(props: any) {
        super(props);
        this.facade = ApplicationFacade.getInstance();
        console.log('login constructor');
        this.facade.sendNotification(
            NotificationConstants.LOGIN_PANEL_MOUNT,
            this
        );
    }

    onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    componentDidMount = () => {
        // console.log('login componentDidMount');
    };

    componentWillUnmount() {
        // TOOD:
        this.facade.sendNotification(
            NotificationConstants.LOGIN_PANEL_UNMOUNT,
            this
        );
    }

    LoginForm = (status: LoginStatus) => {
        if (status === LoginStatus.Failed || status === LoginStatus.Success) {
            return null;
        }

        const isPedding = status === LoginStatus.Pedding;

        return (
            <Spin spinning={isPedding} tip="登录中...">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a
                            className="login-form-forgot"
                            href="https://baidu.com"
                        >
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                        Or <a href="https://baidu.com">register now!</a>
                    </Form.Item>
                </Form>
            </Spin>
        );
    };

    render() {
        const { status } = this.state;

        const loginForm = this.LoginForm(status);
        const StatusResult =
            status === LoginStatus.Failed ? (
                <div>登录失败</div>
            ) : status === LoginStatus.Success ? (
                <div>登录成功</div>
            ) : null;

        return (
            <>
                {StatusResult}
                {loginForm}
            </>
        );
    }
}

export default LoginPanel;
