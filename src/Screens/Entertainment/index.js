import { View, Text, StyleSheet, Linking, TouchableOpacity, Dimensions, Image, Alert, Button, BackHandler, Platform, ImageBackground } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import HeaderBoldText from '../../components/Text/HeaderBoldText';
import { Enjoy, EnjoyTabImages, music } from '../../utils/appStrings';

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
            <TouchableOpacity style={styles.youtubeButtonStyle}
                onPress={() => {
                    Linking.openURL('https://www.youtube.com');
                }}>
                <Text style={styles.youtubeTitleStyle}>{Enjoy.you_tube}</Text>
                <Icon name={'youtube'} size={70} color={'red'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => {
                    props.navigation.navigate('YoutubeVideos')
                }}
            >
                <Image style={styles.youtubeBannerImage}
                    resizeMode='cover'
                    source={EnjoyTabImages.youtube_videos_bannerimage} />
                <Text style={styles.descriptionTextStyle}>{Enjoy.youtube_videos_description}</Text>
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
        width: deviceWidth-20,
        // backgroundColor: 'red',
        // padding: 10,
        marginVertical: 10,
        backgroundColor:'rgba(99, 141, 145,0.5)',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
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
    },
    youtubeBannerImage:{
        width:100,
        height:100
    },
    descriptionTextStyle:{
        color:'white',
        fontSize:20,
        fontStyle:'normal',
        fontWeight:'600',
        textAlign:'center',
    },
    youtubeTitleStyle:{
        fontSize:15,
        fontStyle:'normal',
        fontWeight:'500',
        color:'black',
        textAlign:'left',
        marginLeft:deviceWidth*0.1
        // width:deviceWidth*0.8
    },
    youtubeButtonStyle:{
        alignItems: 'center',
        width: deviceWidth-20,
        // backgroundColor: 'red',
        // padding: 10,
        marginVertical: 10,
        backgroundColor:'rgba(99, 141, 145,0.5)',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:40,
        paddingVertical:30,
    }
})
export default Entertainment