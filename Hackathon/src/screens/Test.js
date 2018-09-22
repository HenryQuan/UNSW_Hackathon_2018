import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

class Test extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Button title="click me" onPress={() => Actions.main()}/>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { Test };
