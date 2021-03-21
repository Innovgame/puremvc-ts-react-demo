import React from 'react';
import { Form, Input, Button, Checkbox, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { ApplicationFacade } from './puremvc';
import { NotificationConstants } from './puremvc/constants';
import { PrefsVO } from './puremvc/proxy';

enum LoginStatus {
    Idle = 'Idle',
    Failed = 'failed',
    Pedding = 'Pedding',
    Success = 'Success',
}

type LoginPanelStats = {
    status: LoginStatus;
    userPrefs?: PrefsVO;
};

class LoginPanel extends React.PureComponent<any, LoginPanelStats> {
    facade: ApplicationFacade;

    constructor(props: any) {
        super(props);
        this.state = {
            status: LoginStatus.Idle,
            userPrefs: undefined,
        };
        this.facade = ApplicationFacade.getInstance();
        // console.log('login constructor');
    }

    onFinish = (values: any) => {
        const { username, password } = values;

        this.facade.sendNotification(NotificationConstants.LOGIN, {
            username,
            password,
        });
        this.setState({ status: LoginStatus.Pedding });
    };

    onLoginFailed = () => {
        this.setState({
            status: LoginStatus.Failed,
        });
    };

    onLoginSuccess = () => {
        this.setState({
            status: LoginStatus.Success,
        });
    };

    onGetUserPrefs = (prefs: PrefsVO) => {
        this.setState({
            userPrefs: prefs,
        });
    };

    componentDidMount = () => {
        console.log('Login componentDidMount');
        this.facade.sendNotification(
            NotificationConstants.LOGIN_PANEL_MOUNT,
            this
        );
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
        const { status, userPrefs } = this.state;

        const loginForm = this.LoginForm(status);
        const StatusResult =
            status === LoginStatus.Failed ? (
                <h1>登录失败</h1>
            ) : status === LoginStatus.Success ? (
                <div>
                    <h1>登录成功</h1>
                    <div>姓名：{userPrefs?.username}</div>
                    <div>年龄：{userPrefs?.age}</div>
                    <div>
                        爱好：
                        <ul>
                            {userPrefs?.likes.map((like, i) => (
                                <li key={i}>{like}</li>
                            ))}
                        </ul>
                    </div>
                </div>
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
