import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import map from '../../../../media/appIcon/map.png';
import location from '../../../../media/appIcon/location.png';
import phone from '../../../../media/appIcon/phone.png';
import mail from '../../../../media/appIcon/mail.png';
import message from '../../../../media/appIcon/message.png';
const { width, height } = Dimensions.get('window');

class ContactView extends Component {
  render() {
    const { wrapper, mapContainer, Imagestyle,
            InfoContainer, rowInfoContainer, iconStyle,
            textStyle,
    } = styles;
    return (
      <View style={wrapper}>
        <View style={mapContainer}>
          <Image source={map} style={Imagestyle} />
        </View>
        <View style={InfoContainer}>
          <View style={rowInfoContainer}>
            <Image source={location} style={iconStyle} />
            <Text style={textStyle}>299 Nui Thanh, Hai Chau, Da Nang</Text>
          </View>
          <View style={rowInfoContainer}>
            <Image source={phone} style={iconStyle} />
            <Text style={textStyle}>01699215020</Text>
          </View>
          <View style={rowInfoContainer}>
            <Image source={mail} style={iconStyle} />
            <Text style={textStyle}>hoangnhi.cit@gmail.com</Text>
          </View>
          <View style={rowInfoContainer}>
            <Image source={message} style={iconStyle} />
            <Text style={textStyle}>01699215020</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  mapContainer: {
    width: width - 20,
    height: height / 3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  Imagestyle: {
    width: undefined,
    flex: 1,
    alignSelf: 'stretch'
  },
  InfoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  rowInfoContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 20,
    borderBottomWidth: 1.5,
    margin: 10,
    borderColor: '#cbcbcb',
    alignItems: 'center',
  },
  iconStyle: {
    width: 30,
    height: 30,

  },
  textStyle: {
    color: '#ef01f4',
    fontFamily: 'Avenir',
    fontSize: 15,
  }
});
export default ContactView;
