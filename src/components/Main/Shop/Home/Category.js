import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import Little from '../../../../media/temp/little.jpg';
import Maxi from '../../../../media/temp/maxi.jpg';
import Midi from '../../../../media/temp/midi.jpg';
import Mini from '../../../../media/temp/mini.jpg';
import Party from '../../../../media/temp/party.jpg';


const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
  render() {
    const { wrapper, textStyle, imageStyle, cateTitle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center', paddingTop: 5 }}>
            <Text style={textStyle}>LIST OF COLLECTION</Text>
        </View>
        <View style={{ flex: 3.5 }}>
          <Swiper showPagination width={imageWidth} height={imageHeight} >
              <ImageBackground source={Little} style={imageStyle}>
                <Text style={cateTitle}>Little Dress</Text>
              </ImageBackground>
              <ImageBackground source={Maxi} style={imageStyle}>
                <Text style={cateTitle}>Maxi Dress</Text>
              </ImageBackground>
              <ImageBackground source={Midi} style={imageStyle}>
                <Text style={cateTitle}>Midi Dress</Text>
              </ImageBackground>
              <ImageBackground source={Mini} style={imageStyle}>
                <Text style={cateTitle}>Mini Dress</Text>
              </ImageBackground>
              <ImageBackground source={Party} style={imageStyle}>
                <Text style={cateTitle}>Party Dress</Text>
              </ImageBackground>
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
    height: height * 0.35,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
    color: '#989898',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cateTitle: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#838383'
  }
});
