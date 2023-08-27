// this is the base abstract class that will be extended
// by all bots regardless of the platform

import { CacheService } from '../services';

abstract class AbstractBot {
    protected _cacheService: CacheService;
    protected abstract platform: string;

    constructor() {
        // At least create the cache service
        this._cacheService = new CacheService();
    }
    public abstract configure(): any;
    public abstract getPlatform(): string;
    public abstract healtCheck(): boolean;
    public abstract start(): any;
    public abstract respondWithError(): any;
    public abstract respondWithSuccess(): any;
}

export { AbstractBot };
