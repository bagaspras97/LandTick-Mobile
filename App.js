/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FrontPage from './android/app/Components/FrontPage';
import Home from './android/app/Components/Home';
import MyTicket from './android/app/Components/MyTicket';
import Payment from './android/app/Components/Payment';

class App extends Component {
  render() {
    return (
      <>
        {/* <Dashboard /> */}
        {/* <Home /> */}
        {/* <Payment /> */}
      </>
    );
  }
}

const Router = createStackNavigator(
  {
    FrontPage: {
      screen: FrontPage,
    },
    Home: {
      screen: Home,
    },
    MyTicket: {
      screen: MyTicket,
    },
    Payment: {
      screen: Payment,
    },
  },
  {initialRouteName: 'FrontPage'},
);

export default createAppContainer(Router);
