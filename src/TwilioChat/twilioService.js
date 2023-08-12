import { Client } from 'twilio-chat';

export class TwilioService {
    static serviceInstance;
    static chatClient;

    // create a single service instance
    static getInstance() {
        if (!TwilioService.serviceInstance) {
            TwilioService.serviceInstance = new TwilioService();
        }
        return TwilioService.serviceInstance;
    }

    // use chat client if don't have instance, create a new chat client
    async getChatClient(twilioToken) {
        console.log("twilioToken===>1", twilioToken);
        if (!TwilioService.chatClient && !twilioToken) {
            console.log("twilioToken===>2", twilioToken);
            throw new Error('Twilio token is null or undefined');
        }
        if (!TwilioService.chatClient && twilioToken) {
            console.log("twilioToken===>3", twilioToken);
            return Client.create(twilioToken).then((client) => {
                console.log("twilioToken===>4", twilioToken);
                TwilioService.chatClient = client;
                console.log("twilioToken===>5", TwilioService.chatClient);
                return TwilioService.chatClient;
            });
        }
        return Promise.resolve().then(() => TwilioService.chatClient);
    }

    // manage our token expiration
    addTokenListener(getToken) {
        // console.log("getToken===>1",getToken);
        if (!TwilioService.chatClient) {
            // console.log("getToken===>2",TwilioService.chatClient);
            throw new Error('Twilio client is null or undefined');
        }
        TwilioService.chatClient.on('tokenAboutToExpire', () => {
            // console.log("getToken===>3",getToken);
            getToken().then(TwilioService.chatClient.updateToken);
        });

        TwilioService.chatClient.on('tokenExpired', () => {
            // console.log("getToken===>4",getToken);
            getToken().then(TwilioService.chatClient.updateToken);
        });
        return TwilioService.chatClient;
    }

    // gracefully shutting down library instance.
    clientShutdown() {
        TwilioService.chatClient?.shutdown();
        TwilioService.chatClient = null;
    }
}