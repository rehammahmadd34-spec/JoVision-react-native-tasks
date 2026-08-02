import React, {useState} from 'react';
import {Button, View} from 'react-native';
import MyFunctionPage21 from './MyFunctionPage21';

const Task21 = () => {
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

      {showPage && <MyFunctionPage21 />}
    </View>
  );
};

export default Task21;