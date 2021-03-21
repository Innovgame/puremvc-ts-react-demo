import { INotification, MacroCommand, SimpleCommand } from 'puremvc';
import { ApplicationMediator } from '../mediator';

class InitAppMediatorCommand extends SimpleCommand {
    execute(notification: INotification): void {
        const app = notification.getBody();
        this.facade.registerMediator(new ApplicationMediator(app));
    }
}

export class ViewPrepCommand extends MacroCommand {
    initializeMacroCommand() {
        this.addCommand(InitAppMediatorCommand);
    }
}
