import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { StoreList } from '../../component/list/StoreList';
import { StoreListCell } from '../../component/list/StoreListCell';
class NeabyStore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StoreListCell />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export { NeabyStore };