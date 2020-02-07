import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title } from './styles';

export default function Header({ navigation, title }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="chevron-left" size={38} color="#02203c" />
      </TouchableOpacity>

      <Title>{title}</Title>

      <StatusBar barStyle="dark-content" />
    </Container>
  );
}
