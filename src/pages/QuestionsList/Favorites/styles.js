import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-top: 10px;
`;

export const Question = styled.View`
  margin-bottom: 25px;
`;

export const Header = styled.View`
  background: ${props => props.theme.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-color: #ccc;
  border-bottom-width: 1px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #f6f9fc;
  font-family: OpenSansBold;
  font-size: 22px;
`;

export const DifficultyText = styled.Text`
  font-family: OpenSans;
  color: #f6f9fc;
`;

export const Bottom = styled.View`
  background: ${props => props.theme.secondary};
  padding: 10px 20px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoTo = styled.TouchableOpacity``;

export const GoToText = styled.Text`
  font-family: OpenSans;
  color: #f6f9fc;
`;

export const NotFoundView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const NotFoundText = styled.Text`
  transform: translateY(-190px);
  font-family: OpenSansBold;
  font-size: 18px;
  color: #333;
`;

export const NotFoundAdvice = styled.Text`
  transform: translateY(-185px);
  font-family: OpenSans;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.5);
`;
