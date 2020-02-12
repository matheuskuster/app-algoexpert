import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  width: ${props => props.inputSize || '100%'};
  margin-top: ${props => (props.spaced ? '20px' : 0)};
`;

export const Label = styled.Text`
  font-family: OpenSansBold;
  color: #02203c;
  margin-bottom: 5px;
`;

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  background: #fff;
  color: #02203c;
  font-size: 16px;

  padding: 15px 10px;
  border-radius: 4px;
  min-height: ${props => (props.multiline ? '160px' : '0px')};
`;

export const Border = styled(Animated.View)`
  height: 2px;
  background: #626ee3;
  transform: translateY(-10px);
  margin-left: 10px;
  width: 95%;
`;
