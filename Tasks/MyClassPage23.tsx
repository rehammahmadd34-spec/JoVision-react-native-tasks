import React, {Component} from 'react';
import {TextInput, View} from 'react-native';

type Props = {
  text: string;
  setText: (value: string) => void;
};

class MyClassPage23 extends Component<Props> {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <TextInput
          style={{
            borderWidth: 1,
            width: 250,
            padding: 10,
          }}
          placeholder="Enter your name"
          value={this.props.text}
          onChangeText={this.props.setText}
        />
      </View>
    );
  }
}

export default MyClassPage23;