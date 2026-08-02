import React, {useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

function generateRandomWord(length: number) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  return result;
}

const createWords = () =>
  Array.from({length: 100}, (_, index) => ({
    id: index,
    text: generateRandomWord(8),
  }));

const Task37 = () => {
  const [words, setWords] = useState(createWords());
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setWords(createWords());
    setRefreshing(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      }>
      {words.map(item => (
        <Text key={item.id} style={styles.text}>
          {item.text}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Task37;