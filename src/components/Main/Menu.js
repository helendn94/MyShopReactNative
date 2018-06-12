import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import ProfileIcon from '../../media/temp/profile.png';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogedIn: true };
  }
  gotoAuthentication() {
    const navigator = this.props.navigator;
    navigator.push({ name: 'Authentication' });
  }
  gotoChangeInfo() {
    const navigator = this.props.navigator;
    navigator.push({ name: 'ChangeInfo' });
  }
  gotoOderHistory() {
    const navigator = this.props.navigator;
    navigator.push({ name: 'OderHistory' });
  }
  render() {
    const { container, profile, btnStyle,
            btnText, btnSignInStyle, btnTextSignIn, loginCotainer, username
    } = styles;
    const LogoutJSX = (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={btnStyle}>
          <Text style={btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
    const LoginJSX = (
      <View style={loginCotainer}>
        <Text style={username}>
        Hoang Nhi
        </Text>
        <View>
            <TouchableOpacity style={btnSignInStyle}>
                <Text style={btnTextSignIn}>Oder History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnSignInStyle}>
                <Text style={btnTextSignIn}>Change Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnSignInStyle}>
                <Text style={btnTextSignIn}>Sign Out</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
    const mainJSX = this.state.isLogedIn ? LoginJSX : LogoutJSX;
    return (
      <View style={container}>
        <Image source={ProfileIcon} style={profile} />
        { mainJSX }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34B089',
    flex: 1,
    borderRightWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 30,
  },
  btnStyle: {
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 60,
  },
  btnText: {
    color: '#34B089',
    fontSize: 20,
  },
  btnSignInStyle: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: 200,
    margin: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  btnTextSignIn: {
    color: '#34B089',
    fontSize: 16,
  },
  loginCotainer: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    color: '#fff', fontFamily: 'Avenir', fontSize: 17, marginBottom: 70
  },

});
export default Menu;
