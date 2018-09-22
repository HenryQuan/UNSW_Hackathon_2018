import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class StoreListCell extends Component {
  render() {
    console.log(this.props.data);
    const { container } = styles;
    const { avatar, title, distance, description, rating, price } = this.props.data;
    return (
      <Text>Hello</Text>
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
