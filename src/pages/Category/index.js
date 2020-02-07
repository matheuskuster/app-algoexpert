import React, { useMemo } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

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
  const category = useMemo(() => navigation.getParam('category'), [navigation]);
  const questions = useMemo(
    () =>
      navigation
        .getParam('questions')
        .sort((a, b) => a.Difficulty > b.Difficulty),
    [navigation]
  );

  const formattedIcon = useMemo(() => {
    const { icon } = questions[0].info;

    const formattedProps = {
      ...icon.props,
      size: 80,
      style: {
        ...icon.props.style,
        color: '#02203c',
        marginLeft: 0,
        marginRight: 0,
      },
    };

    return {
      ...icon,
      props: { ...formattedProps },
    };
  }, [questions]);

  const completedQuestions = useMemo(
    () => questions.filter(question => question.Metadata.completed).length,
    [questions]
  );

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
          {formattedIcon}

          <CategoryTitle>{category}</CategoryTitle>
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
          {questions.map(question => (
            <Question
              key={question.Name}
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
              <QuestionTop color={question.info.color}>
                <Left color={question.info.color}>
                  {question.info.difficulty}
                </Left>
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
          ))}

          <TranslateFix />
        </QuestionList>
      </Content>
    </Container>
  );
}
