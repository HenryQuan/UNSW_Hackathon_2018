import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import StoreListCell from './StoreListCell';

class StoreList extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <FlatList
          data={global.storeData}
          renderItem={({item}) => <StoreListCell data={item}/>}
        />
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export { StoreList };
