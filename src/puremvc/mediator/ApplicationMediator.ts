import { INotification, Mediator } from 'puremvc';
import App from '../../App';
import { NotificationConstants } from '../constants';
import { LoginMediator } from './LoginMediator';

export class ApplicationMediator extends Mediator {
    static readonly NAME = 'ApplicationMediator';

    constructor(private app: App) {
        super(ApplicationMediator.NAME, app);
        // console.log('ApplicationMediator constructor');
    }

    onRegister(): void {
        console.log('hahah');
        // this.app.hiddenLoading();
    }

    listNotificationInterests(): string[] {
        return [
            NotificationConstants.LOGIN_PANEL_MOUNT,
            NotificationConstants.LOGIN_PANEL_UNMOUNT,
        ];
    }

    handleNotification(notification: INotification): void {
        console.log('ApplicationMediator listen');

        const notificationName = notification.getName();
        const body = notification.getBody();

        switch (notificationName) {
            case NotificationConstants.LOGIN_PANEL_MOUNT:
                this.facade.registerMediator(new LoginMediator(body));
                break;

            case NotificationConstants.LOGIN_PANEL_UNMOUNT:
                this.facade.removeMediator(
                    NotificationConstants.LOGIN_PANEL_UNMOUNT
                );
                break;

            default:
                break;
        }
    }
}
