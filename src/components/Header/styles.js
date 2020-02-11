import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  align-items: flex-start;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;

  margin-top: 40px;
  margin-left: 8px;
  font-family: OpenSansBold;
  color: #02203c;
`;

export const Description = styled.Text`
  font-size: 15px;

  margin-left: 8px;
  font-family: OpenSans;
  color: #999;
  margin-top: 10px;
`;
