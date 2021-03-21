import { Facade } from 'puremvc';
import { StartupCommand } from './command';
import { LoginCommand } from './command/LoginCommand';
import { NotificationConstants } from './constants';

export class ApplicationFacade extends Facade {
    static readonly NAME = 'ApplicationFacade';

    public static getInstance(): ApplicationFacade {
        return Facade.getInstance(
            ApplicationFacade.NAME,
            ApplicationFacade
        ) as ApplicationFacade;
    }

    public startup(app: any): void {
        this.sendNotification(NotificationConstants.START_UP, app);
    }

    initializeController(): void {
        super.initializeController();
        this.registerCommand(NotificationConstants.START_UP, StartupCommand);
        this.registerCommand(NotificationConstants.LOGIN, LoginCommand);
    }
}
