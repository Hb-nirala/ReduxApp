import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { showMessage } from 'react-native-flash-message';
import { TwilioService } from '../twilioService';
import { Message } from 'twilio-chat';
import Icon from 'react-native-vector-icons/AntDesign'

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
            const { giftedId } = Message.attributes;
            if (giftedId) {
                setMessages((prevMessages) => prevMessages.filter((m) => (m._id === giftedId ? newMessage : m)));
            } else {
                setMessages((prevMessages) => [newMessage, ...prevMessages]);
            }
        });
        return chatClientChannel.current;
    }, []);

    useEffect(() => {
        TwilioService.getInstance()
            .getChatClient()
            .then((client) => client.getConversationBySid(channelId))
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
                    <Text>{channelId}</Text>
                    <Text>{identity}</Text>
                    <Text>{channelName}</Text>
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