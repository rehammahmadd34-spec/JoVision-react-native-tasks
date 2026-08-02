import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MyFunctionPage22 from './MyFunctionPage22';

const Task22 = () => {
  const [text, setText] = useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 22, marginBottom: 20}}>
        {text}
      </Text>

      <MyFunctionPage22
        text={text}
        setText={setText}
      />
    </View>
  );
};

export default Task22;