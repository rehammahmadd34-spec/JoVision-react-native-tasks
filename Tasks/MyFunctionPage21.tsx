import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const MyFunctionPage21 = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');

    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontSize: 24}}>Reham</Text>
    </View>
  );
};

export default MyFunctionPage21;