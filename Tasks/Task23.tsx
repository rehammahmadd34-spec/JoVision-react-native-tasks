import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MyClassPage23 from './MyClassPage23';

const Task23 = () => {
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

      <MyClassPage23
        text={text}
        setText={setText}
      />
    </View>
  );
};

export default Task23;