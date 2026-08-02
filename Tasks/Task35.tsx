import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {createAsyncStorage} from '@react-native-async-storage/async-storage';

const storage = createAsyncStorage('task35Storage');
const storageKey = 'userInfo';

type UserInfo = {
  name: string;
  age: string;
  country: string;
  timestamp: string;
};

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await storage.getItem(storageKey);

        if (savedData === null) {
          return;
        }

        const userInfo: UserInfo = JSON.parse(savedData);
        const {name, age, country, timestamp} = userInfo;

        const savedTime = new Date(timestamp).getTime();
        const currentTime = new Date().getTime();
        const difference = currentTime - savedTime;

        if (difference < 60000) {
          setName(name);
          setAge(age);
          setCountry(country);
        } else {
          await storage.removeItem(storageKey);
        }
      } catch {
        Alert.alert('Error', 'Could not read the saved information');
      }
    };

    loadData();
  }, []);

  const saveData = async () => {
    const userInfo: UserInfo = {
      name,
      age,
      country,
      timestamp: new Date().toISOString(),
    };

    try {
      await storage.setItem(storageKey, JSON.stringify(userInfo));
      Alert.alert('Success', 'Information saved successfully');
    } catch {
      Alert.alert('Error', 'Could not save the information');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.title}>Age</Text>

      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="number-pad"
      />

      <Text style={styles.title}>Country</Text>

      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
        placeholder="Enter your country"
      />

      <Button title="Submit" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});

export default Task35;