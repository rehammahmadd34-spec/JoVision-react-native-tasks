import React, {
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import {Text, View} from 'react-native';

export type MyFunctionPage24Ref = {
  updateText: (newText: string) => void;
};

const MyFunctionPage24 = forwardRef<MyFunctionPage24Ref>((_, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(newText: string) {
      setText(newText);
    },
  }));

  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontSize: 24}}>{text}</Text>
    </View>
  );
});

export default MyFunctionPage24;