
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/form';
import Asteroid from './screens/Asteroid';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Asteroid: Asteroid,
});

const AppContainer = createAppContainer(AppNavigator);
