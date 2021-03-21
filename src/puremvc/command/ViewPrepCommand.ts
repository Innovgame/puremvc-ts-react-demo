import { INotification, SimpleCommand } from 'puremvc';
import { ApplicationMediator } from '../mediator';

export class ViewPrepCommand extends SimpleCommand {
    execute(notification: INotification): void {
        console.log('ViewPrepCommand excute');

        const app = notification.getBody();
        this.facade.registerMediator(new ApplicationMediator(app));
    }
}
