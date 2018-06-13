import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Little from '../../../../media/temp/little.jpg';
import Maxi from '../../../../media/temp/maxi.jpg';
import Midi from '../../../../media/temp/midi.jpg';
import Mini from '../../../../media/temp/mini.jpg';
import Party from '../../../../media/temp/party.jpg';


const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
  gotoListProduct() {
    const { navigator } = this.props;
    navigator.push({ name: 'LIST_PRODUCT' });
  }
  render() {
    const { wrapper, textStyle, imageStyle, cateTitle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'center', height: 50 }}>
            <Text style={textStyle}>LIST OF COLLECTION</Text>
        </View>
        <View style={{ flex: 3.5 }}>
          <Swiper showPagination width={imageWidth} height={imageHeight} >
              <TouchableOpacity onPress={this.gotoListProduct.bind(this)}>
                  <ImageBackground source={Little} style={imageStyle}>
                    <Text style={cateTitle}>Little Dress</Text>
                  </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
                  <ImageBackground source={Maxi} style={imageStyle}>
                    <Text style={cateTitle}>Maxi Dress</Text>
                  </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity>
                  <ImageBackground source={Midi} style={imageStyle}>
                    <Text style={cateTitle}>Midi Dress</Text>
                  </ImageBackground>
              </TouchableOpacity>
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
    width: width - 20,
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
