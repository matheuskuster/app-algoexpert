import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';

import Home from './pages/Home';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      { SignIn, App: createSwitchNavigator({ Home }) },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );
