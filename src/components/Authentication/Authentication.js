import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Authentication extends Component {
  gobacktoMain() {
    const navigator = this.props.navigator;
    navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Authentication</Text>
        <TouchableOpacity onPress={this.gobacktoMain.bind(this)}>
          <Text>Back Main</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF5C9',
  }
})
