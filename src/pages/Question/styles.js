import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const animatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export const Header = styled(animatedSafeAreaView).attrs({
  forceInset: {
    bottom: 'never',
  },
})`
  background: ${props => props.theme.primary};
  padding: 0 20px;
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

export const Category = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  margin-left: -20px;
`;

export const QuestionData = styled(Animated.View)`
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

export const HeaderBorder = styled.View`
  height: 10px;
  background: ${props => props.theme.secondary};
`;

export const Container = styled(Animated.ScrollView)`
  padding: 0 30px;
`;

export const QuestionName = styled(Animated.Text)`
  font-family: OpenSansBold;
  color: ${props => props.theme.primary};
  font-size: 16px;
`;

export const QuestionDescription = styled(Animated.Text)`
  font-family: OpenSans;
  font-size: 15px;
  line-height: 24px;
  color: #445d6e;
  margin-top: -30px;
`;

export const Test = styled.View`
  margin-top: 1000px;
`;

export const Button = styled.TouchableOpacity`
  background: #fff;
  border-color: ${props => props.theme.secondary};
  border-left-width: 5px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.secondary};
  font-size: 18px;
  font-family: OpenSansBold;
`;

export const VideoExplanation = styled.View`
  margin-top: 20px;
  border-color: ${props => props.theme.secondary};
  border-left-width: 5px;
  border-radius: 4px;
  margin-bottom: 300px;
`;

export const VideoExplanationHeader = styled.View`
  background: #fff;
  border-top-right-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
`;

export const VideoExplanationText = styled.Text`
  color: ${props => props.theme.secondary};
  font-size: 18px;
  font-family: OpenSansBold;
`;

export const Hints = styled.View`
  background: #fff;
  border-color: ${props => props.theme.secondary};
  border-left-width: 5px;
  border-radius: 4px;
`;

export const HintsContent = styled(Animated.View)`
  border-color: ${props => props.theme.secondary};
  border-top-width: 1px;
`;

export const Hint = styled.View`
  padding: 20px;
`;

export const HintTitle = styled.Text`
  font-family: OpenSansBold;
  font-size: 16px;
  color: ${props => props.theme.secondary};
`;

export const HintText = styled.Text`
  font-family: OpenSans;
  font-size: 15px;
  color: #445d6e;
`;
