import { Proxy } from 'puremvc';

export class PrefsProxy extends Proxy {
    static NAME = 'PrefsProxy';

    constructor() {
        super(PrefsProxy.NAME);

        console.log('PrefsProxy rendy');
    }
}
