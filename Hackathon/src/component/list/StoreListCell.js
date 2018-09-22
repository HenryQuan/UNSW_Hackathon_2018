import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { QuickTouchable } from '../common/QuickTouchable';

export default class StoreListCell extends Component {
  render() {
    console.log(this.props.data);
    const { mainView, subView, mainTitle } = styles;
    const { avatar, title, distance, description, rating, price } = this.props.data;
    return (
      <QuickTouchable style={mainView}>
        <Avatar large rounded title={avatar} />
        <View>
          <View style={subView}>
            <Text style={mainTitle}>{title}</Text>
            <Text>{rating}</Text>
          </View>
          <Text>{description}</Text>
          <View style={subView}>
            <Text>{distance + ' km'}</Text>
            <Text>{price + '$ per month'}</Text>
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
    flex: 1,
    flexDirection: 'row',
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '300',
  }
});