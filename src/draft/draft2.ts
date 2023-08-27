const BotTypes = {
    REDIS: 'Redis',
    TWITTER: 'Twitter',
};

abstract class ABot {
    platform: string;

    abstract configure();
    abstract healtCheck();
    abstract start(): any;
    abstract respondWithError(): any;
    abstract respondWithSuccess(): any;
}

class RedisBot extends ABot {
    configure() {
        //
    }
    healtCheck() {}

    start() {}
    respondWithError() {}
    respondWithSuccess() {}
}

class TwitterBot extends ABot {
    configure() {}
    healtCheck() {}
    start() {}
    respondWithError() {}
    respondWithSuccess() {}
}

type botRequest = {
    username: string;
    url: string;
    folder: string;
    platform: string;
};

class Bot {
    private botInstance: ABot;
    constructor(platform: string) {
        if (platform === BotTypes.REDIS) {
            // create redis instace
            this.botInstance = new RedisBot();
        } else if (platform === BotTypes.TWITTER) {
            // create Twitters
            this.botInstance = new TwitterBot();
        } else {
            // throw error
        }

        this.botInstance.configure();
        this.botInstance.healtCheck();
    }

    start() {
        // Redis
        // 1. configure
        // 2. Health check
        // 3. Start

        this.botInstance
            .start()
            .onRequest((req: botRequest) => {
                // make call to the api,
                // get success / error response
                // if (error) {this.botInstance.respondWithErr(error)}
                // if (success) {this.botInstance.respondWithSuccess(success)}
                // send it back to the bot
            })
            .onError((err) => {
                // stop the instance entirely
            });
    }
}
