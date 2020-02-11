import React from 'react';
import { Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components';

import {
  Container,
  Header,
  Title,
  OpenButton,
  Content,
  Question,
  Name,
  Bottom,
  Length,
  AnimatedChevron,
} from './styles';

export default function GroupedQuestions({
  questions,
  title,
  theme,
  navigation,
}) {
  const openAnimation = new Animated.Value(0);
  const opacity = new Animated.Value(0);

  let opened = false;

  function handlePress() {
    opened = !opened;

    if (opened) {
      Animated.parallel([
        Animated.timing(openAnimation, {
          toValue: 1,
          timing: 100,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          timing: 200,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          timing: 50,
        }),
        Animated.timing(openAnimation, {
          toValue: 0,
          timing: 50,
        }),
      ]).start();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.2,
          shadowRadius: 4.65,

          elevation: 8,
        }}
      >
        <Header>
          <Title>{title}</Title>
          <OpenButton onPress={handlePress}>
            <AnimatedChevron
              style={{
                transform: [
                  {
                    rotate: openAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '180deg'],
                    }),
                  },
                ],
              }}
              name="chevron-down"
              size={28}
              color={theme.letters || '#f6f9fc'}
            />
          </OpenButton>
        </Header>
        <Content
          style={{
            maxHeight: openAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 10000],
              extrapolate: 'clamp',
            }),
            opacity,
          }}
        >
          {questions.map((question, index) => (
            <Question
              onPress={() => navigation.navigate('Question', { question })}
              key={question.Name}
              disabled={!question.Available}
              noBorder={questions.length - 1 === index}
            >
              <Name>{question.Name}</Name>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={theme.letters || '#f6f9fc'}
              />
            </Question>
          ))}
        </Content>
        <Bottom>
          <Length>{questions.length} questions</Length>
        </Bottom>
      </Container>
    </ThemeProvider>
  );
}
