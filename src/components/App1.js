import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OderHistory from './OderHistory/OderHistory';

StatusBar.setHidden(true);

export default class App1 extends Component {
  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{
          name: 'Main'
        }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'Main': return <Main navigator={navigator} />;
            case 'ChangeInfo': return <ChangeInfo navigator={navigator} />;
            case 'Authentication': return <Authentication navigator={navigator} />;
            default: return <OderHistory navigator={navigator} />;
          }
        }}
        configureScene={route => {
          if(route.name === 'Authentication')
            return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;
            return NavigationExperimental.Navigator.SceneConfigs.FloatFromLeft;
        }}
      />
    );
  }
}
