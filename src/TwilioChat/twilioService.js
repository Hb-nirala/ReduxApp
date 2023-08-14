import { Client } from "@twilio/conversations";

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
        console.log("twilioToken==", twilioToken);
        if (!TwilioService.chatClient && !twilioToken) {
            throw new Error('Twilio token is null or undefined');
        }
        if (!TwilioService.chatClient && twilioToken) {
            console.log("twilioToken==2", twilioToken);
            try {
                const client = new Client(twilioToken);
                console.log("client==", client); 
                TwilioService.chatClient = client;
                // console.log('TwilioService.chatClient',TwilioService.chatClient);
                return TwilioService.chatClient;
            } catch (error) {
                console.log("Error creating Twilio client:", error);
                // throw error;
            }
            // console.log("Client(twilioToken)==", Client. (twilioToken));
            // return Client(twilioToken).then((client) => {
            //     console.log("client==", client);
            //     TwilioService.chatClient = client;
            //     return TwilioService.chatClient;
            // });
        }
        return TwilioService.chatClient;
    }

    // createChannel() {
    //     client.conversations.v1.conversations
    //         .create({ friendlyName: 'Nirala' })
    //         .then(conversation => console.log(conversation));
    // }

    clientShutdown() {
        TwilioService.chatClient?.shutdown();
        TwilioService.chatClient = null;
    }

    addTokenListener(fetchToken) {
        console.log("getToken==", fetchToken); //not working 
        if (!TwilioService.chatClient) {
            console.log("TwilioService.chatClient==", TwilioService.chatClient);
            throw new Error('Twilio client is null or undefined');
        }
        TwilioService.chatClient.on('tokenAboutToExpire', () => {
            fetchToken().then(TwilioService.chatClient.updateToken);
            console.log("Hello", fetchToken().then(TwilioService.chatClient.updateToken));
        });

        TwilioService.chatClient.on('tokenExpired', () => {
            fetchToken().then(TwilioService.chatClient.updateToken);
        });
        return TwilioService.chatClient;
    }

    parseChannels(channels) {
        if (channels.length > 0) {
            console.log("channels==$$$$$", channels);
            return channels.map(this.parseChannel());
        }
        else {
            return channels.push(this.parseChannel());
        }
    }

    parseChannel(channel) {
        // console.log("channel=====>>>", channel.sid, channel.friendlyName, channel.dateCreated, channel.dateUpdated);
        // console.log("lastMessageTime", lastMessageTime = channel.lastMessage?.dateCreated ? channel.dateUpdated : channel.dateCreated);
        const channelData = {
            id: channel.sid,
            name: channel.friendlyName,
            createdAt: channel.dateCreated,
            updatedAt: channel.dateUpdated,
            lastMessageTime: channel.lastMessage?.dateCreated ? channel.dateUpdated : channel.dateCreated,
        }
        console.log("channelData===", channelData);
        return channelData
    }

    parseMessages(messages) {
        console.log("messages===", messages);
        return messages.map(this.parseMessage).reverse();
    }

    parseMessage(message) {
        // console.log("message===", message.conversation._internalState.friendlyName);
        const messageInfo = {
            _id: message.sid,
            text: message.body,
            createdAt: message.dateCreated,
            user: {
                _id: message.author,
                name: message.author,
            },
            received: true,
            friendlyName: message.conversation._internalState.friendlyName,
        }
        console.log("messageInfo==>>", messageInfo);
        return messageInfo
    }
    parseChannel

    // //getChannelId
    // getChannelId = async () => {
    //     try {
    //         const response = await axios.post(
    //             `https://conversations.twilio.com/v1/Services/IS8a345a392acb4a3a93988935e864db01/Channels`,);
    //         // Extract the channel ID from the response
    //         const channelId = response.data.sid;
    //         console.log("channelId==", channelId);
    //         return channelId;
    //     } catch (error) {
    //         console.log('Error getting channel ID:=====>', error);
    //     }
    // };

    // //create channel
    // createConversations = (friendlyName) => {
    //     client.createConversation({ friendlyName: friendlyName })
    //     console.log("client.createConversation({ friendlyName: friendlyName })=",client.createConversation({ friendlyName: friendlyName }));
    //     // console.log("client conversation==", client.conversations.v1.conversations.create({ friendlyName: friendlyName }));
    //     // return client.conversations.v1.conversations.create({ friendlyName: friendlyName })
    // }

    // createChannel = async () => {
    //     try {
    //         const conversation = await client.createChannel()
    //         console.log("conversation===", conversation);
    //         await conversation.add(conversation._configuration.myConversations);
    //         console.log("await conversation.add(conversation._configuration.myConversations);");
    //         conversation.sendMessage('Hello World!')
    //         console.log("conversation.sendMessage('Hello World!')", conversation.sendMessage('Hello World!'));
    //     }
    //     catch (error) {
    //         console.log("error===>", error);
    //     }
    // }



    // gracefully shutting down library instance.
    // clientShutdown() {
    //     TwilioService.chatClient?.shutdown();
    //     TwilioService.chatClient = null;
    // }

    //Add participants--------------
    addMembersInChannel(channelID, chatUserIdentity) {
        try {
            const client = ('ACda998d40424002c207a695612e8e2c42', '35590d434d4bb50cf931701662bcfb89')
            client.conversations.v1.conversations(channelID)
                .participants
                .create({ identity: chatUserIdentity })
                .then(participant => {
                    console.log("participant.sid", participant.sid);
                });
        } catch (error) {
            console.log("addMembersInChannelerror===",error);
        }

    }
}