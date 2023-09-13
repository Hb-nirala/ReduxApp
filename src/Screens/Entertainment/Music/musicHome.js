import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import TrackPlayer, { State } from 'react-native-track-player'
import { musicListArray } from '../../../utils/globalConstant'
const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const MusicHome = (props) => {
    const item = props?.route?.params?.item
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        palyPause(item.id)
    }, [item])

    const palyPause = async (id) => {
        // console.log("id",id , typeof id);
        var index = id - 1
        // console.log("index",index, typeof index);
        try {
            // await TrackPlayer.skip(index)
            // await TrackPlayer.play()

            if (await TrackPlayer.getState() == State.Playing) {
                setIsPlay(false)
                await TrackPlayer.pause()
            }
            else {
                await TrackPlayer.skip(index)
                await TrackPlayer.play()
                setIsPlay(true)
            }
        }
        catch (error) {
            console.log("error===", error);
        }
    }

    const musicItemRenderItem = ({ item }) => {
        console.log("item==",item);
        return (
            console.log("item==",item),
            <View style={styles.itemViewRenderStyle}>
                <Image source={{ uri: item.image }}
                    resizeMode='cover'
                    style={styles.imageStyle} />
                <View style={styles.itemInfoStyle}>
                    <Text style={styles.itemTextStyle}>{item.name}</Text>
                    <Text style={styles.itemTextStyle}>{item.title}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.viewStyle}>
            <Text>musicHome</Text>
            <View style={styles.flatListStyle}>
                <FlatList
                    pagingEnabled
                    horizontal
                    data={musicListArray}
                    renderItem={musicItemRenderItem}
                    onScroll={()=>{console.log("item------",item)}}
                    
                />
            </View>

            {/* <Image source={{ uri: item.image }}
                resizeMode='cover'
                style={styles.imageStyle} />
            <View style={styles.itemInfoStyle}>
                <Text style={styles.itemTextStyle}>{item.name}</Text>
                <Text style={styles.itemTextStyle}>{item.title}</Text>
            </View> */}

            <View style={styles.musicControlStyle}>
                <Icon name='banckward' size={40} onPress={async () => { await TrackPlayer.skipToPrevious() }} color={'rgb(0,0,50)'} />
                {isPlay ?
                    <Icon name='pausecircleo' size={40} onPress={() => { palyPause(item.id) }} color={'rgb(0,0,50)'} /> //playcircleo
                    :
                    <Icon name='playcircleo' size={40} onPress={() => { palyPause(item.id) }} color={'rgb(0,0,50)'} />
                }
                <Icon name='forward' size={40} onPress={async () => { await TrackPlayer.skipToNext() }} color={'rgb(0,0,50)'} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        alignItems: 'center',
    },
    imageStyle: {
        marginVertical: 20,
        width: deviceWidth / 2,
        height: deviceWidth / 2,
        borderRadius: 10,
    },
    itemInfoStyle: {
        width: deviceWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTextStyle: {
        fontSize: 25,
        color: 'black'
    },
    musicControlStyle: {
        // top: deviceHeight * 0.3,
        width: deviceWidth - 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
    },
    itemViewRenderStyle: {
        width: deviceWidth,
        alignItems: 'center',
        // backgroundColor:'red'
    },
    flatListStyle: {
        height: deviceHeight * 0.7,
        // backgroundColor:'yellow'
    }
})
export default MusicHome