import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { showMessage } from 'react-native-flash-message';
import { TwilioService } from './twilioService';
import { Message } from 'twilio-chat';
import Icon from 'react-native-vector-icons/AntDesign'
import { fetchToken } from './apiService';

export const ChatRoomScreen = ({ navigation, route }) => {

    const { channelId, identity, channelName } = route.params;
    const [messages, setMessages] = useState([]);
    const chatClientChannel = useRef();
    const chatMessagesPaginator = useRef();

    const setChannelEvents = useCallback((channel) => {
        chatClientChannel.current = channel;
        chatClientChannel.current.on('messageAdded', (message) => {
            const newMessage = TwilioService.getInstance().parseMessage(message);
            console.log("newMessage==", newMessage);

        });
        return chatClientChannel.current;
    }, []);


    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    // avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])


    const chatRoomInit = async () => {
        try {
            const token = await fetchToken(identity)
            const chatClient = await TwilioService.getInstance().getChatClient(token)
            console.log("chatClient===", chatClient);
            const channel = await chatClient.getConversationBySid(channelId)
            console.log("conversationById==", channel);
            const currentChannel = setChannelEvents(channel)
            console.log("currentChannel===", currentChannel);
            const messages = currentChannel.getMessages()
            console.log("messages==", messages);
        } catch (error) {
            console.log("error==", error.message);
            // showMessage({ message: error.message, type: 'danger' })
        }
    }


    useEffect(() => {
        chatRoomInit()
    }, [channelId, setChannelEvents])

    // useEffect(() => {
    //     TwilioService.getInstance()
    //         .getChatClient()
    //         .then((client) => client.getConversationBySid(channelId))
    //         // .then((channel) => setChannelEvents(channel))
    //         // .then((currentChannel) => currentChannel.getMessages())
    //         // .then((paginator) => {
    //         //     chatMessagesPaginator.current = paginator;
    //         //     const newMessages = TwilioService.getInstance().parseMessages(paginator.items);
    //         //     setMessages(newMessages);
    //         // })
    //         .catch((err) => showMessage({ message: err.message, type: 'danger' }))
    // }, [channelId, setChannelEvents]);

    const onSend = useCallback((newMessages = []) => {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
        // chatClientChannel.current?.sendMessage(newMessages[0].text);
    }, []);


    // const onSend = useCallback((newMessages = []) => {
    //     setMessages(prevMessages =>
    //         GiftedChat.append(prevMessages, newMessages),
    //     );
    //     chatClientChannel.current?.sendMessage(newMessages[0].text);
    // }, []);

    return (
        <View style={styles.screen}>
            <Text style={styles.headerStyle}>Chat Room screen</Text>
            <View style={styles.channelInfoStyle}>
                <Icon name='arrowleft' size={25} onPress={() => { navigation.goBack() }} color='black' style={{ marginLeft: 10, marginTop: 10 }} />
                <View>
                    <Text>channelId:-{channelId}</Text>
                    <Text>identity:-{identity}</Text>
                    <Text>channelName:-{channelName}</Text>
                </View>
            </View>
            <GiftedChat
                messagesContainerStyle={styles.messageContainer}
                messages={messages}
                renderAvatarOnTop
                onSend={(messages) => onSend(messages)}
                user={{ _id: identity }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        backgroundColor: 'red',
    },
    headerStyle: {
        alignSelf: 'center',
        paddingVertical: 5,
    },
    channelInfoStyle: {
        flexDirection: 'row',
    },
    messageContainer: {
        width: '100%',
        backgroundColor: 'snow'
    },
})