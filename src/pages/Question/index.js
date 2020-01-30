import React, { useMemo, useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import api from '~/services/api';

import {
  Header,
  HeaderTop,
  BackButton,
  HeaderTopText,
  Category,
  QuestionData,
  QuestionTitle,
  QuestionDifficulty,
  Container,
  QuestionName,
  QuestionDescription,
} from './styles';

import FavoriteButton from './FavoriteButton';

export default function Question({ navigation }) {
  const [questionData, setQuestionData] = useState(null);

  const height = new Animated.Value(0);

  const question = useMemo(() => navigation.getParam('question'), []);
  const formattedIcon = useMemo(() => {
    const { icon } = question.info;

    const formattedProps = {
      ...icon.props,
      size: 80,
      style: {
        ...icon.props.style,
        color: '#f6f9fc',
      },
    };

    return {
      ...icon,
      props: { ...formattedProps },
    };
  }, [question]);

  useEffect(() => {
    async function fetchQuestionData() {
      const response = await api.get(
        `problems/v1/fullproblem/${question.Name}`
      );

      const data = {
        ...response.data,
        description: response.data.Prompt.replace(question.Name, ''),
      };

      setQuestionData(data);
    }

    fetchQuestionData();
  }, [question]);

  function handleScroll(event) {
    const { y: offset } = event.nativeEvent.contentOffset;

    height.setValue(offset);
  }

  return (
    <>
      <Header
        style={{
          height: height.interpolate({
            inputRange: [0, 65],
            outputRange: [260, 65],
            extrapolate: 'clamp',
          }),
        }}
        color={question.info.color}
      >
        <HeaderTop>
          <BackButton onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="chevron-left" size={40} color="#fff" />
          </BackButton>
          <HeaderTopText color={question.info.color}>QUESTION</HeaderTopText>
          <FavoriteButton />
        </HeaderTop>
        <Category>{formattedIcon}</Category>
        <QuestionData>
          <QuestionTitle color={question.info.color}>
            {question.Name}
          </QuestionTitle>
          <QuestionDifficulty color={question.info.color}>
            {question.info.difficulty}{' '}
          </QuestionDifficulty>
        </QuestionData>
      </Header>

      <Container
        onScroll={handleScroll}
        scrollEventThrottle={16}
        overScrollMode="never"
        alwaysBounceVertical={false}
      >
        <QuestionName
          style={{
            height: height.interpolate({
              inputRange: [0, 65],
              outputRange: [0, 20],
            }),
          }}
          color={question.info.color}
        >
          {question.Name}
        </QuestionName>
        <QuestionDescription
          style={{
            marginTop: height.interpolate({
              inputRange: [0, 65],
              outputRange: [-50, -30],
            }),
          }}
        >
          {questionData && questionData.description}
        </QuestionDescription>
      </Container>
    </>
  );
}
