import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Sp1 from '../../../../media/temp/sp1.jpeg';
import Sp2 from '../../../../media/temp/sp2.jpeg';
import Sp3 from '../../../../media/temp/sp3.jpeg';
import Sp4 from '../../../../media/temp/sp4.jpeg';

const { width } = Dimensions.get('window');
const ProductWidth = (width - 60) / 2;
const productImageHeight = (ProductWidth / 361) * 452;
export default class TopProduct extends Component {
  gotoProductDetail() {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCT_DETAIL' });
  }
  render() {
    const { container, titleContainer, title,
            body, productContainer, productImage,
            productName, productPrice,


    } = styles;
    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>TopProduct</Text>
        </View>
        <View style={body}>
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetail.bind(this)}>
            <Image source={Sp1} style={productImage} />
            <Text style={productName}>Name1</Text>
            <Text style={productPrice}>400$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetail.bind(this)}>
            <Image source={Sp2} style={productImage} />
            <Text style={productName}>Name1</Text>
            <Text style={productPrice}>300$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetail.bind(this)}>
            <Image source={Sp3} style={productImage} />
            <Text style={productName}>Name1</Text>
            <Text style={productPrice}>400$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetail.bind(this)}>
            <Image source={Sp4} style={productImage} />
            <Text style={productName}>Name1</Text>
            <Text style={productPrice}>300$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetail.bind(this)}>
            <Image source={Sp3} style={productImage} />
            <Text style={productName}>Name1</Text>
            <Text style={productPrice}>400$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={productContainer} onPress={this.gotoProductDetail.bind(this)}>
            <Image source={Sp4} style={productImage} />
            <Text style={productName}>Name1</Text>
            <Text style={productPrice}>300$</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
      margin: 10,
      shadowColor: '#2E272B',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    color: '#818181',
    fontSize: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  productContainer: {
    width: ProductWidth,
    shadowColor: '#2E272B',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    marginBottom: 8,
  },
  productImage: {
    width: ProductWidth,
    height: productImageHeight,
  },
  productName: {
    marginVertical: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#8e8e8e',
    fontSize: 20,
    fontWeight: '500',
  },
  productPrice: {
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#9e02b9',
    marginBottom: 5,
  }
});
