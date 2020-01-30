/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Difficulty, Name } from './styles';

export default function Question({ question, navigation }) {
  return (
    <Container
      color={question.info.color}
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
      {question.info.icon}

      <Name color={question.info.color}>{question.Name}</Name>

      <Difficulty color={question.info.color}>
        {question.info.difficulty}
      </Difficulty>
    </Container>
  );
}
