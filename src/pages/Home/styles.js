import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.TouchableOpacity`
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

export const Content = styled(Animated.View)`
  background: #fff;
  flex: 1;
  align-self: stretch;
  margin-top: 20px;
  border-radius: 30px;
  z-index: 5;
`;
