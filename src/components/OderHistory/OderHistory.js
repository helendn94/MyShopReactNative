import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class OderHistory extends Component {
  gobacktoMain() {
    const navigator = this.props.navigator;
    navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>OderHistory</Text>
        <TouchableOpacity onPress={this.gobacktoMain.bind(this)}>
          <Text>Go to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4B4B4',
  }
});
