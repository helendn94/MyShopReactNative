import React, { Component } from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import { Navigator } from 'react-native';
import CartView from './CardView';
import ProductDetail from '../ProductDetail/ProductDetail.js';

class Cart extends Component {
  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{ name: 'CARD_VIEW' }}
        renderScene={(route, navigator) => {
            switch (route.name) {
              case 'CARD_VIEW': return <CartView navigator={navigator} />;
              default: return <ProductDetail navigator={navigator} />;
            }
        }}
      />
    );
  }
}

export default Cart;
