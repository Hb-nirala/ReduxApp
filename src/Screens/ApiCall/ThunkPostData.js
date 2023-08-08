import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { appDimension } from '../../utils/globalConstant'
import ReactButton from '../../components/Buttons/ReactButton'
import { useDispatch, useSelector } from 'react-redux'
import { postUsersData } from '../../Redux/ApiCalls/newsSlicePost'

const ThunkPostData = (props) => {

    const dispatch = useDispatch()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobileNo, setMobileNo] = useState()

    const userData = {
        name: name,
        email: email,
        mobileNo: mobileNo,
    }

    const submitUserData = () => {
        console.log("userData", userData);
        dispatch(postUsersData(userData))
        setName('')
        setEmail('')
        setMobileNo('')
    }
    const postResponseData = useSelector((state) => state.users_data_post.postData)
    // console.log("postResponseData", postResponseData);

    return (
        <View style={styles.viewStyle}>
            <View style={styles.headerStyle}>
                <Icon name='arrowleft' size={25} onPress={() => { props.navigation.goBack() }} color='black' style={{}} />
                <Text style={styles.salutationStyle}>Post Data</Text>
            </View>
            <TextInput style={styles.input}
                placeholder="Enter Name"
                onChangeText={(text) => { setName(text) }}
                value={name}
            />
            <TextInput style={styles.input}
                placeholder="Enter Email"
                onChangeText={(text) => { setEmail(text) }}
                editable={true}
                value={email}
            />
            <TextInput style={styles.input}
                placeholder="Enter Mobile Number"
                editable={true}
                onChangeText={(text) => { setMobileNo(text) }}
                value={mobileNo}
            />
            <ReactButton buttonTitle={'Submit'} onPress={() => { submitUserData() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        alignItems: 'center',
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: appDimension.deviceWidth * 0.6,
        // backgroundColor:'red',
        paddingVertical: 10,
        alignSelf: 'flex-start',
        marginHorizontal: 10,
    },
    salutationStyle: {
        fontSize: 20,
        color: 'rgb(234,100,255)',
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: appDimension.deviceWidth - 20,
        marginVertical: 10,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
})
export default ThunkPostData