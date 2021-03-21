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
    }

    onRemove(): void {
        console.log('LoginMediator onRemove');
    }

    listNotificationInterests(): string[] {
        return [
            NotificationConstants.LOGIN_FAILED,
            NotificationConstants.LOGIN_SUCCESS,
        ];
    }

    handleNotification(notification: INotification): void {
        const notificationName = notification.getName();

        switch (notificationName) {
            case NotificationConstants.LOGIN_SUCCESS:
                this.loginPanel.onLoginSuccess();
                break;
            case NotificationConstants.LOGIN_FAILED:
                this.loginPanel.onLoginFailed();
                break;

            default:
                break;
        }
    }

    get loginPanel(): LoginPanel {
        return this.viewComponent as LoginPanel;
    }
}
