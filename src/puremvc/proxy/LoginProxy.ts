import { Proxy } from 'puremvc';
import { NotificationConstants } from '../constants';

export class LoginVO {
    username: string | null = null;
    password: string | null = null;
    authToken: string | null = null;

    constructor(
        username: string | null = null,
        password: string | null = null
    ) {
        this.username = username;
        this.password = password;
    }
}

const TestUser: LoginVO = {
    username: 'hello',
    password: '123',
    authToken: '1111',
};

class LoginService {
    static sendLoginRequest(loginVO: LoginVO) {
        return new Promise<string>((resolve, reject) => {
            if (
                loginVO.username === TestUser.username &&
                loginVO.password === TestUser.password
            ) {
                resolve(TestUser.authToken!);
            } else {
                reject('login failed');
            }
        });
    }
}

export class LoginProxy extends Proxy {
    static readonly NAME = 'LoginProxy';

    constructor() {
        super(LoginProxy.NAME, new LoginVO());
    }

    login(tryLogin: LoginVO): void {
        if (!this.loggedIn) {
            this.loginVO.username = tryLogin.username;
            this.loginVO.password = tryLogin.password;

            LoginService.sendLoginRequest(this.loginVO)
                .then((token) => {
                    this.loginVO.authToken = token;
                    this.sendNotification(NotificationConstants.LOGIN_SUCCESS);
                })
                .catch((err) => {
                    this.sendNotification(NotificationConstants.LOGIN_FAILED);
                });
        } else {
            this.logout();
            this.login(tryLogin);
        }
    }

    logout(): void {
        if (this.loggedIn) {
            this.loginVO = new LoginVO();
        }

        this.sendNotification(NotificationConstants.LOGOUT);
    }

    get loginVO(): LoginVO {
        return this.data as LoginVO;
    }

    set loginVO(val: LoginVO) {
        this.setData(val);
    }

    get loggedIn(): boolean {
        return !!this.authToken;
    }

    get authToken(): string | null {
        return this.loginVO.authToken;
    }
}
