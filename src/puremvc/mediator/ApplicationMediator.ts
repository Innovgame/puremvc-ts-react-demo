import { Mediator } from 'puremvc';
import App from '../../App';

export class ApplicationMediator extends Mediator {
    static readonly NAME = 'ApplicationMediator';

    constructor(app: App) {
        super(ApplicationMediator.NAME);

        console.log('ApplicationMediator ready');

        app.hiddenLoading();
    }
}
