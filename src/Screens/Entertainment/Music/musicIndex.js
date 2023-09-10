import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import { musicListArray } from '../../../utils/globalConstant'
import TrackPlayer,{State,Capability,AppKilledPlaybackBehavior,RepeatMode} from 'react-native-track-player'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height
const Music = () => {
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    const setupPlayer = async () => {
        let isSetup = false;
        try {
            await TrackPlayer.getCurrentTrack();
            isSetup = true;
        }
        catch {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.updateOptions({
                android: {
                    appKilledPlaybackBehavior:
                        AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
                },
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                    Capability.SeekTo,
                ],
                compactCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                ],
                progressUpdateEventInterval: 2,
            });

            isSetup = true;
        }
        finally {
            return isSetup;
        }
    }


    const addTracks = async () => {
        await TrackPlayer.add([
            {
                id: '1',
                url: require('../../../../assets/Songs/Sample-1.mp3'),
                title: 'Fluidity',
                artist: 'tobylane',
                duration: 60,
            }
        ]);
        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    }

    useEffect(() => {
        const setup = async () => {
            let isSetup = await setupPlayer();
            const queue = await TrackPlayer.getQueue();
            if (isSetup && queue.length <= 0) {
                await addTracks();
            }
            setIsPlayerReady(isSetup);
        }
        setup();
    }, []);
    


//     TrackPlayer.getState().then(async (state) => {
//         console.log("State==",state);
//         if (state === State.None) {
//             // The player is not set up
//             console.log("State==",State);
//             await TrackPlayer.setupPlayer();
//         }
// })

    // const start = async (item) => {
    //     console.log("item===", item);
    //     // Set up the player
    //     try {
    //         await TrackPlayer.setupPlayer();

    //         // Add a track to the queue
    //         await TrackPlayer.add({
    //             id: item.id,
    //             url: item.url,
    //             title: item.title, 
    //         });
    //         // Start playing it
    //         await TrackPlayer.play();
    //     } catch (error) {
    //         console.log("error===", error);
    //     }
    // };
    





    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemViewStyle}>
                <Image source={{ uri: item.image }}
                    resizeMode='cover'
                    style={styles.imageStyle} />
                <View style={styles.itemInfoStyle}>
                    <Text style={styles.itemTextStyle}>{item.name}</Text>
                    <Text style={styles.itemTextStyle}>{item.title}</Text>
                </View>
                <View style={styles.buttonViewStyle}>
                    <Text style={styles.itemTextStyle} onPress={() => {TrackPlayer.play()  }}>Add</Text>
                </View>
            </View>
        )
    }
  return (
    <View style={styles.viewStyle}>
      <Text>musicIndex</Text>
      { isPlayerReady ? <FlatList
                data={musicListArray}
                style={{ flex: 1 }}
                renderItem={renderItem}
            /> :
            <View><Text>{isPlayerReady}</Text></View>
            }
    </View>
  )
}
const styles=StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(225,245,230)',
        alignItems: 'center',
    },
    itemViewStyle: {
        width: deviceWidth - 20,
        backgroundColor: 'rgb(0,0,50)',
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageStyle: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    itemInfoStyle: {
        width: deviceWidth / 2,
        justifyContent: 'center'
    },
    itemTextStyle: {
        color: 'rgb(255,255,255)',
        fontSize: 25,
    },
    buttonViewStyle: {
        alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        // width: deviceWidth * 0.2,
    },
})
export default Music