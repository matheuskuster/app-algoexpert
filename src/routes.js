/* eslint-disable react/prop-types */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from '~/components/Header';

import SignIn from './pages/SignIn';

import Home from './pages/Home';
import Help from './pages/Help';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createStackNavigator(
          { Home, Help },
          {
            defaultNavigationOptions: {
              header: ({ navigation }) => <Header navigation={navigation} />,
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );
