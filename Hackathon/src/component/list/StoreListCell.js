import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class StoreListCell extends Component {
  render() {
    const { container } = styles;
    const { data } = this.props;
    const { avatar, title, distance, description, rating, price } = data;
    return (
      <View style={container}>
        <Text>Hello</Text>
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
