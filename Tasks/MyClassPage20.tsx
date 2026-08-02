import React, {Component} from 'react';
import {Text, View} from 'react-native';

class MyClassPage20 extends Component {
  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 24}}>Reham</Text>
      </View>
    );
  }
}

export default MyClassPage20;