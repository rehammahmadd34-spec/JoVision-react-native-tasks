import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const Task17 = () => {
  const [showName, setShowName] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title={showName ? 'Hide' : 'Show'}
        onPress={() => setShowName(!showName)}
      />

      {showName && (
        <Text style={{ marginTop: 20, fontSize: 20 }}>
          Reham
        </Text>
      )}
    </View>
  );
};

export default Task17;