import { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
export const WelcomeScreen = (props) => {
    const [username, setUsername] = useState('');

    return (
        <View style={styles.screen}>
            <Icon name='arrowleft' size={25} onPress={() => { props.navigation.goBack() }} color='black' style={{ marginLeft: 10, marginTop: 10 }} />
            <Image style={styles.logo}
                resizeMode="cover"
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3g-LVNwKH6XQWTG-pYtm1lYhHt9uE-GCXIu37p4&s' }}
            />
            <Text style={styles.titleText}>Welcome to Twilio Chat</Text>
            <TextInput
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={styles.input}
                placeholder="Username"
            // placeholderTextColor={colors.ghost}
            />
            <TouchableOpacity
                disabled={!username}
                style={[styles.button]}
                onPress={() => props.navigation.navigate('TwilioChatListScreen', { username })}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 20,
    },
    titleText: {
        fontSize: 20,
        color: 'rgb(234,100,255)',
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: deviceWidth - 20,
        marginVertical: 10,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
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
    }
})