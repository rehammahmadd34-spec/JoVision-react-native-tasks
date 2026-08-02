import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import ComponentOne40 from './ComponentOne40';
import {store40} from './store40';

const TaskContent40 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      {visible && <ComponentOne40 />}

      <Button
        title={visible ? 'Hide' : 'Show'}
        onPress={() => setVisible(currentValue => !currentValue)}
      />
    </View>
  );
};

const Task40 = () => {
  return (
    <Provider store={store40}>
      <TaskContent40 />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task40;