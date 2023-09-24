import { View, Text, StyleSheet, Linking, TouchableOpacity, Dimensions, Image, Alert, Button, BackHandler, Platform, ImageBackground } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import ReactButton from '../../components/Buttons/ReactButton';
import HeaderBoldText from '../../components/Text/HeaderBoldText';
import { EnjoyTabImages, music } from '../../utils/appStrings';

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const Entertainment = (props) => {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', navigationBack)
        return () => BackHandler.removeEventListener('hardwareBackPress', navigationBack)
    }, [])

    const navigationBack = () => {
        props.navigation.goBack()
        return true
    }

    return (
        <View style={styles.containerStyle}>
            <HeaderBoldText headerTitle={"Enjoy"} />
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    Linking.openURL('https://www.youtube.com');
                }}
            >
                <Icon name={'youtube'} size={70} color={'red'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    props.navigation.navigate('YoutubeVideos')
                }}
            >
                <Text>Youtube</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Music') }}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: EnjoyTabImages.music_banner }}
                    resizeMode='cover' />
                    <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{music.music}</Text>
                    </View>
            </TouchableOpacity>
            {/* <ReactButton
                onPress={() => { props.navigation.navigate('Music') }}
                buttonTitle={'Music Enjoy'}
            /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        alignItems: 'center',
    },
    buttonStyle: {
        alignItems: 'center',
        width: deviceWidth / 2,
        // backgroundColor: 'red',
        padding: 10,
        marginTop: 30
    },
    imageStyle: {
        width: deviceWidth-20,
        height:150,
        borderRadius:20
    },
    viewStyle:{
        width:deviceWidth-20,
        backgroundColor:'rgba(10,10,10,0.3)',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        height:150,
    },
    textStyle:{
        textAlign:'center',
        fontSize:30,
        fontStyle:'normal',
        color:'white',
    }
})
export default Entertainment