import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { TwilioService } from '../twilioService';

const AddParticipants = ({ navigation, route }) => {
    const { channelId, identity, channelName, username } = route.params;
    const [participantname, setParticipantname] = useState('')

    console.log("channelId, identity, channelName ,username", channelId, identity, channelName, username);

    const addMembers = (participantname) => {
        console.log("participantname==",participantname);
        const addMembersResponse = TwilioService.getInstance().addMembersInChannel(channelId, participantname)
        console.log("addMembersResponse===", addMembersResponse);
        // navigation.navigate('TwilioChatRoomScreen', { participantname }) 
    }

    return (
        <View style={styles.screen}> 
            <View style={styles.headerStyle}>
                <Icon name='arrowleft' size={25} onPress={() => { navigation.goBack() }} color='black' style={{ marginLeft: 10, marginTop: 10 }} />
                <Text style={styles.usernameTextStyle}>username :- {identity ? identity : ''}</Text>
            </View>
            <Text>Add Chat Participants</Text>
            <TextInput
                value={participantname}
                onChangeText={(text) => setParticipantname(text)}
                style={styles.input}
                placeholder="Enter Participant Name"
            />
            <TouchableOpacity
                style={[styles.button]}
                onPress={() => { addMembers(participantname) }}
            >
                <Text style={styles.buttonText}>Add Participant</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%'
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
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
})
export default AddParticipants
