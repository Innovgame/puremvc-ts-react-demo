import { INotification, SimpleCommand } from 'puremvc';
import { LoginProxy, LoginVO } from '../proxy/LoginProxy';

export class LoginCommand extends SimpleCommand {
    execute(notification: INotification): void {
        const { username, password } = notification.getBody();

        const loginVO = new LoginVO(username, password);

        const loginProxy = this.facade.retrieveProxy(
            LoginProxy.NAME
        ) as LoginProxy;

        if (loginProxy) {
            loginProxy.login(loginVO);
        }
    }
}
