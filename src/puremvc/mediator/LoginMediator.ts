import { INotification, Mediator } from 'puremvc';
import LoginPanel from '../../Login';
import { NotificationConstants } from '../constants';

export class LoginMediator extends Mediator {
    static readonly NAME = 'LoginMediator';

    constructor(viewComponent: LoginPanel) {
        super(LoginMediator.NAME, viewComponent);
    }

    onRegister(): void {
        console.log('sssd');
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
                break;
            case NotificationConstants.LOGIN_FAILED:
                break;
            default:
                break;
        }
    }

    get loginPanel(): LoginPanel {
        return this.viewComponent as LoginPanel;
    }
}
