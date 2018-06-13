import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,
  Image, TouchableOpacity, TextInput } from 'react-native';
import backWhite from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignIN: true };
  }
  SignIn() {
    this.setState({ isSignIN: true });
  }
  SignUp() {
    this.setState({ isSignIN: false });
  }
  gobacktoMain() {
    const navigator = this.props.navigator;
    navigator.pop();
  }
  render() {
    const { wrapper, row1, iconStyle,
      titleStyle, signInStyle, signUpStyle, controlStyle,
      inactiveStyle, activeStyle, InputStyle, bigButton,
      textSignInStyle
    } = styles;

    const SignInJSX = (
      <View>
        <TextInput style={InputStyle} placeholder="Enter your email" />
        <TextInput style={InputStyle} placeholder="Enter your password" />
        <TouchableOpacity style={bigButton}>
          <Text style={textSignInStyle}>Sign In Now</Text>
        </TouchableOpacity>
      </View>
    );
    const SignUpJSX = (
      <View>
        <TextInput style={InputStyle} placeholder="Enter your name" />
        <TextInput style={InputStyle} placeholder="Enter your email" />
        <TextInput style={InputStyle} placeholder="Enter your password" />
        <TextInput style={InputStyle} placeholder="Re-enter your password" />
        <TouchableOpacity style={bigButton}>
          <Text style={textSignInStyle}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
    );
    const { isSignIN } = this.state;
    const mainJSX = isSignIN ? SignInJSX : SignUpJSX;
    return (
      <View style={wrapper}>
        <View style={row1}>
            <TouchableOpacity onPress={this.gobacktoMain.bind(this)}>
              <Image source={backWhite} style={iconStyle} />
            </TouchableOpacity>
            <Text style={titleStyle} >Wearing a Dress</Text>
            <Image source={icLogo} style={iconStyle} />
        </View>
        {mainJSX}
        <View style={controlStyle}>
          <TouchableOpacity style={signInStyle} onPress={this.SignIn.bind(this)}>
            <Text style={isSignIN ? activeStyle : inactiveStyle} >SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyle} onPress={this.SignUp.bind(this)}>
            <Text style={!isSignIN ? activeStyle : inactiveStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#34B089',
    padding: 20,
    justifyContent: 'space-between',
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  iconStyle: { width: 30, height: 30 },
  titleStyle: { color: '#fff', fontFamily: 'Avenir', fontSize: 30 },
  controlStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',

  },
  inactiveStyle: {
    color: '#D7D7D7',
    fontSize: 15,
  },
  activeStyle: {
    color: '#34B089',
    fontSize: 15,

  },
  signInStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    marginRight: 1
  },
  signUpStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    marginRight: 1
  },
  InputStyle: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingLeft: 20,
    fontFamily: 'Avenir',
    fontSize: 15,
    marginBottom: 10,
  },
  bigButton: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
  },
  textSignInStyle: {
    fontSize: 20,
    color: '#34B089',
    fontFamily: 'Avenir',
  }
});
