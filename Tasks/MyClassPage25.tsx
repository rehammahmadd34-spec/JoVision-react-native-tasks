import React, {Component} from 'react';
import {Text, View} from 'react-native';

type State = {
  text: string;
};

class MyClassPage25 extends Component<{}, State> {
  state: State = {
    text: '',
  };

  updateText = (newText: string) => {
    this.setState({text: newText});
  };

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 24}}>{this.state.text}</Text>
      </View>
    );
  }
}

export default MyClassPage25;