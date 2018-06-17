import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions,
          TextInput, ScrollView
} from 'react-native';
import backs from '../../media/appIcon/backs.png';
import profile from '../../media/temp/profile.png';

const { width, height } = Dimensions.get('window');
export default class ChangeInfo extends Component {
  gobacktoMain() {
    const navigator = this.props.navigator;
    navigator.pop();
  }
  render() {
    const { wrapper, row1, iconStyle, titleStyle, container, InputStyle,
            btnStyle, infobtnStyle, profileStyle }
    = styles;
    return (
      <View style={wrapper}>
          <View style={row1}>
              <View style={{ width: 30 }} />
              <Text style={titleStyle}>User Information</Text>
              <TouchableOpacity onPress={this.gobacktoMain.bind(this)}>
                  <Image source={backs} style={iconStyle} />
              </TouchableOpacity>
          </View>
          <ScrollView style={container}>
              <View style={{ alignItems: 'center' }} >
                  <Image source={profile} style={profileStyle} />
              </View>
              <TextInput
                  placeholder="Nguyen Hoang Nhi" style={InputStyle}
              />
              <TextInput placeholder="299 Núi Thành" style={InputStyle} />
              <TextInput placeholder="01699215020" style={InputStyle} />
              <TouchableOpacity style={btnStyle}>
                  <Text style={infobtnStyle}>CHANGE YOUR INFORMATION</Text>
              </TouchableOpacity>
          </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  row1: {
    height: height / 10,
    backgroundColor: '#34B089',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  titleStyle: {
    color: '#fff',
    fontSize: 23,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    margin: 20,
  },
  profileStyle: {
    borderRadius: 75,
    borderColor: '#34B089',
    borderWidth: 3,
    width: 150,
    height: 150,
    backgroundColor: '#34B089',
    marginBottom: 20,

  },
  InputStyle: {
    backgroundColor: '#fff',
    height: height / 14,
    borderColor: '#34B089',
    borderWidth: 2,
    borderRadius: 70,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  btnStyle: {
    height: height / 14,
    backgroundColor: '#34B089',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
  },
  infobtnStyle: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 18,
  }
});
