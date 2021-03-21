import { INotification, SimpleCommand } from 'puremvc';

export class ViewPrepCommand extends SimpleCommand {
    execute(notification: INotification): void {
        console.log('ViewPrepCommand excute');
    }
}
