import styled from 'styled-components/native';
import { StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const animatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

const animatedChevron = Animated.createAnimatedComponent(
  MaterialCommunityIcons
);

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-bottom: 30px;
`;

export const Header = styled.View`
  background: ${props => props.theme.secondary};
  padding: 25px 30px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: OpenSansBold;
  font-size: 22px;
  color: ${props => props.theme.letters || '#f6f9fc'};
`;

export const OpenButton = styled(animatedTouchableOpacity)``;

export const Content = styled(Animated.View)`
  background: ${props => props.theme.primary};
  align-self: stretch;
  margin: 0 10px;
  border-color: #ccc;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const Question = styled(animatedTouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${props => props.theme.secondary || '#fff'};

  padding: 20px 15px;
  border-color: ${props => props.theme.letters || '#f6f9fc'};
  border-bottom-width: ${props =>
    props.noBorder ? 0 : StyleSheet.hairlineWidth}px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const Name = styled.Text`
  font-family: OpenSans;
  font-size: 16px;
  color: ${props => props.theme.letters || '#f6f9fc'};
`;

export const Bottom = styled.View`
  background: ${props => props.theme.secondary};
  padding: 25px 30px;
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;

  align-items: center;
`;

export const Length = styled.Text`
  font-family: OpenSans;
  font-size: 17px;
  color: ${props => props.theme.letters || '#f6f9fc'};
`;

export const AnimatedChevron = styled(animatedChevron)``;
