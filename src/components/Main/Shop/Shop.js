import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Header from './Header';

import HomeIconS from '../../../media/appIcon/home.png';
import HomeIcon from '../../../media/appIcon/home0.png';
import CartIconS from '../../../media/appIcon/cart.png';
import CartIcon from '../../../media/appIcon/cart0.png';
import SearchIconS from '../../../media/appIcon/search.png';
import SearchIcon from '../../../media/appIcon/search0.png';
import ContactIconS from '../../../media/appIcon/contact.png';
import ContactIcon from '../../../media/appIcon/contact0.png';


class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  openMenu() {
    const { open } = this.props;
    open();
  }
  render() {
    const { iconStyle } = styles;
    return (
        <View style={{ flex: 1 }}>
          <Header onOpen={this.openMenu.bind(this)} />
          <TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              onPress={() => this.setState({ selectedTab: 'home' })}
              renderIcon={() => <Image source={HomeIcon} style={iconStyle} />}
              renderSelectedIcon={() => <Image source={HomeIconS} style={iconStyle} />}
              selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            >
              <Home />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'contact'}
              title="Contact"
              onPress={() => this.setState({ selectedTab: 'contact' })}
              renderIcon={() => <Image source={ContactIcon} style={iconStyle} />}
              renderSelectedIcon={() => <Image source={ContactIconS} style={iconStyle} />}
              badgeText="1"
              selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            >
              <Contact />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'search'}
              title="Search"
              onPress={() => this.setState({ selectedTab: 'search' })}
              renderIcon={() => <Image source={SearchIcon} style={iconStyle} />}
              renderSelectedIcon={() => <Image source={SearchIconS} style={iconStyle} />}
              selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            >
              <Search />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'cart'}
              title="Cart"
              onPress={() => this.setState({ selectedTab: 'cart' })}
              renderIcon={() => <Image source={CartIcon} style={iconStyle} />}
              renderSelectedIcon={() => <Image source={CartIconS} style={iconStyle} />}
              selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            >
              <Cart />
            </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconStyle: {
    width: 20, height: 20
  },

});
export default Shop;
