import styled from 'styled-components/native';
import { Animated, FlatList } from 'react-native';

export const Container = styled(Animated.View)`
  background: #282a36;
  flex: 1;
`;

export const Header = styled(Animated.View)`
  padding-bottom: 10px;
  background: ${props => props.theme.secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CloseTitle = styled.Text`
  color: #f6f9fc;
  font-family: OpenSansBold;
  font-size: 15px;
`;

export const LanguageChoose = styled.TouchableOpacity`
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const Language = styled.Text`
  color: #f5f9fc;
  font-family: OpenSans;
  font-size: 16px;
`;

export const Counter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ChangeButton = styled.TouchableOpacity``;

export const CounterNumber = styled.Text`
  font-family: OpenSans;
  color: #f6f9fc;
  font-size: 20px;
`;

export const LanguagesList = styled(FlatList)``;

export const ItemSeparatorComponent = styled.View`
  width: 30px;
`;
