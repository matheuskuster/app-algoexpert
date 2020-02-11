import React, { useMemo, useState, useEffect } from 'react';
import { Video } from 'expo-av';
import { ThemeProvider } from 'styled-components';

import { ActivityIndicator, Animated } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import api from '~/services/api';
import formattedLanguage from '~/util/language';
import themes from '~/util/themes';
import categoryIcon from '~/util/category';

import {
  Header,
  HeaderTop,
  BackButton,
  HeaderTopText,
  Category,
  QuestionData,
  QuestionTitle,
  QuestionDifficulty,
  HeaderBorder,
  Container,
  QuestionName,
  QuestionDescription,
  Button,
  ButtonText,
  VideoExplanation,
  VideoExplanationHeader,
  VideoExplanationText,
  Hints,
  HintsContent,
  Hint,
  HintTitle,
  HintText,
} from './styles';

import FavoriteButton from './FavoriteButton';
import CodeSolution from './CodeSolution';

export default function Question({ navigation }) {
  const [showSolution, setShowSolution] = useState(false);
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);

  const scrollY = new Animated.Value(0);
  const questionOpacity = new Animated.Value(0);
  const showHints = new Animated.Value(0);

  const question = useMemo(() => navigation.getParam('question'), [navigation]);

  const theme = themes[question.Difficulty - 1];
  const { type: Icon, name } = categoryIcon(question.Category);

  let hintsOpened = false;

  useEffect(() => {
    async function fetchQuestionData() {
      const response = await api.get(
        `problems/v1/fullproblem/${question.Name}`
      );

      const languages = Object.keys(response.data.Resources);

      const data = {
        ...response.data,
        Hints: response.data.Hints.split('\n').splice(0, 3),
        description: response.data.Prompt.replace(question.Name, ''),
      };

      languages.forEach(language => {
        data.Resources[language] = {
          ...data.Resources[language],
          formattedLanguage: formattedLanguage(language),
        };
      });

      setQuestionData(data);
      setLoading(false);
    }

    fetchQuestionData();
  }, [question]);

  useEffect(() => {
    if (!showSolution) {
      Animated.timing(questionOpacity, {
        toValue: 1,
        timing: 1,
      }).start();
    }
  }, [loading, showSolution]); //eslint-disable-line

  function handleScroll(event) {
    const { y: offset } = event.nativeEvent.contentOffset;

    scrollY.setValue(offset);
  }

  function handleOpenSolution() {
    Animated.parallel([
      Animated.timing(scrollY, {
        timing: 200,
        toValue: 0,
      }),
      Animated.timing(questionOpacity, {
        timing: 200,
        toValue: 0,
      }),
    ]).start(() => setShowSolution(true));
  }

  function handleShowHints() {
    hintsOpened = !hintsOpened;

    Animated.timing(showHints, {
      timing: 100,
      toValue: hintsOpened ? 1 : 0,
    }).start();
  }

  return (
    <ThemeProvider theme={theme}>
      <Header
        style={{
          height: scrollY.interpolate({
            inputRange: [0, 195],
            outputRange: [250, 55],
            extrapolate: 'clamp',
          }),
        }}
      >
        <HeaderTop>
          <BackButton onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={40} color="#fff" />
          </BackButton>
          <HeaderTopText>QUESTION</HeaderTopText>
          <FavoriteButton question={question} />
        </HeaderTop>
        <Category
          style={{
            opacity: scrollY.interpolate({
              inputRange: [98, 185],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}
        >
          <Icon name={name} size={80} color="#f6f9fc" />
        </Category>
        <QuestionData
          style={{
            opacity: scrollY.interpolate({
              inputRange: [22, 85],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          }}
        >
          <QuestionTitle>{question.Name}</QuestionTitle>
          <QuestionDifficulty>
            {question.formattedDifficulty}{' '}
          </QuestionDifficulty>
        </QuestionData>
      </Header>
      <HeaderBorder />

      {showSolution ? (
        <CodeSolution
          theme={theme}
          handleScroll={handleScroll}
          scrollY={scrollY}
          setShowSolution={setShowSolution}
          solutions={questionData.Resources}
        />
      ) : (
        <Container
          onScroll={handleScroll}
          scrollEventThrottle={8}
          overScrollMode="never"
          alwaysBounceVertical={false}
          style={{
            paddingTop: scrollY.interpolate({
              inputRange: [0, 195],
              outputRange: [0, 250],
              extrapolate: 'clamp',
            }),
            opacity: questionOpacity,
          }}
        >
          {loading ? (
            <ActivityIndicator
              size="large"
              style={{
                marginTop: 30,
              }}
            />
          ) : (
            <>
              <QuestionName
                style={{
                  opacity: scrollY.interpolate({
                    inputRange: [0, 40, 95, 195],
                    outputRange: [0, 0, 0.7, 1],
                    extrapolate: 'clamp',
                  }),
                }}
              >
                {question.Name}
              </QuestionName>
              <QuestionDescription>
                {questionData.description}
              </QuestionDescription>

              <Hints
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
                <Button
                  onPress={handleShowHints}
                  style={{
                    borderLeftWidth: 0,
                    borderRadius: 0,
                    marginTop: 0,
                    borderTopRightRadius: 4,
                    borderBottomRightRadius: 4,
                  }}
                >
                  <ButtonText>Show Hints</ButtonText>
                  <MaterialCommunityIcons
                    name="help"
                    size={25}
                    color={theme.secondary}
                  />
                </Button>

                <HintsContent
                  style={{
                    borderTopWidth: showHints,
                    maxHeight: showHints.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1000],
                      extrapolate: 'clamp',
                    }),
                  }}
                >
                  {questionData.Hints.map((hint, index) => (
                    <Hint key={hint}>
                      <HintTitle>Hint #{index + 1}</HintTitle>
                      <HintText>{hint}</HintText>
                    </Hint>
                  ))}
                </HintsContent>
              </Hints>

              <Button
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
                onPress={handleOpenSolution}
              >
                <ButtonText>Show Solution</ButtonText>
                <MaterialIcons name="code" size={30} color={theme.secondary} />
              </Button>

              <VideoExplanation
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
                <VideoExplanationHeader>
                  <VideoExplanationText>Video Explanation</VideoExplanationText>

                  <MaterialIcons
                    name="play-arrow"
                    size={30}
                    color={theme.secondary}
                  />
                </VideoExplanationHeader>

                <Video
                  source={{
                    uri:
                      'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="contain"
                  useNativeControls
                  style={{
                    alignSelf: 'stretch',
                    height: 197,
                    borderBottomRightRadius: 4,
                  }}
                />
              </VideoExplanation>
            </>
          )}
        </Container>
      )}
    </ThemeProvider>
  );
}
