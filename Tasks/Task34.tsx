import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useCurrentTime from './useCurrentTime';

const Task34 = () => {
  const currentTime = useCurrentTime();

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {currentTime.toLocaleTimeString()}
      </Text>

      <Text style={styles.date}>
        {currentTime.toLocaleDateString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 36,
    marginBottom: 15,
  },
  date: {
    fontSize: 24,
  },
});

export default Task34;