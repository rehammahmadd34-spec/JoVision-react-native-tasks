import React, { useState } from 'react';
import { View, Button } from 'react-native';
import MyClassPage from './MyClassPage';

const Task19 = () => {
  const [show, setShow] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Show"
        onPress={() => setShow(true)}
      />

      {show && <MyClassPage />}
    </View>
  );
};

export default Task19;