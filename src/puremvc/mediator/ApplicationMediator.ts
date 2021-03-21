import { INotification, Mediator } from 'puremvc';
import App from '../../App';
import { NotificationConstants } from '../constants';

export class ApplicationMediator extends Mediator {
    static readonly NAME = 'ApplicationMediator';

    constructor(private app: App) {
        super(ApplicationMediator.NAME);

        console.log('ApplicationMediator ready');
    }

    onRegister(): void {
        this.app.hiddenLoading();
    }

    listNotificationInterests(): string[] {
        return [];
    }

    handleNotification(notification: INotification): void {
        console.log('ApplicationMediator listen');

        const notificationName = notification.getName();

        switch (notificationName) {
            default:
                break;
        }
    }
}
