import { View, Text, StyleSheet, Linking, TouchableOpacity, Dimensions, Image, Alert, Button, BackHandler, Platform } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

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
        width: deviceWidth / 2,
        height: 100,

    },
})
export default Entertainment