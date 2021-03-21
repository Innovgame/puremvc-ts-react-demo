import { INotification, SimpleCommand } from 'puremvc';
import { NotificationConstants } from '../constants';
import { PrefsProxy } from '../proxy';

export class UserPrefsCommand extends SimpleCommand {
    execute(notification: INotification): void {
        const body = notification.getBody();

        const prefsProxy = this.facade.retrieveProxy(
            PrefsProxy.NAME
        ) as PrefsProxy;

        if (prefsProxy) {
            const prefs = prefsProxy.getPrefs(body);
            if (prefs) {
                this.sendNotification(NotificationConstants.USER_PREFS, prefs);
            }
        }
    }
}
