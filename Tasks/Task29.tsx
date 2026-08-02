import React, {useRef, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const images = [
  require('../Resource/image1.jpg'),
  require('../Resource/image2.jpg'),
  require('../Resource/image3.jpg'),
  require('../Resource/image4.jpg'),
  require('../Resource/image5.jpg'),
  require('../Resource/image6.jpg'),
  require('../Resource/image7.jpg'),
  require('../Resource/image8.jpg'),
  require('../Resource/image9.jpg'),
  require('../Resource/image10.jpg'),
];

const Task29 = () => {
  const flatListRef = useRef<FlatList>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [indexText, setIndexText] = useState('');

  const scrollToImage = () => {
    const index = Number(indexText);

    if (Number.isNaN(index) || index < 0 || index >= images.length) {
      Alert.alert('Invalid Index');
      return;
    }

    setModalVisible(false);

    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index,
        animated: true,
      });
    }, 300);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          ref={flatListRef}
          data={images}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          getItemLayout={(_, index) => ({
            length: 196,
            offset: 196 * index,
            index,
          })}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() =>
                Alert.alert(
                  'Selected Image',
                  `You have selected image : ${index}`,
                )
              }>
              <Image source={item} style={styles.image} />
            </Pressable>
          )}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go To Image"
          onPress={() => setModalVisible(true)}
        />
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Enter image index</Text>

            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              value={indexText}
              onChangeText={setIndexText}
              placeholder="0 - 9"
            />

            <Button title="Submit" onPress={scrollToImage} />

            <View style={styles.cancelButton}>
              <Button
                title="Cancel"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    height: 200,
  },
  image: {
    width: 180,
    height: 180,
    marginHorizontal: 8,
    resizeMode: 'cover',
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 40,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 280,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  cancelButton: {
    marginTop: 10,
  },
});

export default Task29;