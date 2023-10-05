import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const ButtonWithImage = ({ onPress, imageSource, imageStyle, style, Title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.touchableStyle}>
            <Image
                style={[styles.imageStyle, imageStyle]}
                source={imageSource}
                resizeMode='cover' />
            <View style={[styles.viewStyle, style]}>
                <Text style={styles.textStyle}>{Title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    touchableStyle:{
        marginVertical:5
    },
    imageStyle: {
        width: deviceWidth - 20,
        height: 150,
        borderRadius: 20
    },
    viewStyle: {
        width: deviceWidth - 20,
        backgroundColor: 'rgba(10,10,10,0.3)',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 150,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'normal',
        color: 'white',
    }
})
export default ButtonWithImage