/* eslint-disable react/prop-types */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';

import Home from './pages/Home';
import Help from './pages/Help';
import Question from './pages/Question';
import Payment from './pages/Payment';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createSwitchNavigator({ Home, Help, Question, Payment }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );
