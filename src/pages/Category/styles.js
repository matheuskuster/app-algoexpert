import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';

export const Container = styled.View`
  flex: 1;
  background: #f6f9fc;
`;

export const Header = styled(SafeAreaView).attrs({
  forceInset: {
    bottom: 'never',
  },
})`
  background: #02203c;
  padding: 20px 20px;

  height: 200px;
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const Title = styled.Text`
  color: #f6f9fc;
  font-family: OpenSans;
  font-size: 16px;
  letter-spacing: 2px;
`;

export const HeaderRight = styled.View`
  height: 30px;
  width: 30px;
`;

export const Back = styled.TouchableOpacity``;

export const Card = styled.View`
  background: #fff;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding: 20px;
  margin: 0 20px;
`;

export const Content = styled.View`
  transform: translateY(-120px);
`;

export const CategoryTitle = styled.Text`
  color: #02203c;
  font-family: OpenSansBold;
  font-size: 28px;
  margin-top: 10px;
`;

export const CategoryData = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  margin-top: 10px;
`;

export const NumberAndDescription = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Number = styled.Text`
  font-family: OpenSansBold;
  color: #02203c;
  font-size: 18px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: OpenSans;
  color: #999;
`;

export const QuestionList = styled.ScrollView`
  padding: 0 20px;
`;

export const Question = styled.TouchableOpacity`
  background: #fff;
  border-radius: 6px;

  margin-top: 20px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const QuestionTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 0 20px;
  border-color: ${props => props.theme.primary};
  border-left-width: 3px;
  border-top-left-radius: 4px;
`;

export const Left = styled.Text`
  font-family: OpenSansBold;
  color: ${props => props.theme.primary};
  font-size: 16px;
`;

export const Right = styled.View`
  align-items: center;
  justify-content: center;
`;

export const QuestionName = styled.Text`
  padding: 20px 20px 15px 20px;
  font-family: OpenSansBold;
  color: #02203c;
  font-size: 16px;
`;

export const TranslateFix = styled.View`
  margin-top: 420px;
`;
