/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from 'react';
import { Animated } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import logo from '~/../assets/logo.png';

import api from '~/services/api';

import format from '~/util/question';
import formatCategory from '~/util/category';

import Background from '~/components/Background';
import List from '~/components/List';
import Loading from '~/components/Loading';
import Question from '~/components/Question';
import Categories from '~/components/Categories';
import Datastructure from '~/components/Datastructure';
import Tips from '~/components/Tips';
import Menu from '~/components/Menu';

import {
  Container,
  Header,
  HeaderLogo,
  HeaderGreeting,
  HeaderText,
  Content,
} from './styles';

export default function Home({ navigation, isFocused }) {
  const [questions, setQuestions] = useState([]);
  const [experienceQuestions, setExperienceQuestions] = useState([]);
  const [categories, setCategories] = useState(null);
  const [dataStructures, setDataStructures] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [noHeader, setNoHeader] = useState(false);

  const translateY = new Animated.Value(0);
  const noHeaderAnimatedValues = new Animated.Value(50);
  const scrollY = new Animated.Value(0);
  const opacity = new Animated.Value(0);

  let opened = useMemo(() => false, []);

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

    loadFont();
  }, []);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await api.get('/problems/v1/summary');
      const categoriesDraft = {};

      const data = response.data.Problems.map(question => ({
        ...question,
        info: format(question),
      }));

      response.data.Problems.forEach(question => {
        if (categoriesDraft[question.Category]) {
          categoriesDraft[question.Category].questions.push(question);
        } else {
          categoriesDraft[question.Category] = {
            questions: [],
            icon: formatCategory(question.Category),
          };

          categoriesDraft[question.Category].questions.push(question);
        }
      });

      setCategories(categoriesDraft);
      setQuestions(data);

      async function loadDataStructures() {
        const dataStructuresResponse = await api.get(
          'problems/v1/datastructures'
        );

        const formattedData = dataStructuresResponse.data.datastructures.map(
          (datastructure, index) => ({
            ...datastructure,
            formattedThumbnail: datastructure.thumbnail_url.split('.webp')[0],
            watched: index % 2 === 0,
          })
        );

        setDataStructures(formattedData);
        setLoading(false);
      }

      loadDataStructures();
    }

    fetchData();
  }, []);

  useEffect(() => {
    const data = questions.sort(question => !question.Available);

    setExperienceQuestions(data);
  }, [questions]);

  useEffect(() => {
    if (!loading && fontLoaded) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        delay: 200,
      }).start();
    }
  }, [loading, fontLoaded]); //eslint-disable-line

  function handleGreetingsPress() {
    opened = !opened;

    Animated.spring(translateY, {
      toValue: opened ? 1 : 0,
      bounciness: opened ? 8 : 2,
    }).start();
  }

  function handleScroll(event) {
    const { y: offset } = event.nativeEvent.contentOffset;

    if (offset >= 160) {
      setNoHeader(true);
      noHeaderAnimatedValues.setValue(0);
    }

    scrollY.setValue(offset);
  }

  function handleClose() {
    Animated.spring(noHeaderAnimatedValues, {
      toValue: 50,
    }).start(() => setNoHeader(false));
  }

  return (
    <Background>
      {fontLoaded && !loading ? (
        <Container style={{ opacity }}>
          <Content
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 700],
                  }),
                },
              ],
              marginTop: !noHeader
                ? scrollY.interpolate({
                    inputRange: [0, 160],
                    outputRange: [160, 0],
                    extrapolate: 'clamp',
                  })
                : noHeaderAnimatedValues.interpolate({
                    inputRange: [0, 50],
                    outputRange: [0, 160],
                  }),
              paddingTop: noHeaderAnimatedValues.interpolate({
                inputRange: [0, 50],
                outputRange: [50, 30],
              }),
              borderTopStartRadius: !noHeader
                ? scrollY.interpolate({
                    inputRange: [0, 160],
                    outputRange: [30, 0],
                    extrapolate: 'clamp',
                  })
                : noHeaderAnimatedValues.interpolate({
                    inputRange: [0, 50],
                    outputRange: [0, 30],
                  }),
              borderTopEndRadius: !noHeader
                ? scrollY.interpolate({
                    inputRange: [0, 160],
                    outputRange: [30, 0],
                    extrapolate: 'clamp',
                  })
                : noHeaderAnimatedValues.interpolate({
                    inputRange: [0, 50],
                    outputRange: [0, 30],
                  }),
            }}
            scrollEventThrottle={16}
            onScroll={handleScroll}
          >
            <List
              data={experienceQuestions}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.Name}
              renderItem={({ item }) => <Question question={item} />}
              title="Questions"
              subtitle="Based on your experience"
              close={noHeader}
              setNoHeader={handleClose}
              closeOpacity={noHeaderAnimatedValues.interpolate({
                inputRange: [0, 50],
                outputRange: [1, 0],
              })}
            />

            {categories && <Categories data={categories} />}

            <List
              data={dataStructures}
              horizontal
              disabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.name}
              renderItem={({ item, index }) => (
                <Datastructure item={item} index={index} />
              )}
              title="Data Structures"
              subtitle="The foundational knowledge you need."
            />

            <Tips />
          </Content>

          <Header
            style={{
              height: !noHeader
                ? scrollY.interpolate({
                    inputRange: [0, 50],
                    outputRange: [50, 0],
                    extrapolate: 'clamp',
                  })
                : noHeaderAnimatedValues,
            }}
            onPress={handleGreetingsPress}
            disabled={noHeader}
          >
            <HeaderGreeting>
              <HeaderLogo
                style={{
                  height: !noHeader
                    ? scrollY.interpolate({
                        inputRange: [0, 50],
                        outputRange: [50, 0],
                        extrapolate: 'clamp',
                      })
                    : noHeaderAnimatedValues,
                }}
                source={logo}
              />
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

          <Menu navigation={navigation} />
        </Container>
      ) : (
        <Loading />
      )}
    </Background>
  );
}

Home.navigationOptions = {
  headerShown: false,
};
