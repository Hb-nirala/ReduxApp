import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { TwilioService } from "../twilioService";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useApp } from "../AppContext";
import Icon from 'react-native-vector-icons/AntDesign'

export const ChatCreateScreen = ({ navigation, route }) => {
    const { username } = route.params;
    const [channelName, setChannelName] = useState('');
    const [loading, setLoading] = useState(false);
    const { channels, updateChannels } = useApp();



    const onAddChannel = (channel) => {
        console.log("onAddChannel===", channel);
        const newChannel = TwilioService.getInstance().parseChannel(channel);
        updateChannels(channels.concat(newChannel));
    };

    const onCreateOrJoin = () => {
        console.log("channels==-=-=-=-=-=-=", channels);
        console.log("channelName===", channelName);
        setLoading(true);
        TwilioService.getInstance()
            .getChatClient()
            .then((client) =>
                client
                    .getConversationByUniqueName(channelName)
                    .then((channel) => (channel.channelState.status !== 'joined' ? console.log("channel.channelState.status", channel) : console.log("channel", channel)))
                    .then(onAddChannel)
                    .catch(() =>
                        client.createConversation({ uniqueName: channelName, friendlyName: channelName })
                            .then((channel) => {
                                onAddChannel(channel);
                                channel.join()
                            }),
                    ),
            )
            .then(() => showMessage({ message: 'You have joined.' }))
            .catch((err) => showMessage({ message: err.message, type: 'danger' }))
            .finally(() => setLoading(false));
        navigation.navigate('TwilioChatRoomScreen', { channelName: channelName })
    };

    return (
        <View style={styles.screen}>
            <View style={styles.headerStyle}>
                <Icon name='arrowleft' size={25} onPress={() => { navigation.goBack() }} color='black' style={{ marginLeft: 10, marginTop: 10 }} />
                <Text style={styles.usernameTextStyle}>username :- {username ? username : ''}</Text>
            </View>
            {/* <Image style={styles.logo} source={images.message} /> */}
            <TextInput
                value={channelName}
                onChangeText={(text) => setChannelName(text)}
                style={styles.input}
                placeholder="Channel Name"
            />
            <TouchableOpacity style={styles.button} onPress={onCreateOrJoin}>
                <Text style={styles.buttonText}>Create Or Join</Text>
            </TouchableOpacity>
            {/* {loading && <LoadingOverlay />} */}
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 32,
    },
    input: {
        width: 280,
        height: 50,
        padding: 12,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 32,
        marginBottom: 16,
    },
    button: {
        width: 280,
        height: 50,
        backgroundColor: 'malibu',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 17,
        color: 'white',
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%'
    },
});