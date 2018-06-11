import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Main extends Component {
  gotoAuthentication() {
    const navigator = this.props.navigator;
    navigator.push({ name: 'Authentication' });
  }
  gotoChangeInfo() {
    const navigator = this.props.navigator;
    navigator.push({ name: 'ChangeInfo' });
  }
  gotoOderHistory() {
    const navigator = this.props.navigator;
    navigator.push({ name: 'OderHistory' });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
          <Text>Go to Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
          <Text>Go to ChangeInfo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotoOderHistory.bind(this)}>
          <Text>Go to OderHistory</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  }
});
