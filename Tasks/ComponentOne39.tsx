import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState39} from './store39';
import {updateText} from './textSlice39';

const ComponentOne39 = () => {
  const text = useSelector((state: RootState39) => state.text39.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={value => dispatch(updateText(value))}
        placeholder="Enter text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    width: 250,
    borderWidth: 1,
    padding: 10,
  },
});

export default ComponentOne39;