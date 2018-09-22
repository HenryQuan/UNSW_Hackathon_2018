import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import StoreListCell from './StoreListCell';

class StoreList extends Component {
  render() {
    const { container } = styles;
    return (
      <FlatList data={this.props.data}
        renderItem={({item}) => <StoreListCell data={item}/>} />
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export { StoreList };