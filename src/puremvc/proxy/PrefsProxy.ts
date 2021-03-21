import { Proxy } from 'puremvc';

export class PrefsVO {
    constructor(
        public username: string = '',
        public age: number = 18,
        public likes: string[] = []
    ) {}
}

const TestPrefs = new PrefsVO('小明', 20, ['篮球', '足球', '旅游']);

export class PrefsProxy extends Proxy {
    static NAME = 'PrefsProxy';

    constructor() {
        super(PrefsProxy.NAME, TestPrefs);

        console.log('PrefsProxy rendy');
    }

    get prefsVO(): PrefsVO {
        return this.data as PrefsVO;
    }

    getPrefs(token: string): PrefsVO | null {
        if (token === '1111') {
            return this.prefsVO;
        }
        return null;
    }
}
