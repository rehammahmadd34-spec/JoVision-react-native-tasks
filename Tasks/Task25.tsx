import React, {createRef} from 'react';
import {TextInput, View} from 'react-native';
import MyClassPage25 from './MyClassPage25';

class Task25 extends React.Component {
  classPageRef = createRef<MyClassPage25>();

  handleTextChange = (newText: string) => {
    this.classPageRef.current?.updateText(newText);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            borderWidth: 1,
            width: 250,
            padding: 10,
          }}
          placeholder="Enter your name"
          onChangeText={this.handleTextChange}
        />

        <MyClassPage25 ref={this.classPageRef} />
      </View>
    );
  }
}

export default Task25;