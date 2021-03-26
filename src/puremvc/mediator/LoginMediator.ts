import { INotification, Mediator } from 'puremvc';
import LoginPanel from '../../Login';
import { NotificationConstants } from '../constants';

export class LoginMediator extends Mediator {
    static readonly NAME = 'LoginMediator';

    constructor(viewComponent: LoginPanel) {
        super(LoginMediator.NAME, viewComponent);
    }

    onRegister(): void {
        console.log('LoginMediator onRegister');

        // register view component event
        this.loginPanel.eventsMap['onTryLogin'] = this.onTryLogin.bind(this);
    }

    onRemove(): void {
        console.log('LoginMediator onRemove');
    }

    onTryLogin(params: { username: string; password: string }): void {
        const { username, password } = params;
        this.facade.sendNotification(NotificationConstants.LOGIN, {
            username,
            password,
        });
    }

    listNotificationInterests(): string[] {
        return [
            NotificationConstants.LOGIN_FAILED,
            NotificationConstants.LOGIN_SUCCESS,
            NotificationConstants.USER_PREFS,
        ];
    }

    handleNotification(notification: INotification): void {
        const notificationName = notification.getName();
        const body = notification.getBody();

        switch (notificationName) {
            case NotificationConstants.LOGIN_SUCCESS:
                this.loginPanel.onLoginSuccess();
                break;
            case NotificationConstants.LOGIN_FAILED:
                this.loginPanel.onLoginFailed();
                break;
            case NotificationConstants.USER_PREFS:
                this.loginPanel.onGetUserPrefs(body);
                break;

            default:
                break;
        }
    }

    get loginPanel(): LoginPanel {
        return this.viewComponent as LoginPanel;
    }
}
