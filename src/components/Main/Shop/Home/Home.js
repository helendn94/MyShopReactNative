import React, { Component } from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import { Navigator } from 'react-native';
import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail.js';
import ListProduct from '../ListProduct/ListProduct.js';


class Home extends Component {
  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{ name: 'HOME_VIEW' }}
        renderScene={(route, navigator) => {
            switch (route.name) {
              case 'HOME_VIEW': return <HomeView navigator={navigator} />;
              case 'LIST_PRODUCT': return <ListProduct navigator={navigator} />;
              default: return <ProductDetail navigator={navigator} />;
            }
        }}
      />
    );
  }
}

export default Home;
