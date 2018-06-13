import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SearchView extends Component {
  gotoDetail() {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCT_DETAIL' });
  }
  render() {
    return (
      <View style={{ backgroundColor: '#b254fb', flex: 1 }}>
        <Text>SearchView</Text>
        <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
          <Text>gotoDetail</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default SearchView;
