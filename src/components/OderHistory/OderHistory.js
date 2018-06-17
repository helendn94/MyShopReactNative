import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,
          Image, statusStyle, totalStyle

} from 'react-native';

import Backs from '../../media/appIcon/backs.png';

const { width, height } = Dimensions.get('window');

export default class OderHistory extends Component {
  gobacktoMain() {
    const navigator = this.props.navigator;
    navigator.pop();
  }
  render() {
    const { wrapper, row1, textStyle, iconStyle,
            container, containerInfo, ViewStyle,
            txtStyle, MaStyle, dateStyle, pendingStyle, priceStyle
     } = styles;
    return (
      <View style={wrapper}>
          <View style={row1}>
            <View style={{ width: 30 }} />
            <Text style={textStyle}>Oder History</Text>
            <TouchableOpacity onPress={this.gobacktoMain.bind(this)}>
              <Image source={Backs} style={iconStyle} />
            </TouchableOpacity>
          </View>
          <View style={container}>
              <View style={containerInfo}>
                <View style={ViewStyle}>
                  <Text style={txtStyle}>Oder id:</Text>
                  <Text style={MaStyle}>ORD15</Text>
                </View>
                <View style={ViewStyle}>
                  <Text style={txtStyle}>OderTime:</Text>
                  <Text style={dateStyle}>2017-04-19 08:30:13</Text>
                </View>
                <View style={ViewStyle}>
                  <Text style={txtStyle}>Status:</Text>
                  <Text style={pendingStyle}>Pending</Text>
                </View>
                <View style={ViewStyle}>
                  <Text style={txtStyle}>Total:</Text>
                  <Text style={priceStyle}>203$</Text>
                </View>
              </View>
              <View style={{ height: 20 }} />
              <View style={containerInfo}>
                <View style={ViewStyle}>
                  <Text style={txtStyle}>Oder id:</Text>
                  <Text style={MaStyle}>ORD15</Text>
                </View>
                <View style={ViewStyle}>
                  <Text style={txtStyle}>OderTime:</Text>
                  <Text style={dateStyle}>2017-04-19 08:30:13</Text>
                </View>
                <View style={ViewStyle}>
                  <Text style={txtStyle}>Status:</Text>
                  <Text style={pendingStyle}>Pending</Text>
                </View>
                <View style={ViewStyle}>
                  <Text style={txtStyle}>Total:</Text>
                  <Text style={priceStyle}>203$</Text>
                </View>
              </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  row1: {
    height: height / 10,
    backgroundColor: '#34B089',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,

  },
  textStyle: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Avenir',
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    padding: 10,
  },
  containerInfo: {
    backgroundColor: '#fff',
    padding: 10,
    height: height / 4.5,
    flexDirection: 'column',
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.2,
    justifyContent: 'space-between',
  },
  ViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtStyle: {
    color: '#ababab',
    fontSize: 16,
    fontWeight: '800',
  },
  MaStyle: {
    color: '#34B089',
    fontSize: 16,
  },
  dateStyle: {
    color: '#fa00ff',
    fontSize: 16,
  },
  pendingStyle: {
    color: '#34B089',
    fontSize: 16,
  },
  priceStyle: {
    color: '#fa00ff',
    fontWeight: '600',
    fontSize: 16,
  }

});
