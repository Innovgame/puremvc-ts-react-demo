import { Proxy } from 'puremvc';

export class SearchProxy extends Proxy {
    static NAME = 'SearchProxy';

    constructor() {
        super(SearchProxy.NAME);

        console.log('SearchProxy rendy');

    }
}
