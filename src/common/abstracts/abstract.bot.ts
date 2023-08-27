// this is the base abstract class that will be extended
// by all bots regardless of the platform

export abstract class AbstractBot {
    platform: string;

    abstract configure();
    abstract healtCheck(): boolean;
    abstract start();
    abstract respondWithError(): any;
    abstract respondWithSuccess(): any;
}
