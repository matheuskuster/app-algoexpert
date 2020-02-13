/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect, useMemo } from 'react';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { ScrollView, Animated } from 'react-native';
import { dracula } from 'react-syntax-highlighter/styles/hljs';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { historyPush } from '~/store/modules/config/actions';

import {
  Container,
  Header,
  CloseButton,
  CloseTitle,
  Counter,
  ChangeButton,
  CounterNumber,
  LanguageChoose,
  Language,
  LanguagesList,
  ItemSeparatorComponent,
} from './styles';

export default function CodeSolution({
  solutions,
  setShowSolution,
  theme,
  question,
}) {
  const dispatch = useDispatch();
  const [solutionIndex, setSolutionIndex] = useState(1);
  const [choosingLanguage, setChoosingLanguage] = useState(false);
  const [language, setLanguage] = useState(
    useSelector(state => state.config.favoriteLanguage)
  );

  const opacity = new Animated.Value(0);
  const solutionsLength = useMemo(() => solutions[language].Solutions.length, [
    language,
    solutions,
  ]);
  const languagesArray = useMemo(() => Object.keys(solutions), [solutions]);

  function handleBack() {
    if (solutionIndex > 1) setSolutionIndex(solutionIndex - 1);
  }

  function handleNext() {
    if (solutionIndex < solutionsLength) setSolutionIndex(solutionIndex + 1);
  }

  function handleClose() {
    Animated.spring(opacity, {
      toValue: 0,
    }).start(() => setShowSolution(false));
  }

  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
    }).start();
  }, []); //eslint-disable-line

  useEffect(() => {
    setSolutionIndex(1);
    dispatch(
      historyPush(
        `Accessed the ${solutions[language].formattedLanguage} solution for ${question.Name}.`
      )
    );
  }, [language, dispatch, question, solutions]);

  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          opacity,
        }}
      >
        <Header
          style={{
            height: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 45],
            }),
            paddingLeft: choosingLanguage ? 0 : 20,
            paddingRight: choosingLanguage ? 0 : 20,
          }}
        >
          {choosingLanguage ? (
            <LanguagesList
              horizontal
              data={languagesArray}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item}
              ListFooterComponent={ItemSeparatorComponent}
              ListHeaderComponent={ItemSeparatorComponent}
              ItemSeparatorComponent={ItemSeparatorComponent}
              renderItem={({ item }) => (
                <LanguageChoose
                  disabled={item === language}
                  onPress={() => {
                    setLanguage(item);
                    setChoosingLanguage(false);
                  }}
                >
                  <Language>{solutions[item].formattedLanguage}</Language>
                </LanguageChoose>
              )}
            />
          ) : (
            <>
              <CloseButton onPress={handleClose}>
                <MaterialIcons name="close" size={30} color="#f6f9fc" />
                <CloseTitle>Hide</CloseTitle>
              </CloseButton>
              <LanguageChoose onPress={() => setChoosingLanguage(true)}>
                <Language>{solutions[language].formattedLanguage}</Language>
              </LanguageChoose>

              {solutionsLength > 1 && (
                <Counter>
                  <ChangeButton onPress={handleBack}>
                    <MaterialIcons
                      name="chevron-left"
                      size={30}
                      color="#f6f9fc"
                    />
                  </ChangeButton>
                  <CounterNumber>{solutionIndex}</CounterNumber>
                  <ChangeButton onPress={handleNext}>
                    <MaterialIcons
                      name="chevron-right"
                      size={30}
                      color="#f6f9fc"
                    />
                  </ChangeButton>
                </Counter>
              )}
            </>
          )}
        </Header>
        <SyntaxHighlighter
          showsHorizontalScrollIndicator={false}
          CodeTag={({ children }) => (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                paddingRight: 20,
                paddingLeft: 20,
              }}
            >
              {children}
            </ScrollView>
          )}
          style={dracula}
          customStyle={{
            padding: 0,
          }}
          language={language}
        >
          {`\n${solutions[language].Solutions[solutionIndex - 1]}\n`}
        </SyntaxHighlighter>
      </Container>
    </ThemeProvider>
  );
}
