import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const AnimatedView = styled(Animated.View)``;

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled(Animated.Image)`
  height: 80px;
  width: 73px;
  transform: translateX(125px);
`;

export const LogoText = styled(Animated.Text)`
  color: #fff;
  font-size: 46px;
  margin-left: 20px;
  font-family: 'Jura';
  opacity: 0;
`;

export const ButtonBox = styled(Animated.View)`
  align-self: stretch;
  padding: 0 18px;
  margin-top: 60px;
  opacity: 0;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-family: Jura;
  margin: auto;
  color: ${props => props.color || '#fff'};
`;

export const GoogleIcon = styled.Image`
  height: 38px;
  width: 38px;
`;

export const LoginText = styled(Animated.Text)`
  color: #fff;
  font-size: 20px;
  font-family: Jura;
  align-self: stretch;
  text-align: center;
  margin-top: 20px;
  opacity: 0;
`;
