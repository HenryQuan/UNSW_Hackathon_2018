import React, { Component } from 'react';
import {loginTheme} from '../../constants/colour';
import { View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {RecommendationList} from '../../component'


      
class Detail extends Component {
    render(){
        //const {} = this.props.data
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
            <View style={{height:150}}>
            <Text>
                Title: 
            </Text>
            <Text>
                Rating: 
            </Text>
            <Text>
                Price: 
            </Text>
            <Text>
                AvaibleTime:
            </Text>
            </View>
            <View style={{height:210}}>
            <Text>
                Name: 
            </Text>
            <Text>
                Description: 
            </Text>
            <Text>
                Location: 
            </Text>
            </View>
            <View style={{height:100}}>
            <RecommendationList data={global.storeData} />
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
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  })

export { Detail }