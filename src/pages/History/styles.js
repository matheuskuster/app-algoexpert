import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export const Container = styled(SafeAreaView).attrs({
  forceInset: {
    bottom: 'never',
  },
})`
  flex: 1;
  background: #f6f9fc;
`;

export const Content = styled.ScrollView.attrs({
  alwaysBounceVertical: false,
})``;

export const HistoryList = styled.View`
  border-color: #999;
  border-top-width: ${StyleSheet.hairlineWidth}px;
`;

export const HistoryComponent = styled.View`
  border-color: #999;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  padding: 20px 30px;
`;

export const Text = styled.Text`
  font-family: OpenSansBold;
  font-size: 16px;
  color: #02203c;
`;

export const Time = styled.Text`
  font-family: OpenSans;
  color: #999;
  margin-top: 5px;
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
