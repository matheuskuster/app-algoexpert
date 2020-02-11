/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '~/util/themes';
import categoryIcon from '~/util/category';

import { Container, Difficulty, Name } from './styles';

export default function Question({ question, navigation }) {
  const theme = themes[question.Difficulty - 1];
  const { type: Icon, name } = categoryIcon(question.Category);

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={
          question.Available && {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4.65,

            elevation: 8,
          }
        }
        disabled={!question.Available}
        onPress={() => navigation.navigate('Question', { question })}
      >
        <Icon
          name={name}
          size={30}
          color={theme.secondary}
          style={{
            marginLeft: 20,
            marginTop: 20,
          }}
        />

        <Name>{question.Name}</Name>

        <Difficulty>{question.formattedDifficulty}</Difficulty>
      </Container>
    </ThemeProvider>
  );
}
