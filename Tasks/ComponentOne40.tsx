import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState40} from './store40';
import {updateText} from './textSlice40';

const mapStateToProps = (state: RootState40) => ({
  text: state.text40.value,
});

const mapDispatchToProps = {
  updateText,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

class ComponentOne40 extends Component<Props> {
  render() {
    const {text, updateText} = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={updateText}
          placeholder="Enter text"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    width: 250,
    borderWidth: 1,
    padding: 10,
  },
});

export default connector(ComponentOne40);