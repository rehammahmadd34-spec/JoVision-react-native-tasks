import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import ComponentOne39 from './ComponentOne39';
import {store39} from './store39';

const TaskContent39 = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      {visible && <ComponentOne39 />}

      <Button
        title={visible ? 'Hide' : 'Show'}
        onPress={() => setVisible(currentValue => !currentValue)}
      />
    </View>
  );
};

const Task39 = () => {
  return (
    <Provider store={store39}>
      <TaskContent39 />
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

export default Task39;