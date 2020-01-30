import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { darken } from 'polished';

const animatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export const Header = styled(animatedSafeAreaView).attrs({
  forceInset: {
    bottom: 'never',
  },
})`
  background: ${props => props.color};
  padding: 10px 20px;

  border-color: ${props => darken(0.2, props.color)};
  border-bottom-width: 10px;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTopText = styled.Text`
  color: #f6f9fc;
  font-family: OpenSansBold;
  font-size: 16px;
  letter-spacing: 2px;
`;

export const Category = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: -20px;
`;

export const QuestionData = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const QuestionTitle = styled.Text`
  font-family: OpenSansBold;
  font-size: 22px;
  color: #f6f9fc;
`;

export const QuestionDifficulty = styled.Text`
  font-family: OpenSans;
  color: #f6f9fc;
  font-size: 16px;
  margin-top: 3px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background: #f6f9fc;
  padding: 30px;
`;

export const QuestionName = styled(Animated.Text)`
  font-family: OpenSansBold;
  color: ${props => props.color};
  font-size: 16px;
`;

export const QuestionDescription = styled(Animated.Text)`
  font-family: OpenSans;
  font-size: 14px;
  line-height: 24px;
  color: #445d6e;
  margin-top: -30px;
`;
