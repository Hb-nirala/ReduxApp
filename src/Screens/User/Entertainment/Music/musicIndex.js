import { View, Text, StyleSheet, Dimensions, Image, FlatList, Pressable, ImageBackground } from 'react-native'
import React,{useEffect,useState} from 'react'
import { musicListArray, setupPlayer } from '../../../../utils/globalConstant';
import Icon from 'react-native-vector-icons/Feather'

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const Music = (props) => {

    // const [isPlayerReady, setIsPlayerReady] = useState(false);

    // const setupPlayer = async () => {
    //     let isSetup = false;
    //     try {
    //         await TrackPlayer.getCurrentTrack();
    //         isSetup = true;
    //     }
    //     catch {
    //         await TrackPlayer.setupPlayer();
    //         await TrackPlayer.updateOptions({
    //             android: {
    //                 appKilledPlaybackBehavior:
    //                     AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
    //             },
    //             capabilities: [
    //                 Capability.Play,
    //                 Capability.Pause,
    //                 Capability.SkipToNext,
    //                 Capability.SkipToPrevious,
    //                 Capability.SeekTo,
    //             ],
    //             compactCapabilities: [
    //                 Capability.Play,
    //                 Capability.Pause,
    //                 Capability.SkipToNext,
    //             ],
    //             progressUpdateEventInterval: 2,
    //         });

    //         isSetup = true;
    //     }
    //     finally {
    //         return isSetup;
    //     }
    // }

    // const addTracks = async () => {
    //     await TrackPlayer.add([
    //         {
    //             id: '1',
    //             url: require('../../../../assets/Songs/Sample-1.mp3'),
    //             title: 'Fluidity',
    //             artist: 'tobylane',
    //             duration: 60,
    //         }
    //     ]);
    //     await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    // }

    // useEffect(() => {
    //     const setup = async () => {
    //         let isSetup = await setupPlayer();
    //         const queue = await TrackPlayer.getQueue();
    //         if (isSetup && queue.length <= 0) {
    //             await addTracks();
    //         }
    //         setIsPlayerReady(isSetup);
    //     }
    //     setup();
    // }, []);
    
//     TrackPlayer.getState().then(async (state) => {
//         console.log("State==",state);
//         if (state === State.None) {
//             // The player is not set up
//             console.log("State==",State);
//             await TrackPlayer.setupPlayer();
//         }
// })

useEffect(()=>{
    setupPlayer()
},[])

    const renderItem = ({ item }) => {
        return (
            <Pressable style={styles.itemViewStyle} onPress={() => props.navigation.navigate('MusicHome',{item})}>
                <Image source={{ uri: item.image }}
                    resizeMode='cover'
                    style={styles.imageStyle} />
                <View style={styles.itemInfoStyle}>
                    <Text style={styles.itemTextStyle} numberOfLines={1}>{item.name}</Text>
                    <Text style={styles.itemTitleStyle} numberOfLines={1}>{item.title}</Text>
                </View>
                <View style={styles.buttonViewStyle}>
                    {/* <Text style={styles.itemTextStyle} onPress={() => { palyPause(item.id) }}>Add</Text> */}
                    <Icon name={'more-vertical'} color={'white'} size={25}/>
                </View>
            </Pressable>
        )
    }

  return (
      <View style={styles.viewStyle}>
          <ImageBackground
              source={{ uri: 'https://cdn6.aptoide.com/imgs/7/b/1/7b1c49e454d1ed8e9396dc9d283f7108_icon.png' }}
              style={styles.backgroundImageStyle}>
              <View style={styles.topViewStyle}>
                  <Icon name='arrow-left' color={'white'} style={styles.iconStyle} size={25} onPress={()=>{props.navigation.goBack()}}/>
                  <Text style={styles.singerNameStyle}>Singer Name</Text>
                  <Text style={styles.musicHeaderStyle}>By Redux Music</Text>
                  <Text style={styles.musicHeaderStyle}>{musicListArray.length} songs</Text>
              </View>
          </ImageBackground>
          <FlatList
              showsVerticalScrollIndicator={false}
              data={musicListArray}
              style={{ flex: 1,zIndex:1, }}
              renderItem={renderItem}
          />
      </View>
  )
}
const styles=StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'rgb(0,0,50)',
        alignItems: 'center',
    },
    itemViewStyle: {
        width: deviceWidth - 20,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    itemInfoStyle: {
        width: deviceWidth / 2,
        justifyContent: 'center'
    },
    itemTextStyle: {
        color: 'rgb(255,255,255)',
        fontSize: 15,
    },
    buttonViewStyle: {
        alignSelf: 'center',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        // width: deviceWidth * 0.2,
    },
    backgroundImageStyle: {
        width: deviceWidth,
        height: deviceHeight * 0.3,
        // position: 'absolute',
        // zIndex: -1,
        // shadowColor:'black',
    },
    musicHeaderStyle:{
        color:'rgb(255,255,255)',
        textAlign:'center',
        fontSize:15,
        // alignSelf:'center'
    },
    topViewStyle:{
        justifyContent:'center',
        alignItems:'center',
        width:deviceWidth,
        height: deviceHeight * 0.3,
        backgroundColor:'rgba(0,0,50,0.5)'
    },
    singerNameStyle:{
        fontSize:20,
        textAlign:'center',
        // alignSelf:'center',
        color:'rgb(255,255,255)'
    },
    itemTitleStyle:{
        fontSize:12,
        color:'rgb(220,225,220)',
        fontStyle:'normal',
        fontWeight:'300'
    },
    iconStyle:{
        position:'absolute',
        top:20,
        left:20,
    }
})
export default Music