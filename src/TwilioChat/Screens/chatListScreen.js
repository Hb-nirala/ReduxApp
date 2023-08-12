import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useApp } from "../AppContext";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getToken } from "../apiService";
import { TwilioService } from "../twilioService";
import { showMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/AntDesign'

export const ChatListScreen = ({ navigation, route }) => {
    const { username } = route.params;
    const { channels, updateChannels } = useApp();
    const channelPaginator = useRef();
    const [loading, setLoading] = useState(true)

    console.log("channels", channels);

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

    const setChannelEvents = useCallback(
        (client) => {
            console.log("client==", client);
            // client.on('messageAdded', (message) => {
            //     updateChannels((prevChannels) =>
            //         console.log("prevChannels", prevChannels),
            //         prevChannels.map((channel) =>
            //             channel.id === message.channel.sid ? { ...channel, lastMessageTime: message.dateCreated } : channel,
            //         ),
            //     );
            // });
            return client;
        },
        [updateChannels],
    );

    const getSubscribedChannels = useCallback(
        (client) =>
            console.log("client", client)
            // client.getSubscribedChannels().then((paginator) => {
            //     channelPaginator.current = paginator;
            //     const newChannels = TwilioService.getInstance().parseChannels(channelPaginator.current.items);
            //     updateChannels(newChannels);
            // }),
            [updateChannels],
    );

    useEffect(() => {
        console.log("username==1", username);
        getToken(username)
            .then((token) => TwilioService.getInstance().getChatClient(token))
            .then(() => TwilioService.getInstance().addTokenListener(getToken))
            .then(setChannelEvents)
            .then(getSubscribedChannels)
            .catch((err) => showMessage({ message: err.message, type: 'danger' }))
            .finally(() => setLoading(false));

        return () => TwilioService.getInstance().clientShutdown();
    }, [username, setChannelEvents, getSubscribedChannels]);

    return (
        <View style={styles.screen}>
            <Icon name='arrowleft' size={25} onPress={() => { navigation.goBack() }} color='black' style={{ marginLeft: 10, marginTop: 10 }} />
            <FlatList
                data={channels}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate('TwilioChatRoomScreen', { channelId: item.id, identity: username })}>
                        <Text style={styles.cardText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'smoke',
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
        color: 'cinder',
        marginLeft: 24,
        marginRight: 8,
    },
})