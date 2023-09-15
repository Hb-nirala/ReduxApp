import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import TrackPlayer, { State } from 'react-native-track-player'
import { musicListArray } from '../../../utils/globalConstant'
import Carousel from 'react-native-snap-carousel'
const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const sliderWidth = deviceWidth
const itemWidth = deviceWidth
const MusicHome = (props) => {
    const item = props?.route?.params?.item
    const [isPlay, setIsPlay] = useState(false)
    const [index, setIndex] = useState()
    const [currentIndex, setCurrentIndex] = useState(item?.id - 1)
    const flatListRef = useRef()

    // const viewConfigRef = useRef({ minimumViewTime: 100, viewAreaCoveragePercentThreshold: 50 })
    // const onViewableMusicItemsChangedRef = useRef(({ changed }) => {
    //     console.log("changed===",changed);
    //     setCurrentIndex(changed[0].index)
    //   })

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
    }, [])

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
        // flatListRef?.current?.snapToNext()
        // var index = item?.id - 1
        // console.log("index==1", index);
        // index = index + 1
        // console.log("index==2", index);
        // if (index < musicListArray.length) {
            console.log("index==3", index);
            // flatListRef?.current?.scrollToIndex({ animated: true, index: index })
            let currentTrack=await TrackPlayer.getCurrentTrack()
            console.log("currentTrack==",currentTrack);
            await TrackPlayer.skipToNext()
        // }
        // else {
            // console.log("index==4", index);
            console.log("index is greter than array Length");
        // } 
    }

    const previousClick = async() => {
        // flatListRef?.current?.snapToPrev()
        // var index = item?.id - 1
        // console.log("index==1", index);
        // index = index - 1
        // console.log("index==2", index);
        // if (index < musicListArray.length) {
            console.log("index==3", index);
            // setCurrentIndex(index)
            // flatListRef?.current?.scrollToIndex({ animated: true, index: index })
            let currentTrack=await TrackPlayer.getCurrentTrack()
            console.log("currentTrack==",currentTrack);
            setCurrentIndex(currentTrack)
            await TrackPlayer.skipToPrevious()
        // }
        // else {
            // console.log("index is greter than array Length");
            // await TrackPlayer.skipToPrevious()
        // }
    }

    const musicItemRenderItem = ({ item }) => {
        // console.log("item==",item);
        return (
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
                    horizontal
                    ref={flatListRef}
                    data={musicListArray}
                    renderItem={musicItemRenderItem}
                    onScroll={async(e)=>{
                        const x=e.nativeEvent.contentOffset.x/deviceWidth;
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

            {/* <Image source={{ uri: item.image }}
                resizeMode='cover'
                style={styles.imageStyle} />
            <View style={styles.itemInfoStyle}>
                <Text style={styles.itemTextStyle}>{item.name}</Text>
                <Text style={styles.itemTextStyle}>{item.title}</Text>
            </View> */}

            <View style={styles.musicControlStyle}>
                <Icon name='banckward' size={40} onPress={() => { previousClick() }} color={'rgb(0,0,50)'} />
                {isPlay ?
                    <Icon name='pausecircleo' size={40} onPress={() => { palyPause(currentIndex) }} color={'rgb(0,0,50)'} /> //playcircleo
                    :
                    <Icon name='playcircleo' size={40} onPress={() => { palyPause(currentIndex) }} color={'rgb(0,0,50)'} />
                }
                <Icon name='forward' size={40} onPress={() => { nextClick() }} color={'rgb(0,0,50)'} />
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