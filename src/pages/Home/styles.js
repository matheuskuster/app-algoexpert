import styled from 'styled-components/native';
import { Animated, TouchableOpacity } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

export const Container = styled(Animated.View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Header = styled(AnimatedTouchableOpacity)`
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 80;
  left: 0;
  right: 0;
`;

export const HeaderGreeting = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 1px;
`;

export const HeaderLogo = styled(Animated.Image)`
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
  showsVerticalScrollIndicator: false,
})`
  background: #fff;
  align-self: stretch;
  border-radius: 30px;
  flex: 1;
  padding-top: ${props => (props.noHeader ? '50px' : '30px')};
  z-index: 5;
`;
