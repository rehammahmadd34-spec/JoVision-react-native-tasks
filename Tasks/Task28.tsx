import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
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

const Task28 = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 180,
    marginHorizontal: 8,
    resizeMode: 'cover',
  },
});

export default Task28;