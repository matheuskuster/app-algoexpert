import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  border-bottom-color: ${props => darken(0.2, props.color)};
  border-bottom-width: 10px;
  height: 200px;
  width: 170px;

  background: ${props => props.color};

  border-radius: 6px;
  justify-content: space-between;
  margin-right: 20px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

export const Name = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-left: 20px;
  margin-right: 20px;
  font-family: JuraBold;
  color: #f5f5f5;
  font-size: 24px;
`;

export const Difficulty = styled.Text`
  color: #f5f5f5;
  align-self: stretch;
  background: ${props => darken(0.2, props.color)};
  padding-top: 10px;
  padding-left: 20px;
  font-family: Jura;
`;
