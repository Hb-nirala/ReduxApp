import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { showMessage } from 'react-native-flash-message';
import { TwilioService } from '../twilioService';
import { Message } from 'twilio-chat';



export function ChatRoomScreen({ route }) {
    const { channelId, identity } = route.params;
    const [messages, setMessages] = useState([]);
    const chatClientChannel = useRef();
    const chatMessagesPaginator = useRef();

    const setChannelEvents = useCallback((channel) => {
        chatClientChannel.current = channel;
        chatClientChannel.current.on('messageAdded', (message) => {
            const newMessage = TwilioService.getInstance().parseMessage(message);
            const { giftedId } = Message.attributes;
            if (giftedId) {
                setMessages((prevMessages) => prevMessages.map((m) => (m._id === giftedId ? newMessage : m)));
            } else {
                setMessages((prevMessages) => [newMessage, ...prevMessages]);
            }
        });
        return chatClientChannel.current;
    }, []);

    useEffect(() => {
        TwilioService.getInstance()
            .getChatClient()
            .then((client) => client.getChannelBySid(channelId))
            .then((channel) => setChannelEvents(channel))
            .then((currentChannel) => currentChannel.getMessages())
            .then((paginator) => {
                chatMessagesPaginator.current = paginator;
                const newMessages = TwilioService.getInstance().parseMessages(paginator.items);
                setMessages(newMessages);
            })
            .catch((err) => showMessage({ message: err.message, type: 'danger' }))
    }, [channelId, setChannelEvents]);

    const onSend = useCallback((newMessages = []) => {
        const attributes = { giftedId: newMessages[0]._id };
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
        chatClientChannel.current?.sendMessage(newMessages[0].text, attributes);
    }, []);

    return (
        <View style={styles.screen}>
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
        backgroundColor: 'white',
    },
    messageContainer: {
        backgroundColor: 'snow'
    },
})