import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#BDBDBD', flex: 1 }}>
        <Collection />
        <Category navigator={this.props.navigator} />
        <TopProduct navigator={this.props.navigator} />
      </ScrollView>
    );
  }
}

export default Home;
