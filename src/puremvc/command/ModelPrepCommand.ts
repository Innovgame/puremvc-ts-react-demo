import { INotification, SimpleCommand } from 'puremvc';
import { PrefsProxy, SearchProxy, UsersProxy, LoginProxy } from '../proxy';

export class ModelPrepCommand extends SimpleCommand {
    execute(notification: INotification): void {
        console.log('ModelPrepCommand excute', notification);

        this.facade.registerProxy(new SearchProxy());
        this.facade.registerProxy(new PrefsProxy());
        this.facade.registerProxy(new UsersProxy());
        this.facade.registerProxy(new LoginProxy());
    }
}
