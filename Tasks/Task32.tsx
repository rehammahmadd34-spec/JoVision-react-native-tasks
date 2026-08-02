import React from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

const Task32 = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../Resource/video.mp4')}
        poster={{
          source: require('../Resource/poster.jpg'),
          resizeMode: 'cover',
        }}
        controls
        resizeMode="contain"
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 350,
    height: 250,
  },
});

export default Task32;