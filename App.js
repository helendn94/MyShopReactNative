import React from 'react';
import { AppRegistry } from 'react-native';
import App1 from './src/components/App1.js';

export default class App extends React.Component {
  render() {
    return (
      <App1 />
    );
  }
}

AppRegistry.registerComponent('MyShop', () => App);
