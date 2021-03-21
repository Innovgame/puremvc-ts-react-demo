import { Facade } from 'puremvc';
import { StartupCommand, UserPrefsCommand, LoginCommand } from './command';
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
        this.registerCommand(
            NotificationConstants.LOGIN_SUCCESS,
            UserPrefsCommand
        );
    }
}
