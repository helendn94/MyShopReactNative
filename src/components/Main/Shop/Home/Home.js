import React, { Component } from 'react';
import { View } from 'react-native';
import Collection from './Collection';
import Category from './Category';

class Home extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#BDBDBD', flex: 1 }}>
        <Collection />
        <Category />
      </View>
    );
  }
}

export default Home;
