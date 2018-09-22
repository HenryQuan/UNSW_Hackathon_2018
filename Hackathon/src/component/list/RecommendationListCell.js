import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { QuickTouchable } from '../common/QuickTouchable';

export default class RecommendationListCell extends Component {
  render() {
    console.log(this.props.data);
    const { mainView, subView, mainTitle } = styles;
    const { avatar, title, distance, description, rating, price } = this.props.data;
    return (
      <QuickTouchable style={mainView}>
        <Avatar large rounded title={avatar} />
        <View>
          <View style={subView}>
            <Text>{title}</Text>
            <Text>{distance + ' km'}</Text>
            <Text>{price + '$ monthly'}</Text>
          </View>
          <View style={subView}>
            
          </View>
        </View>
      </QuickTouchable>
    )
  };
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1, padding: 16,
    flexDirection: 'row',
  },
  subView: {
    width: 60,
    flex: 1,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '300',
  }
});
