import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="chevron-left" size={38} color="#02203c" />
      </TouchableOpacity>

      <Title>FAQs</Title>

      <StatusBar barStyle="dark-content" />
    </Container>
  );
}
