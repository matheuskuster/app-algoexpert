import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  flex: 1;
`;

export const Label = styled.Text`
  font-family: OpenSansBold;
  color: #02203c;
  margin-bottom: 5px;
`;

export const CategoryButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  padding: 15px 10px;
  border-radius: 4px;
`;

export const CategoryText = styled.Text`
  color: ${props => (props.choosed ? '#02203c' : '#ccc')};
  font-size: 16px;
`;
