import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View``;

export const TitleBox = styled.TouchableOpacity`
  align-self: stretch;
  background: #fff;
  margin: 0 30px;
  border-color: #626ee3;
  border-left-width: 5px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: #02203c;
  font-size: 22px;
  font-family: OpenSansBold;
`;

export const PlusMinus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Minus = styled(Animated.View)`
  height: 3px;
  width: 18px;
  background: #02203c;
  margin-top: 4px;
`;

export const QuestionsBox = styled(Animated.View)`
  margin: 0 30px;
  margin-top: 5px;
`;

export const Question = styled.Text`
  color: #02203c;
  font-family: OpenSansBold;
  margin-top: 15px;
  font-size: 16px;
`;

export const Answer = styled.Text`
  margin-top: 10px;
  color: #445d6e;
  font-family: OpenSans;
  font-size: 14px;
`;
