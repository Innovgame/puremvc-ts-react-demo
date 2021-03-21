import { INotification, SimpleCommand } from 'puremvc';

export class StartupCommand extends SimpleCommand {
    excute(notication: INotification) {
        console.log(notication);
    }
}
