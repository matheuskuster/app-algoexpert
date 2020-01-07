import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import logo from '~/../assets/logo.png';

import api from '~/services/api';

import format from '~/util/question';

import List from '~/components/List';
import Background from '~/components/Background';

import Question from '~/components/Question';

import {
  Container,
  Header,
  HeaderLogo,
  HeaderGreeting,
  HeaderText,
  Content,
} from './styles';

export default function Home() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [experienceQuestions, setExperienceQuestions] = useState([]);
  let opened = false;

  const translateY = new Animated.Value(0);

  const AnimatedChevron = Animated.createAnimatedComponent(
    MaterialCommunityIcons
  );

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Jura: require('../../../assets/fonts/Jura.ttf'),
        JuraBold: require('../../../assets/fonts/Jura-Bold.ttf'),
      });

      setFontLoaded(true);
    }

    async function loadQuestions() {
      const response = await api.get('/problems/v1/summary');

      const data = response.data.Problems.map(question => ({
        ...question,
        info: format(question),
      }));

      setQuestions(data);
    }

    loadFont();
    loadQuestions();
  }, []);

  useEffect(() => {
    const data = questions
      .filter(question => question.Difficulty === 1)
      .sort(question => !question.Available);

    setExperienceQuestions(data);
  }, [questions]);

  function handleGreetingsPress() {
    opened = !opened;

    Animated.spring(translateY, {
      toValue: opened ? 1 : 0,
      bounciness: opened ? 8 : 2,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Background>
      <Container>
        {fontLoaded ? (
          <>
            <Header onPress={handleGreetingsPress}>
              <HeaderGreeting>
                <HeaderLogo source={logo} />
                <HeaderText>Hi, Matheus</HeaderText>
              </HeaderGreeting>

              <AnimatedChevron
                style={{
                  transform: [
                    {
                      rotate: translateY.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg'],
                      }),
                    },
                  ],
                }}
                name="chevron-down"
                size={24}
                color="#fff"
              />
            </Header>

            <Content
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 500],
                    }),
                  },
                ],
              }}
            >
              <List
                data={experienceQuestions}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.Name}
                renderItem={({ item }) => <Question question={item} />}
                title="Questions"
                subtitle="Based on your experience"
              />
            </Content>
          </>
        ) : null}
      </Container>
    </Background>
  );
}
