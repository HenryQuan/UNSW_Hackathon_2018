import React, { Component } from 'react';
import {loginTheme} from '../../constants/colour';
import { View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';



      
class Detail extends Component {
    render(){
      return (
        <View style={{flex:1}}>
            <View style={{height:200}}>
            <Swiper style={styles.wrapper} showsButtons={true} autoplay>
                <View style={styles.slide1}>
                <Image source={require('../../img/1.jpg')}/>
                </View>
                <View style={styles.slide2}>
                <Image source={require('../../img/2.jpg')}/>
                </View>
                <View style={styles.slide3}>
                <Image source={require('../../img/3.jpg')}/>
                </View>
            </Swiper>
            </View>
            <View style={{height:180}}>
            <Text style={styles.title}>Title</Text>
            </View>
            <View style={{height:180}}>
            <Text>Body</Text>
            </View>
            <View style={{height:100}}>
            <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })

export { Detail }