import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet,
        Dimensions, Image, TouchableOpacity

} from 'react-native';
import sp1 from '../../../../media/temp/sp1.jpeg';
import BackList from '../../../../media/appIcon/backList.png';

const { width, height } = Dimensions.get('window');

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
    const { container, header, wrapper, iconStyle, titleStyle,
            productContainer, productInfo, productImage, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail,
     } = styles;
    return (
      <View style={container}>
        <ScrollView style={wrapper}>
            <View style={header}>
              <TouchableOpacity onPress={this.goBack.bind(this)}>
                  <Image source={BackList} style={iconStyle} />
              </TouchableOpacity>
              <Text style={titleStyle}>Party Dress</Text>
              <View style={{ width: 40 }} />
            </View>
            <View style={productContainer}>
              <Image style={productImage} source={sp1} />
              <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
                  <View style={lastRowInfo}>
                      <Text style={txtColor}>Color RolyalBlue</Text>
                      <View
                        style={{
                          backgroundColor: 'blue', height: 16, width: 16, borderRadius: 8
                        }}
                      />
                      <TouchableOpacity>
                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            </View>
            <View style={productContainer}>
              <Image style={productImage} source={sp1} />
              <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
                  <View style={lastRowInfo}>
                      <Text style={txtColor}>Color RolyalBlue</Text>
                      <View
                        style={{
                          backgroundColor: 'blue', height: 16, width: 16, borderRadius: 8
                        }}
                      />
                      <TouchableOpacity>
                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            </View>
            <View style={productContainer}>
              <Image style={productImage} source={sp1} />
              <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
                  <View style={lastRowInfo}>
                      <Text style={txtColor}>Color RolyalBlue</Text>
                      <View
                        style={{
                          backgroundColor: 'blue', height: 16, width: 16, borderRadius: 8
                        }}
                      />
                      <TouchableOpacity>
                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            </View>
            <View style={productContainer}>
              <Image style={productImage} source={sp1} />
              <View style={productInfo}>
                  <Text style={txtName}>Lace Sleeve Si</Text>
                  <Text style={txtPrice}>117$</Text>
                  <Text style={txtMaterial}>Material silk</Text>
                  <View style={lastRowInfo}>
                      <Text style={txtColor}>Color RolyalBlue</Text>
                      <View
                        style={{
                          backgroundColor: 'blue', height: 16, width: 16, borderRadius: 8
                        }}
                      />
                      <TouchableOpacity>
                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            </View>

        </ScrollView>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#DBDBDB',
  },
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    margin: 10,
    paddingHorizontal: 10,
  },
  header: {
    height: height / 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    width: 40,
    height: 40
  },
  titleStyle: {
    fontSize: 22,
    color: '#b800ab',
    fontFamily: 'Avenir',
  },
  productContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#e4e4e4',
  },
  productInfo: {
    justifyContent: 'space-between',
    marginLeft: 15,
    flex: 1,
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361,

  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtName: {
    fontFamily: 'Avenir',
    color: '#d1d1d1',
    fontSize: 23,
    fontWeight: '400',
  },
  txtPrice: {
    color: '#b800ab',
    fontFamily: 'Avenir',
  },
  txtMaterial: {
    fontFamily: 'Avenir',
  },
  txtColor: {
    fontFamily: 'Avenir',
  },
  txtShowDetail: {
    fontFamily: 'Avenir',
    color: '#b800ab',
    fontSize: 11,
  }
});
