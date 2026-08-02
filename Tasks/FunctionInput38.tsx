import React, {useContext} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import ClassText38 from './ClassText38';
import {TextContext38} from './TextContext38';

const FunctionInput38 = () => {
  const {text, setText} = useContext(TextContext38);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text"
      />

      <ClassText38 />
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
    marginBottom: 8,
  },
});

export default FunctionInput38;