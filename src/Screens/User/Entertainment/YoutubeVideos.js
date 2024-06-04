import { View, Text, Button, Dimensions } from 'react-native'
import React, { useState, useCallback } from 'react'
import HeaderView from '../../../components/HeaderView/HeaderView';
import YoutubePlayer from "react-native-youtube-iframe";
import HeaderBoldText from '../../../components/Text/HeaderBoldText';

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const YoutubeVideos = (props) => {
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <>
      <HeaderView
        onPress={() => { props.navigation.goBack() }}
        Title={'Entertainment'}
      />
      <View>
        <YoutubePlayer
          webViewStyle={{ marginHorizontal: 10 }}
          height={700}
          width={deviceWidth}
          play={playing}
          videoId={"Ezh4aL9JXFM"}
          onChangeState={onStateChange}
        />
      </View>
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </>
  )
}

export default YoutubeVideos