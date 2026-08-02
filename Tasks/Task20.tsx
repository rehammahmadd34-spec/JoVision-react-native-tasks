import React, {useState} from 'react';
import {Button, View} from 'react-native';
import MyClassPage20 from './MyClassPage20';

const Task20 = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title={showPage ? 'Hide' : 'Show'}
        onPress={() => setShowPage(previousValue => !previousValue)}
      />

      {showPage && <MyClassPage20 />}
    </View>
  );
};

export default Task20;