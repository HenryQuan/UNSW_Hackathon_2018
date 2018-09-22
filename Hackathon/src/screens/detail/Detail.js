import React, { Component } from 'react';
import {loginTheme} from '../../constants/colour';
import { View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {RecommendationList} from '../../component'


      
class Detail extends Component {
    render(){
        //const {avatar,title,rating,description,distance,price} = this.props.data
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
            <View style={{height:100}}>
          <View style={styles.subView}>
            <Text style={styles.title}>title</Text>
            <Text>       </Text>
            <Text style={styles.rating}>rating</Text>
          </View>
          <Text style={styles.subtitle}>name</Text>
          </View>
            <View style={{height:250}}>
    
            <Text style={styles.text}>describe</Text>
            <Text style={styles.subtitle}>AvaibleTime:</Text>
            <Text style={styles.subtitle}>Location: </Text>
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
    subView: {
      flex: 1,
      flexDirection: 'row',
      padding:10
    },
    title: {
      color: '#0B3861',
      fontSize: 40,
      fontWeight: 'bold',
    },
    describe: {
      color: '#707070',
      fontSize: 25,
      fontWeight: 'bold',
    },
    text: {
      color: '#3C3C3C',
      fontSize: 25,

    },
    subtitle: {
      color: '#0B3861',
      fontSize: 25,
      fontWeight: 'bold',
    },
    rating: {
      color: '#FFBF00',
      fontSize: 25,

    }
  })

export { Detail }