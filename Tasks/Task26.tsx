import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Task26 = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  const nonBlockingRequest = () => {
    fetch('https://api.ipify.org/')
      .then(response => response.text())
      .then(data => setIp(data))
      .catch(() => setIp('Error'));
  };

  const blockingRequest = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://api.ipify.org/');
      const data = await response.text();
      setIp(data);
    } catch {
      setIp('Error');
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ip}</Text>

      <View style={styles.button}>
        <Button
          title="Non-Blocking"
          onPress={nonBlockingRequest}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Blocking"
          onPress={blockingRequest}
        />
      </View>

      <Modal visible={loading} transparent>
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
          <Text>Loading...</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
  button: {
    width: 220,
    marginVertical: 8,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});

export default Task26;