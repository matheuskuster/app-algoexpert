import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';

import logo from '~/assets/logo.png';
import google_icon from '~/assets/google-icon.png';

import Button from './Button';
import Background from '~/components/Background';

import {
  Container,
  AnimatedView,
  Logo,
  LogoImage,
  LogoText,
  ButtonBox,
  ButtonText,
  GoogleIcon,
  LoginText,
} from './styles';

export default function SignIn() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const translateY = new Animated.Value(150);
  const translateX = new Animated.Value(125);
  const rotate = new Animated.Value(0);
  const opacity = new Animated.Value(0);

  useEffect(() => {
    translateY.setValue(150);
    translateX.setValue(125);
    rotate.setValue(0);
    opacity.setValue(0);

    Animated.sequence([
      Animated.timing(rotate, {
        toValue: 1,
        duration: 800,
      }),
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 400,
          delay: 50,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 400,
          delay: 450,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          delay: 450,
        }),
      ]),
    ]).start();
  }, [fontLoaded]); //eslint-disable-line

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Jura: require('~/assets/fonts/Jura.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  return (
    <Background>
      <Container>
        {fontLoaded && (
          <AnimatedView
            style={{
              transform: [
                {
                  translateY,
                },
              ],
            }}
          >
            <Logo>
              <LogoImage
                style={{
                  transform: [
                    {
                      translateX,
                    },
                    {
                      rotate: rotate.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                  ],
                }}
                source={logo}
              />
              <LogoText style={{ opacity }}>AlgoExpert</LogoText>
            </Logo>
            <LoginText style={{ opacity }}>
              Log in and Ace the Coding Interviews
            </LoginText>
            <ButtonBox style={{ opacity }}>
              <Button color="#fff">
                <GoogleIcon source={google_icon} />
                <ButtonText color="#8e8985">Google</ButtonText>
              </Button>
              <Button color="#252525">
                <AntDesign name="github" size={40} color="#fff" />
                <ButtonText>Github</ButtonText>
              </Button>
              <Button color="#3b5998">
                <AntDesign name="facebook-square" size={40} color="#fff" />
                <ButtonText>Facebook</ButtonText>
              </Button>
            </ButtonBox>
          </AnimatedView>
        )}
      </Container>
    </Background>
  );
}
