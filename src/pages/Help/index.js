/* eslint-disable react/prop-types */
import React from 'react';

import Background from '~/components/Background';

import { Container } from './styles';

export default function Help() {
  return (
    <Background>
      <Container></Container>
    </Background>
  );
}

Help.navigationOptions = {
  headerShown: true,
};
