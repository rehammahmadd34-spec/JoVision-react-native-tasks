import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Screen1 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Screen 1</Text>
  </View>
);

const Screen2 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Screen 2</Text>
  </View>
);

const Screen3 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Screen 3</Text>
  </View>
);

const Screen4 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Screen 4</Text>
  </View>
);

const Task41 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="One" component={Screen1} />
        <Tab.Screen name="Two" component={Screen2} />
        <Tab.Screen name="Three" component={Screen3} />
        <Tab.Screen name="Four" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Task41;