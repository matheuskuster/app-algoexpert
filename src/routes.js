/* eslint-disable react/prop-types */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';

import Home from './pages/Home';
import Help from './pages/Help';
import Question from './pages/Question';
import Payment from './pages/Payment';
import Category from './pages/Category';
import Tips from './pages/Tips';
import QuestionsList from './pages/QuestionsList';
import History from './pages/History';
import Settings from './pages/Settings';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createStackNavigator(
          {
            Home,
            Help,
            Question,
            Payment,
            Category,
            Tips,
            QuestionsList,
            History,
            Settings,
          },
          { headerMode: 'none' }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );
