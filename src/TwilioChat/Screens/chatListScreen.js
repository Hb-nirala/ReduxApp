import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useApp } from "../AppContext";
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fetchToken, getToken } from "../apiService";
import { TwilioService } from "../twilioService";
import { showMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/AntDesign'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Client } from '@twilio/conversations';


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export const ChatListScreen = ({ navigation, route }) => {
    const { username } = route.params;
    const { channels, updateChannels } = useApp();
    const channelPaginator = useRef();
    const [loading, setLoading] = useState(true)
    const [conversations, setConversations] = useState([])

    console.log("channels===", channels);

    // useEffect(() => {
    //     if (username) {
    //         console.log("channels===????", channels);
    //     }
    // }, [channels])

    const setChannelEvents = useCallback(
        (client) => {
            client.on('messageAdded', (message) => {
                console.log("message===>>>>", message);
                updateChannels((prevChannels) =>
                    // console.log("prevChannels==", prevChannels),
                    prevChannels.map((channel) =>
                        channel.id === message.conversation.sid ? { ...channel, lastMessageTime: message.dateCreated } : channel,
                    ),
                );
            });
            return client;
        },
        [],
    );

    const getSubscribedChannels = useCallback(
        // (client) =>
        //     client.getSubscribedConversations().then((paginator) => {
        //         channelPaginator.current = paginator;
        //         console.log("channelPaginator.current.items==", channelPaginator.current.items);
        //         const newChannels = TwilioService.getInstance().parseChannels(channelPaginator.current.items);
        //         console.log("newChannels=>>>>>", newChannels);
        //         updateChannels(newChannels);
        //     }),
        // [],
    );



    const initCall = async () => {
        try {
            const token = await fetchToken(username)
            const getChatClient = TwilioService.getInstance().getChatClient(token)
            const addTokenListenerData = TwilioService.getInstance().addTokenListener(getChatClient)
            setChannelEvents(addTokenListenerData)
            getSubscribedChannels(addTokenListenerData)
        } catch (err) {
            showMessage({ message: err.message, type: 'danger' })
        }

    }

    // useLayoutEffect(() => {
    //     console.log("Hello");
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('TwilioChatCreateScreen')}>
    //                 <Text style={styles.addButtonText}>+</Text>
    //             </TouchableOpacity>
    //         ),
    //     }); 
    // }, [navigation]);



    // const client = new Client('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzVmZDMyYjQ4YzYwM2M0ZDdkNzhkYWIxMTAwZGRiNDQwLTE2OTE2NjA1OTciLCJncmFudHMiOnsiaWRlbnRpdHkiOiJuaXJhbGEiLCJjaGF0Ijp7InNlcnZpY2Vfc2lkIjoiSVM4YTM0NWEzOTJhY2I0YTNhOTM5ODg5MzVlODY0ZGIwMSJ9fSwiaWF0IjoxNjkxNjYwNTk3LCJleHAiOjE2OTE2NjQxOTcsImlzcyI6IlNLNWZkMzJiNDhjNjAzYzRkN2Q3OGRhYjExMDBkZGI0NDAiLCJzdWIiOiJBQ2RhOTk4ZDQwNDI0MDAyYzIwN2E2OTU2MTJlOGUyYzQyIn0.5gWv1jAm_I5QTXmakoF8yun1Gn2EACNIFEJc8FAvd5A');

    // const add = async () => {
    //     try {
    //         const conversation = await client.createConversation();
    //         updateChannels(conversation._configuration.myConversations)
    //         console.log("conversation===", conversation._configuration.myConversations);
    //         await conversation.add(conversation._configuration.myConversations);
    //         console.log("await conversation.add(conversation._configuration.myConversations);", await conversation.add(conversation._configuration.myConversations));
    //         conversation.sendMessage('Hello World!')
    //         console.log("conversation.sendMessage('Hello World!')", conversation.sendMessage('Hello World!'));
    //     }
    //     catch (error) {
    //         console.log("error===", error);
    //     }
    // }



    useEffect(() => {
        console.log("username==1", username);
        initCall()
        // getToken(username)
        //     .then((token) => TwilioService.getInstance().getChatClient(token))
        //     .then(() => TwilioService.getInstance().addTokenListener(getToken))
        //     .then(setChannelEvents)
        //     .then(getSubscribedChannels)
        //     .catch((err) => showMessage({ message: err.message, type: 'danger' }))
        //     .finally(() => setLoading(false));
        return () => TwilioService.getInstance().clientShutdown();
    }, [username]);

    return (
        <View style={styles.screen}>
            <View style={styles.headerStyle}>
                <Icon name='arrowleft' size={25} onPress={() => { navigation.goBack() }} color='black' style={{ marginLeft: 10, marginTop: 10 }} />
                <Text style={styles.usernameTextStyle}>username :- {username ? username : ''}</Text>
            </View>
            <FlatList
                data={channels}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TwilioChatRoomScreen', { channelId: item.id, identity: username, })}>
                        <Text style={styles.cardText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity
                style={[styles.button]}
                onPress={() => { navigation.navigate('TwilioChatCreateScreen', { username }) }}
            >
                <Text style={styles.buttonText}>Create New Channel</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'red',
    },
    addButton: {
        height: 24,
        width: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        backgroundColor: 'red'
    },
    addButtonText: {
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 24,
        color: 'white',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'windsor',
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 1,
        borderRadius: 10,
        marginHorizontal: 12,
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    cardText: {
        fontSize: 16,
        color: 'black',
        marginLeft: 24,
        marginRight: 8,
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%'
    },
    button: {
        marginVertical: 10,
        width: deviceWidth / 3,
        backgroundColor: 'rgb(0,0,50)',
        alignSelf: 'center',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    usernameTextStyle:
    {
        fontSize: 15,
        color: 'black',
        fontWeight: '700'
    }
})