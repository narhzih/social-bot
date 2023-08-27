// this class contains the main twitter service class that contains twitter-specific
// related functions

import { AbstractBot, SupportedPlatforms } from '../../common';

// The twitter API service needs to be able to
// 1. Connect to Twitter API
// 2. Listen to tags
class TwitterBotService extends AbstractBot {
    protected platform: string = SupportedPlatforms.TWITTER;

    constructor() {
        super();
    }

    public configure() {
        // TODO: Implement twitter configuration
        // The configuration for twitter api includes:
        // - Creating an axios instance and configuring directly to always use twitter api keys per request
        // - This axios instance is what will be used to make any request to twitter api.
        // - For now, we'll assume that we're only making requests to v2, so the axios intance will be configured specifically for v2 of twitter api
        // - If there arises the need to use both v1 and v2, we'll have to revisit this particular configuration
    }

    public getPlatform(): string {
        return this.platform;
    }

    public healtCheck(): boolean {
        // TODO: Implement Twitter health check process
        return true;
    }

    public start() {
        // 1. Fetch the last 50 mentions since the last one stored in the cache
        // 2. Process all 50 and make the necessary api calls
        // 3. Wait for 30 minutes and process another 50, start from the last+1
        // 4. Rinse and repeat
    }

    public respondWithError() {}

    public respondWithSuccess() {}
}
