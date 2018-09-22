import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import RecommendationListCell from './RecommendationListCell';

class RecommendationList extends Component {
  render() {
    const { container } = styles;
    return (
      <FlatList data={this.props.data} horizontal
        renderItem={({item}) => <RecommendationListCell data={item}/>} />
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export { RecommendationList };
