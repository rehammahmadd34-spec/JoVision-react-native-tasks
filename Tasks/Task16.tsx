import {useState} from 'react';
import {Button, Text, View} from 'react-native';

export default function Task16() {
  const [showName, setShowName] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Show"
        onPress={() => setShowName(previousValue => !previousValue)}
      />

      {showName ? (
        <Text style={{marginTop: 20, fontSize: 20}}>Reham</Text>
      ) : null}
    </View>
  );
}