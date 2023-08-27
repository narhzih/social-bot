// this is the base abstract class that will be extended
// by all bots regardless of the platform

abstract class AbstractBot {
    platform: string;

    abstract configure();
    abstract getPlatform(): string;
    abstract healtCheck(): boolean;
    abstract start();
    abstract respondWithError(): any;
    abstract respondWithSuccess(): any;
}

export { AbstractBot };
