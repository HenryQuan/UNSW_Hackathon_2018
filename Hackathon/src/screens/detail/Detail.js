import React, { Component } from 'react';
import {loginTheme} from '../../constants/colour';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import {RecommendationList} from '../../component'
      
class Detail extends Component {
    render(){
      const { avatar,title,rating,description,distance,price } = this.props.data;
      const { location, available } = global.moreDetail;
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
          <ScrollView>
            <View style={styles.subView}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.rating}>{rating}</Text>
            </View>
            <View>
              <Text style={styles.subtitle}>{avatar}</Text>
              <Text style={styles.text}>{description}</Text>
              <Text style={styles.subtitle}>{available}</Text>
              <Text style={styles.subtitle}>{location} </Text>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={styles.subtitle}>Reviews:</Text>
              <Text style={styles.text}>{"comment1\ncomment2\ncomment3\ncomment4\ncomment5\ncomment6\ncomment7\ncomment8\ncomment9\n"}</Text>
            </View>
            <View>
              <RecommendationList data={global.storeData} />
            </View>
          </ScrollView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
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
      flexDirection: 'row', alignItems: 'center',
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