/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from 'react';
import { Animated, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import { setReload } from '~/store/modules/config/actions';

import logo from '~/assets/logo.png';

import api from '~/services/api';

import formatDifficulty from '~/util/question';
import formatCategoryIcon from '~/util/category';

import Background from '~/components/Background';
import List from '~/components/List';
import Loading from '~/components/Loading';
import Question from '~/components/Question';
import Categories from '~/components/Categories';
import Datastructure from '~/components/Datastructure';

import Menu from '~/components/Menu';

import {
  Container,
  Header,
  HeaderLogo,
  HeaderGreeting,
  HeaderText,
  Content,
} from './styles';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const favoriteQuestions = useSelector(state => state.question.favorites);
  const showFavorites = useSelector(state => state.config.showFavorites);
  const difficulty = useSelector(state => state.config.difficulty);
  const reload = useSelector(state => state.config.reload);

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
        Jura: require('~/assets/fonts/Jura.ttf'),
        JuraBold: require('~/assets/fonts/Jura-Bold.ttf'),
        OpenSans: require('~/assets/fonts/OpenSans-Regular.ttf'),
        OpenSansBold: require('~/assets/fonts/OpenSans-Bold.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  async function fetchData() {
    setLoading(true);
    const response = await api.get('/problems/v1/summary');
    const categoriesDraft = {};

    const data = await response.data.Problems.map(question => ({
      ...question,
      formattedDifficulty: formatDifficulty(question),
    }));

    data.forEach(question => {
      if (categoriesDraft[question.Category]) {
        categoriesDraft[question.Category].questions.push(question);
      } else {
        categoriesDraft[question.Category] = {
          questions: [],
          icon: formatCategoryIcon(question.Category),
          name: question.Category,
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
        datastructure => ({
          ...datastructure,
          formattedThumbnail: datastructure.thumbnail_url.split('.webp')[0],
        })
      );

      setDataStructures(formattedData);
      setLoading(false);
    }

    loadDataStructures();
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (reload) {
      fetchData();
    }

    dispatch(setReload());
  }, [reload, dispatch]);

  useEffect(() => {
    const data = questions
      .filter(question => question.Difficulty === difficulty)
      .sort(question => !question.Available)
      .slice(0, 10);

    setExperienceQuestions(data);
  }, [questions, difficulty]);

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
              renderItem={({ item }) => (
                <Question navigation={navigation} question={item} />
              )}
              title="Questions"
              subtitle="Based on your experience"
              close={noHeader}
              setNoHeader={handleClose}
              closeOpacity={noHeaderAnimatedValues.interpolate({
                inputRange: [0, 50],
                outputRange: [1, 0],
              })}
              onPress={() =>
                navigation.navigate('QuestionsList', {
                  categories,
                  questions,
                })
              }
            />

            {favoriteQuestions.length > 0 && showFavorites && (
              <List
                data={favoriteQuestions}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.Name}
                renderItem={({ item }) => (
                  <Question navigation={navigation} question={item} />
                )}
                title="Favorite"
                subtitle="Questions you've liked"
                disabled
              />
            )}

            {categories && (
              <Categories navigation={navigation} data={categories} />
            )}

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

          <StatusBar
            hidden={noHeader}
            barStyle="light-content"
            backgroundColor="#02203c"
            animated
            showHideTransition="slide"
          />
        </Container>
      ) : (
        <Loading />
      )}
    </Background>
  );
}
