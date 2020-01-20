/* eslint-disable react/prop-types */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';

import Home from './pages/Home';
import Help from './pages/Help';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createSwitchNavigator({ Home, Help }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );
