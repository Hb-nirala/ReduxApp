import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { } from "../twilioService";



export const ChatCreateScreen = () => {
    const [channelName, setChannelName] = useState('');
    const [loading, setLoading] = useState(false);

    const onCreateOrJoin = () => {
        setLoading(true);
        TwilioService.getInstance()
            .getChatClient()
            .then((client) =>
                client
                    .getChannelByUniqueName(channelName)
                    .then((channel) => (channel.channelState.status !== 'joined' ? channel.join() : channel))
                    .catch(() =>
                        client.createChannel({ uniqueName: channelName, friendlyName: channelName }).then((channel) => channel.join()),
                    ),
            )
            .then(() => showMessage({ message: 'You have joined.' }))
            .catch((err) => showMessage({ message: err.message, type: 'danger' }))
            .finally(() => setLoading(false));
    };

    return (
        <View style={styles.screen}>
            {/* <Image style={styles.logo} source={images.message} /> */}
            <TextInput
                value={channelName}
                onChangeText={setChannelName}
                style={styles.input}
                placeholder="Channel Name"
            />
            <TouchableOpacity style={styles.button} onPress={onCreateOrJoin}>
                <Text style={styles.buttonText}>Create Or Join</Text>
            </TouchableOpacity>
            {loading && <LoadingOverlay />}
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whisper',
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
        borderColor: 'eclipse',
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
});