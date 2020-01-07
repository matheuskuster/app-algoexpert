import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import logo from '~/../assets/logo.png';

import Background from '~/components/Background';

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
  let opened = false;

  const translateY = new Animated.Value(0);

  const AnimatedChevron = Animated.createAnimatedComponent(
    MaterialCommunityIcons
  );

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        JuraBold: require('../../../assets/fonts/Jura-Bold.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

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
            />
          </>
        ) : null}
      </Container>
    </Background>
  );
}
