import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Menu extends Component {
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
    return (
      <View style={{ backgroundColor: '#00FFFF', flex: 1 }}>
          <Text>Component menu</Text>
          <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
            <Text>Go to Authentication</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
            <Text>Go to ChangeInfo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoOderHistory.bind(this)}>
            <Text>Go to OderHistory</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
export default Menu;
