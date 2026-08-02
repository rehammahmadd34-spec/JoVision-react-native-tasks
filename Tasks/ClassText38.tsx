import React, {Component} from 'react';
import {Text} from 'react-native';
import {TextContext38} from './TextContext38';

class ClassText38 extends Component {
  static contextType = TextContext38;

  render() {
    const context = this.context as React.ContextType<typeof TextContext38>;

    return <Text style={{fontSize: 20}}>{context.text}</Text>;
  }
}

export default ClassText38;