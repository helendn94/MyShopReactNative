import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ListProduct extends Component {
  goBack() {
    const { navigator } = this.props;
    navigator.pop();
  }
  gotoProductDetail() {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCT_DETAIL' });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#de7325' }}>
        <TouchableOpacity onPress={this.goBack.bind(this)}>
          <Text>Back HomeView</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotoProductDetail.bind(this)}>
          <Text>go to ProductDetail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
