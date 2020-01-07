import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const StyledButton = styled(RectButton)`
  height: 70px;
  background: #fff;
  border-radius: 4px;

  align-items: center;
  flex-direction: row;
  padding: 0 20px;
  background: ${props => props.color};
  margin-bottom: 22px;
`;
