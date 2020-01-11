import styled from 'styled-components/native';

export const Container = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
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

export const CategoryGroup = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  height: 150px;
  background: #fff;
  border-radius: 6px;
  width: 47%;
  padding: 20px;

  justify-content: space-between;
`;

export const CategoryName = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #02203c;
  font-family: JuraBold;
  font-size: 20px;
`;

export const CategoryFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NumberOfQuestions = styled.Text`
  font-size: 18px;
  color: #02203c;
  font-family: JuraBold;
  border: 1px solid #02203c;
  border-radius: 14px;
  min-width: 65px;
  text-align: center;
  padding: 2px 0;
`;
