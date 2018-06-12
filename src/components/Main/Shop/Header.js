import React, { Component } from 'react';
import
  { View, Text, Image, TouchableOpacity, Dimensions, TextInput, StyleSheet }
from 'react-native';
import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

export default class Header extends Component {
  render() {
    const { wrapper, row1, InputStyle, iconStyle, titleStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={row1}>
            <TouchableOpacity onPress={this.props.onOpen}>
              <Image source={icMenu} style={iconStyle} />
            </TouchableOpacity>
            <Text style={titleStyle} >Wearing a Dress</Text>
            <Image source={icLogo} style={iconStyle} />
        </View>
        <TextInput style={InputStyle} placeholder="What do you want to buy" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper:
  {
    height: height / 8,
    backgroundColor: '#34B089',
    padding: 10,
    justifyContent: 'space-around'
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between' },
  InputStyle: { height: height / 23, backgroundColor: '#fff', paddingLeft: 10 },
  iconStyle: { width: 25, height: 25 },
  titleStyle: { color: '#fff', fontFamily: 'Avenir', fontSize: 20 },

});
