// this is the base abstract class that will be extended
// by all bots regardless of the platform

abstract class AbstractBot {
    abstract platform: string;

    abstract configure(): any;
    abstract getPlatform(): string;
    abstract healtCheck(): boolean;
    abstract start(): any;
    abstract respondWithError(): any;
    abstract respondWithSuccess(): any;
}

export { AbstractBot };
