import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import FunctionInput38 from './FunctionInput38';
import {TextProvider38} from './TextContext38';

const Task38 = () => {
  return (
    <TextProvider38>
      <ScrollView contentContainerStyle={styles.container}>
        <FunctionInput38 />
        <FunctionInput38 />
        <FunctionInput38 />
        <FunctionInput38 />
      </ScrollView>
    </TextProvider38>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Task38;