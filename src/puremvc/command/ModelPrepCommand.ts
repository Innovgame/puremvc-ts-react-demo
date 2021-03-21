import { INotification, SimpleCommand } from 'puremvc';
import { PrefsProxy, LoginProxy } from '../proxy';

export class ModelPrepCommand extends SimpleCommand {
    execute(notification: INotification): void {
        // console.log('ModelPrepCommand excute', notification);

        this.facade.registerProxy(new LoginProxy());
        this.facade.registerProxy(new PrefsProxy());
    }
}
