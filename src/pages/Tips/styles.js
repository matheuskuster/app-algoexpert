import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';

export const Container = styled(SafeAreaView).attrs({
  forceInset: {
    bottom: 'never',
  },
})`
  flex: 1;
  background: #f6f9fc;
`;

export const Content = styled.ScrollView``;

export const TipContainer = styled.View`
  margin: 0 30px;
  background: #fff;
  border-radius: 6px;
  margin-bottom: 40px;
`;

export const TipHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  border-color: #02203c;
  border-bottom-width: 1px;
`;

export const TipTitle = styled.Text`
  font-family: OpenSansBold;
  font-size: 18px;
  color: #02203c;
`;

export const TipBody = styled.View`
  padding: 20px;
`;

export const TipDescription = styled.Text`
  font-family: OpenSans;
  font-size: 16px;
  color: #666;
`;

export const PlayButton = styled.TouchableOpacity`
  margin-top: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 0;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;
export const PlayButtonText = styled.Text`
  font-family: OpenSansBold;

  font-size: 18px;
`;
