import styled from 'styled-components/native';
import { Animated, TouchableOpacity } from 'react-native';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

export const Container = styled.View``;

export const Left = styled.TouchableOpacity`
  justify-content: center;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 20px;
`;

export const TitleText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  font-family: JuraBold;
`;

export const Subtitle = styled.Text`
  color: #999;
  font-family: Jura;
  margin-left: 2px;
  margin-top: -2px;
`;

export const StyledList = styled.FlatList`
  margin-top: 20px;
  padding: 0px 20px 20px 20px;
`;

export const FinalComponent = styled.View`
  padding-right: 20px;
`;

export const CloseButton = styled(AnimatedTouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
