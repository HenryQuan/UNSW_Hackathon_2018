import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

class StoreList extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
