/* eslint-disable react/prop-types */
import React from 'react';
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  OwnBox,
  OwnSymbol,
  OwnText,
  LogOutButton,
  LogOutText,
  BuyButton,
  BuyText,
  MenuOptions,
  Option,
  Left,
  OptionText,
  CopyrightWarning,
} from './styles';

export default function Menu({ navigation }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <OwnBox>
        <OwnSymbol />
        <OwnText>You don&apos;t own AlgoExpert</OwnText>
      </OwnBox>

      <MenuOptions>
        <Option onPress={() => navigation.navigate('Help')}>
          <Left>
            <MaterialIcons
              name="help-outline"
              size={24}
              color="rgba(255, 255, 255, 0.8)"
            />
            <OptionText>Help</OptionText>
          </Left>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Option>

        <Option>
          <Left>
            <MaterialIcons
              name="person-outline"
              size={24}
              color="rgba(255, 255, 255, 0.8)"
            />
            <OptionText>Profile</OptionText>
          </Left>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Option>

        <Option>
          <Left>
            <MaterialCommunityIcons
              name="settings-outline"
              size={24}
              color="rgba(255, 255, 255, 0.8)"
            />
            <OptionText>Settings</OptionText>
          </Left>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Option>

        <Option onPress={() => navigation.navigate('History')}>
          <Left>
            <MaterialIcons
              name="history"
              size={24}
              color="rgba(255, 255, 255, 0.8)"
            />
            <OptionText>History</OptionText>
          </Left>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Option>

        <Option onPress={() => navigation.navigate('Tips')}>
          <Left>
            <MaterialCommunityIcons
              name="lightbulb-on-outline"
              size={24}
              color="rgba(255, 255, 255, 0.8)"
            />
            <OptionText>Tips & Tricks</OptionText>
          </Left>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Option>
      </MenuOptions>

      <BuyButton onPress={() => navigation.navigate('Payment')}>
        <MaterialCommunityIcons
          name="credit-card-multiple"
          color="rgba(255, 255, 255, 0.8)"
          size={26}
          style={{
            transform: [
              {
                rotate: '-15deg',
              },
            ],
          }}
        />
        <BuyText>Buy AlgoExpert</BuyText>
      </BuyButton>

      <LogOutButton onPress={() => dispatch(signOut())}>
        <Feather name="log-out" color="rgba(255, 255, 255, 0.8)" size={26} />
        <LogOutText>Log Out</LogOutText>
      </LogOutButton>

      <CopyrightWarning>
        Copyright &copy; 2020 AlgoExpert, LLC.{'\n'}All rights reserved.
      </CopyrightWarning>
    </Container>
  );
}
