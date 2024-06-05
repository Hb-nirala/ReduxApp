import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import ReactButton from '../../../components/Buttons/ReactButton'
import { useDispatch, useSelector } from 'react-redux'
import { postUsersData } from '../../../Redux/ApiCalls/newsSlicePost'
import HeaderView from '../../../components/HeaderView/HeaderView'
import { appDimension } from '../../../utils/globalConstant'


const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

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
            <HeaderView
                Title={'Post Data'}
                onBackPress={() => { props.navigation.goBack() }}
                // style={styles.headerViewStyle}
            />
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
            <ReactButton style={styles.buttonStyle} buttonTitle={'Submit'} onPress={() => { submitUserData() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        // alignItems: 'center',
    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: deviceWidth * 0.6,
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
        width: deviceWidth - 20,
        marginVertical: 10,
        alignSelf: 'center',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    headerViewStyle:{
        width:appDimension.deviceWidth*0.64,
    },
    buttonStyle:{
        alignSelf:'center'
    }
})
export default ThunkPostData