import { Proxy } from 'puremvc';

export class UsersProxy extends Proxy {
    static NAME = 'UsersProxy';

    constructor() {
        super(UsersProxy.NAME);

        console.log('UsersProxy rendy');

    }
}
