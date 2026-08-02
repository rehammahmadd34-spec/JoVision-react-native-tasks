import React from 'react';
import {TextInput, View} from 'react-native';

type Props = {
  text: string;
  setText: (value: string) => void;
};

const MyFunctionPage22 = ({text, setText}: Props) => {
  return (
    <View style={{marginTop: 20}}>
      <TextInput
        style={{
          borderWidth: 1,
          width: 250,
          padding: 10,
        }}
        placeholder="Enter your name"
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

export default MyFunctionPage22;