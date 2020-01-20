import React from 'react';
import { Animated } from 'react-native';

import {
  Container,
  TitleBox,
  Title,
  PlusMinus,
  Minus,
  QuestionsBox,
  Question,
  Answer,
} from './styles';

export default function FAQBox({ topic }) {
  const animatedPlusMinus = new Animated.Value(0);
  let opened = false;

  function handlePress() {
    opened = !opened;

    Animated.spring(animatedPlusMinus, {
      toValue: opened ? 1 : 0,
    }).start();
  }

  return (
    <Container>
      <TitleBox
        onPress={handlePress}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4,

          elevation: 8,
        }}
      >
        <Title>{topic.title}</Title>

        <PlusMinus>
          <Minus
            style={{
              transform: [
                {
                  translateX: 18,
                },
                {
                  rotate: animatedPlusMinus.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['90deg', '0deg'],
                  }),
                },
              ],
            }}
          />
          <Minus />
        </PlusMinus>
      </TitleBox>

      <QuestionsBox
        style={{
          maxHeight: animatedPlusMinus.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1000],
            extrapolate: 'clamp',
          }),
        }}
      >
        {topic.questions.map(question => (
          <>
            <Question>{question.question}</Question>
            <Answer>{question.answer}</Answer>
          </>
        ))}
      </QuestionsBox>
    </Container>
  );
}
