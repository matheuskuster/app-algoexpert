import React, { useMemo, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';

import themes from '~/util/themes';

import { historyRequest } from '~/store/modules/config/actions';

import {
  Container,
  Header,
  Top,
  Back,
  Title,
  HeaderRight,
  Content,
  Card,
  CategoryTitle,
  CategoryData,
  NumberAndDescription,
  Number,
  Description,
  QuestionList,
  Question,
  QuestionTop,
  Left,
  Right,
  QuestionName,
  TranslateFix,
} from './styles';

export default function Category({ navigation }) {
  const dispatch = useDispatch();

  const category = useMemo(() => navigation.getParam('category'), [navigation]);
  const questions = useMemo(
    () => category.questions.sort((a, b) => a.Difficulty > b.Difficulty),
    [category]
  );

  const { type: Icon, name } = category.icon;

  const completedQuestions = useMemo(
    () => questions.filter(question => question.Metadata.completed).length,
    [questions]
  );

  useEffect(() => {
    dispatch(historyRequest(`Browsed through ${category.name} questions.`));
  }, [category, dispatch]);

  return (
    <Container>
      <Header>
        <Top>
          <Back onPress={() => navigation.navigate('Home')}>
            <MaterialIcons name="chevron-left" color="#f6f9fc" size={30} />
          </Back>

          <Title>CATEGORY</Title>
          <HeaderRight />
        </Top>
      </Header>

      <Content>
        <Card
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
          <Icon
            name={name}
            size={80}
            color="#02203c"
            style={{ marginLeft: 0, marginRight: 0 }}
          />
          <CategoryTitle>{category.name}</CategoryTitle>
          <CategoryData>
            <NumberAndDescription>
              <Number>{questions.length}</Number>
              <Description>Questions</Description>
            </NumberAndDescription>
            <NumberAndDescription>
              <Number>{completedQuestions}</Number>
              <Description>Completed</Description>
            </NumberAndDescription>
          </CategoryData>
        </Card>

        <QuestionList>
          {questions.map(question => {
            const theme = themes[question.Difficulty - 1];

            return (
              <ThemeProvider key={question.Name} theme={theme}>
                <Question
                  onPress={() =>
                    navigation.navigate('Question', {
                      question,
                      goBackKey: navigation.state.key,
                    })
                  }
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
                  disabled={!question.Available}
                >
                  <QuestionTop>
                    <Left>{question.formattedDifficulty}</Left>
                    <Right>
                      <MaterialIcons
                        name="check-circle"
                        size={30}
                        color={question.Metadata.completed ? '#69e076' : '#ddd'}
                      />
                    </Right>
                  </QuestionTop>
                  <QuestionName>{question.Name}</QuestionName>
                </Question>
              </ThemeProvider>
            );
          })}

          <TranslateFix />
        </QuestionList>
      </Content>
    </Container>
  );
}
