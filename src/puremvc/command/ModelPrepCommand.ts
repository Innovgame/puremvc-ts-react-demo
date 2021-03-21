import { INotification, SimpleCommand } from 'puremvc';
import { PrefsProxy, SearchProxy, UsersProxy } from '../proxy';

export class ModelPrepCommand extends SimpleCommand {
    execute(notification: INotification): void {
        console.log('ModelPrepCommand excute', notification);

        this.facade.registerProxy(new SearchProxy());
        this.facade.registerProxy(new PrefsProxy());
        this.facade.registerProxy(new UsersProxy());
    }
}
