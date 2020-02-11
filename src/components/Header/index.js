import React from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, HeaderTop, Title, Description } from './styles';

export default function Header({ navigation, title, description, option }) {
  return (
    <Container>
      <HeaderTop>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={38} color="#02203c" />
        </TouchableOpacity>

        {option && (
          <TouchableOpacity onPress={option.onPress}>
            {option.icon}
          </TouchableOpacity>
        )}
      </HeaderTop>

      <Title>{title}</Title>
      {description && <Description>{description}</Description>}

      <StatusBar barStyle="dark-content" />
    </Container>
  );
}
