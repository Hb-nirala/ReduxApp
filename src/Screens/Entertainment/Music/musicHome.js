import { View, Text, StyleSheet, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import TrackPlayer, { State, useProgress } from 'react-native-track-player'
import { musicListArray } from '../../../utils/globalConstant'
import Slider from '@react-native-community/slider'
const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const sliderWidth = deviceWidth
const itemWidth = deviceWidth

const MusicHome = (props) => {
    const item = props?.route?.params?.item
    const [isPlay, setIsPlay] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(item?.id - 1)
    const flatListRef = useRef()
    const { position, duration } = useProgress(0);

    useEffect(() => {
        palyPause(currentIndex)
    }, [currentIndex])

    useEffect(() => {
        setTimeout(() => {
            flatListRef?.current?.scrollToIndex({ 
                animated: true,
                index: currentIndex
            })
        }, 500)
    }, [currentIndex])


    const palyPause = async (currentIndex) => {
        // console.log("id",id , typeof id);
        // var index = id - 1
        // console.log("index",index, typeof index);
        try {
            // await TrackPlayer.skip(index)
            // await TrackPlayer.play()
            if (await TrackPlayer.getState() == State.Playing) {
                setIsPlay(false)
                await TrackPlayer.pause()
            }
            else {
                await TrackPlayer.skip(currentIndex)
                await TrackPlayer.play()
                setIsPlay(true)
            }
        }
        catch (error) {
            console.log("error===", error);
        }
    }

    const nextClick = async() => {
            let currentTrack=await TrackPlayer.getCurrentTrack()
            flatListRef?.current?.scrollToIndex({
                animated: true,
                index: currentTrack
            })
            await TrackPlayer.skipToNext()
            // console.log("currentTrack==",currentTrack);
    }

    const previousClick = async () => {
        let currentTrack = await TrackPlayer.getCurrentTrack()
        flatListRef?.current?.scrollToIndex({
            animated: true,
            index: currentTrack
        })
        await TrackPlayer.skipToPrevious()
        // console.log("currentTrack==",currentTrack);
    }

    const format = (seconds) => {
        let mins = (parseInt(seconds / 60)).toString().padStart(2, '0');
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }

    const musicItemRenderItem = ({ item }) => {
        return (
            <View style={styles.itemViewRenderStyle}>
                <Image source={{ uri: item.image }}
                    resizeMode='cover'
                    style={styles.imageStyle} />
                <View style={styles.itemInfoStyle}>
                    <Text style={styles.itemTextStyle}>{item.name}</Text>
                    <Text style={styles.itemTitleStyle}>{item.title}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.viewStyle}>
            <Icon name='arrowleft' color={'white'} style={styles.iconStyle} size={25} onPress={()=>{props.navigation.goBack()}}/>
            <View style={styles.flatListStyle}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    ref={flatListRef}
                    data={musicListArray}
                    renderItem={musicItemRenderItem}
                    onScroll={async (e) => {
                        const x = e.nativeEvent.contentOffset.x / deviceWidth;
                        setCurrentIndex(parseInt(x.toFixed(0)))
                    }}
                    // sliderWidth={sliderWidth}
                    // itemWidth={itemWidth}
                    pagingEnabled={true}
                // useScrollView
                // swipeThreshold={20}
                // activeSlideOffset={1}
                // enableMomentum={true}
                // hasParallaxImages={true}
                // onSnapToItem={(index) => { setCurrentIndex(index) }}
                // viewabilityConfig={viewConfigRef?.current}
                // onViewableItemsChanged={onViewableMusicItemsChangedRef?.current}
                />
            </View>
            <View style={styles.controlViewStyle}>
                <Text style={styles.trackProgress}>
                    {format(position)}
                </Text>
                <Text style={styles.trackProgress}>
                    {format(duration)}
                </Text>
            </View>
            <Slider
                style={styles.sliderStyle}
                minimumValue={0}
                maximumValue={duration}
                minimumTrackTintColor="rgb(197,5,4)"
                maximumTrackTintColor="white"
                thumbTintColor='rgb(197,5,4)'
                value={position}
                onValueChange={async (value) => await TrackPlayer.seekTo(value)}
            />
            <View style={styles.musicControlStyle}>
                <TouchableOpacity style={styles.circleStyle}><Icon name='banckward' size={40} onPress={() => { previousClick() }} color={'white'} /></TouchableOpacity>
                {isPlay ?
                    <Icon name='pausecircleo' size={40} onPress={() => { palyPause(currentIndex) }} color={'white'} />//playcircleo
                    :
                    <Icon name='playcircleo' size={40} onPress={() => { palyPause(currentIndex) }} color={'white'} />
                }
                <TouchableOpacity><Icon name='forward' size={40} onPress={() => { nextClick() }} color={'white'} /></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(0,0,50)',
        alignItems: 'center',
    },
    imageStyle: {
        marginVertical: 20,
        width: deviceWidth *0.7,
        height: deviceWidth *0.7,
        borderRadius: 10,
    },
    itemInfoStyle: {
        width: deviceWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTextStyle: {
        fontSize: 25,
        color: 'white'
    },
    musicControlStyle: {
        // top: deviceHeight * 0.3,
        width: deviceWidth - 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical:10,
    },
    itemViewRenderStyle: {
        width: deviceWidth,
        alignItems: 'center',
    },
    flatListStyle: {
        marginTop:deviceHeight*0.07,
        height: deviceHeight * 0.65,
        // width:deviceWidth*0.8,
        // backgroundColor:'red'
    },
    circleStyle: {
        // backgroundColor:'transparent',
        // padding:20,
        // borderRadius:20,
        // borderStyle:'solid',
        // borderColor:'red',
        // borderWidth:2,
    },
    controlViewStyle:{
        width:deviceWidth-50,
        flexDirection:'row',
        justifyContent:'space-between',
        // backgroundColor:'red',
        marginHorizontal:25,
    },
    sliderStyle:{
        width:deviceWidth-20,
        marginHorizontal:10,
    },
    trackProgress:{
        color:'white'
    },
    iconStyle:{
        position:'absolute',
        top:20,
        left:20,
    },
    itemTitleStyle: {
        fontSize: 15,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: '300'
    }
})
export default MusicHome