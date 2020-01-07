import styled from 'styled-components/native';
import { Animated, TouchableOpacity } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled(AnimatedTouchableOpacity)`
  margin-top: 80px;
  justify-content: center;
  align-items: center;
`;

export const HeaderGreeting = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 1px;
`;

export const HeaderLogo = styled.Image`
  height: 50px;
  width: 45px;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 26px;
  margin-left: 20px;
  font-family: JuraBold;
`;

export const Content = styled(Animated.ScrollView).attrs({
  alwaysBounceVertical: false,
})`
  background: #fff;
  flex: 1;
  align-self: stretch;
  margin-top: 20px;
  border-radius: 30px;
  z-index: 5;
  padding-top: 30px;
`;
