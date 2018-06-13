import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class CartView extends Component {
  gotoDetail() {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCT_DETAIL' });
  }
  render() {
    return (
      <View style={{ backgroundColor: '#8888FF', flex: 1 }}>
        <Text>Card View</Text>
        <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
          <Text>go to Detailt</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CartView;
