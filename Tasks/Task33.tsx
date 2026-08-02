import React, {useRef, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

const Task33 = () => {
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(true);

  const toggleVideo = () => {
    setPaused(currentValue => !currentValue);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleVideo} style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../Resource/video.mp4')}
          poster={{
            source: require('../Resource/poster.jpg'),
            resizeMode: 'cover',
          }}
          controls={false}
          paused={paused}
          resizeMode="contain"
          style={styles.video}
        />

        <View style={styles.middleButton}>
          <Text style={styles.buttonText}>
            {paused ? '▶' : 'Ⅱ'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: 350,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  middleButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default Task33;