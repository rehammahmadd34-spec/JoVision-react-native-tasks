import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Screen1 = ({navigation}: any) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{marginBottom: 20}}>Screen 1</Text>

    <Button
      title="Go to Screen 2"
      onPress={() => navigation.navigate('Two')}
    />
    <Button
      title="Go to Screen 3"
      onPress={() => navigation.navigate('Three')}
    />
    <Button
      title="Go to Screen 4"
      onPress={() => navigation.navigate('Four')}
    />
  </View>
);

const Screen2 = ({navigation}: any) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{marginBottom: 20}}>Screen 2</Text>

    <Button
      title="Go to Screen 1"
      onPress={() => navigation.navigate('One')}
    />
    <Button
      title="Go to Screen 3"
      onPress={() => navigation.navigate('Three')}
    />
    <Button
      title="Go to Screen 4"
      onPress={() => navigation.navigate('Four')}
    />
  </View>
);

const Screen3 = ({navigation}: any) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{marginBottom: 20}}>Screen 3</Text>

    <Button
      title="Go to Screen 1"
      onPress={() => navigation.navigate('One')}
    />
    <Button
      title="Go to Screen 2"
      onPress={() => navigation.navigate('Two')}
    />
    <Button
      title="Go to Screen 4"
      onPress={() => navigation.navigate('Four')}
    />
  </View>
);

const Screen4 = ({navigation}: any) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{marginBottom: 20}}>Screen 4</Text>

    <Button
      title="Go to Screen 1"
      onPress={() => navigation.navigate('One')}
    />
    <Button
      title="Go to Screen 2"
      onPress={() => navigation.navigate('Two')}
    />
    <Button
      title="Go to Screen 3"
      onPress={() => navigation.navigate('Three')}
    />
  </View>
);

const Task42 = () => {
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

export default Task42;