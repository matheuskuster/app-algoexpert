import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

export const Container = styled(SafeAreaView).attrs({
  forceInset: {
    bottom: 'never',
  },
})`
  flex: 1;
  background: #f6f9fc;
`;

export const Content = styled(KeyboardAwareScrollView)`
  background: #f6f9fc;
`;

export const Contact = styled.View`
  margin: 40px 30px;
`;

export const Title = styled.Text`
  font-family: OpenSansBold;
  font-size: 40px;
  font-weight: bold;

  margin-bottom: 2px;
  color: #02203c;
  margin-left: -4px;
`;

export const Description = styled.Text`
  color: #445d6e;
  font-family: OpenSans;
  font-size: 14px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #626ee3;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  margin-top: 20px;
  padding: 15px 0;
  margin-bottom: 80px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: OpenSans;
  font-size: 16px;
  margin-left: 10px;
`;
