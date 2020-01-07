import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 20px;
`;

export const TitleText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  font-family: JuraBold;
`;

export const Subtitle = styled.Text`
  color: #999;
  font-family: Jura;
  margin-left: 2px;
  margin-top: -2px;
`;

export const StyledList = styled.FlatList`
  margin-top: 20px;
  padding-bottom: 20px;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FinalComponent = styled.View`
  padding-right: 20px;
`;
