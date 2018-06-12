import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Little from '../../../../media/temp/little.jpg';
import Maxi from '../../../../media/temp/maxi.jpg';
import Midi from '../../../../media/temp/midi.jpg';
import Mini from '../../../../media/temp/mini.jpg';
import Party from '../../../../media/temp/party.jpg';


const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
  render() {
    const { wrapper, textStyle, imageStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={textStyle}>LIST OF COLLECTION</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Swiper>
              <Image source={Little} style={imageStyle} />
              <Image source={Maxi} style={imageStyle} />
              <Image source={Midi} style={imageStyle} />
              <Image source={Mini} style={imageStyle} />
              <Image source={Party} style={imageStyle} />
          </Swiper>
        </View>


      </View>
    );
  }
}
//bannerImage: 933 X 465
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.32,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 20,
    color: '#989898',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth
  }
});
