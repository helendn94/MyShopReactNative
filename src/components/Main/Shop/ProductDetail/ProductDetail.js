import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ProductDetail extends Component {
  goback() {
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#b0d95d' }}>
        <TouchableOpacity onPress={this.goback.bind(this)}>
          <Text>go back HomeView</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
