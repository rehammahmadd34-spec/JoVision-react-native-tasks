import React, {useRef} from 'react';
import {TextInput, View} from 'react-native';
import MyFunctionPage24, {
  MyFunctionPage24Ref,
} from './MyFunctionPage24';

const Task24 = () => {
  const functionPageRef = useRef<MyFunctionPage24Ref>(null);

  const handleTextChange = (newText: string) => {
    functionPageRef.current?.updateText(newText);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          borderWidth: 1,
          width: 250,
          padding: 10,
        }}
        placeholder="Enter your name"
        onChangeText={handleTextChange}
      />

      <MyFunctionPage24 ref={functionPageRef} />
    </View>
  );
};

export default Task24;