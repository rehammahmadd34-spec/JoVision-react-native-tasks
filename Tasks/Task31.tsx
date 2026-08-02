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

type ImageItem = {
  id: string;
  source: number;
};

const initialImages: ImageItem[] = [
  {id: '1', source: require('../Resource/image1.jpg')},
  {id: '2', source: require('../Resource/image2.jpg')},
  {id: '3', source: require('../Resource/image3.jpg')},
  {id: '4', source: require('../Resource/image4.jpg')},
  {id: '5', source: require('../Resource/image5.jpg')},
  {id: '6', source: require('../Resource/image6.jpg')},
  {id: '7', source: require('../Resource/image7.jpg')},
  {id: '8', source: require('../Resource/image8.jpg')},
  {id: '9', source: require('../Resource/image9.jpg')},
  {id: '10', source: require('../Resource/image10.jpg')},
];

const Task31 = () => {
  const flatListRef = useRef<FlatList<ImageItem>>(null);
  const [images, setImages] = useState<ImageItem[]>(initialImages);
  const [modalVisible, setModalVisible] = useState(false);
  const [indexText, setIndexText] = useState('');

  const removeImage = (index: number) => {
    Alert.alert(
      'Remove Image',
      'Are you sure you want to remove this image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            setImages(currentImages =>
              currentImages.filter((_, imageIndex) => imageIndex !== index),
            );
          },
        },
      ],
    );
  };

  const repeatImage = (index: number) => {
    setImages(currentImages => {
      const selectedImage = currentImages[index];

      const repeatedImage: ImageItem = {
        id: `${Date.now()}-${Math.random()}`,
        source: selectedImage.source,
      };

      const updatedImages = [...currentImages];
      updatedImages.splice(index + 1, 0, repeatedImage);

      return updatedImages;
    });
  };

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
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          getItemLayout={(_, index) => ({
            length: 196,
            offset: 196 * index,
            index,
          })}
          renderItem={({item, index}) => (
            <View style={styles.imageContainer}>
              <Pressable
                onPress={() =>
                  Alert.alert(
                    'Selected Image',
                    `You have selected image : ${index}`,
                  )
                }>
                <Image source={item.source} style={styles.image} />
              </Pressable>

              <Pressable
                style={styles.repeatIcon}
                onPress={() => repeatImage(index)}>
                <Text style={styles.repeatText}>+</Text>
              </Pressable>

              <Pressable
                style={styles.removeIcon}
                onPress={() => removeImage(index)}>
                <Text style={styles.removeText}>×</Text>
              </Pressable>
            </View>
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
              placeholder={`0 - ${images.length - 1}`}
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
  imageContainer: {
    position: 'relative',
    marginHorizontal: 8,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
  },
  repeatIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  repeatText: {
    fontSize: 24,
    lineHeight: 26,
  },
  removeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeText: {
    fontSize: 24,
    lineHeight: 26,
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

export default Task31;