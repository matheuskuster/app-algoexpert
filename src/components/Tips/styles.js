import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 210px;
`;

export const Title = styled.View`
  justify-content: center;
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

export const TipsBox = styled.View`
  margin-top: 20px;
`;

export const Tip = styled.TouchableOpacity`
  align-self: stretch;
  background: #fff;
  margin-bottom: 10px;

  justify-content: center;
  padding: 20px;
  border-radius: 6px;
`;

export const TipTitle = styled.Text`
  font-family: Jura;
  color: #02203c;
  font-size: 20px;
`;
