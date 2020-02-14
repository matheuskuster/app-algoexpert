import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import LottieView from 'lottie-react-native';

import categoryIcon from '~/util/category';
import themes from '~/util/themes';

import notFound from '~/assets/not-found.json';

import {
  Container,
  Question,
  Header,
  Title,
  DifficultyText,
  Bottom,
  GoTo,
  GoToText,
  NotFoundView,
  NotFoundText,
  NotFoundAdvice,
} from './styles';

export default function Favorites({ navigation }) {
  const questions = useSelector(state => state.question.favorites);

  return questions.length > 0 ? (
    <Container>
      {questions.map(question => {
        const { type: CategoryIcon, name } = categoryIcon(question.Category);
        const theme = themes[question.Difficulty - 1];

        return (
          <ThemeProvider key={question.Name} theme={theme}>
            <Question
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.4,
                shadowRadius: 4.65,

                elevation: 8,
              }}
            >
              <Header>
                <Title>{question.Name}</Title>
                <CategoryIcon name={name} size={28} color={theme.secondary} />
              </Header>

              <Bottom>
                <DifficultyText>{question.formattedDifficulty}</DifficultyText>
                <GoTo
                  onPress={() => navigation.navigate('Question', { question })}
                >
                  <GoToText>Show</GoToText>
                </GoTo>
              </Bottom>
            </Question>
          </ThemeProvider>
        );
      })}
    </Container>
  ) : (
    <NotFoundView>
      <LottieView
        style={{
          width: 500,
          height: 500,
        }}
        source={notFound}
        autoPlay
        autoSize
      />
      <NotFoundText>It seems there&apos;s nothing to show here</NotFoundText>
      <NotFoundAdvice>
        Go ahead and favorite your first question :)
      </NotFoundAdvice>
    </NotFoundView>
  );
}
