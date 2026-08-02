import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  View,
} from 'react-native';

const images = [
  require('../Resource/image1.jpg'),
  require('../Resource/image2.jpg'),
  require('../Resource/image3.jpg'),
];

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const chooseImage = () => {
    Alert.alert(
      'Choose Image',
      'Select an image',
      [
        {
          text: '1',
          onPress: () => setSelectedImage(0),
        },
        {
          text: '2',
          onPress: () => setSelectedImage(1),
        },
        {
          text: '3',
          onPress: () => setSelectedImage(2),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={images[selectedImage]}
        style={styles.image}
      />

      <Button
        title="Choose Image"
        onPress={chooseImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'cover',
  },
});

export default Task27;