import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

export const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  background: #f6f9fc;
  padding-top: 30px;
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
`;

export const Description = styled.Text`
  color: #445d6e;
  font-family: OpenSans;
  font-size: 14px;
`;
