import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
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
})`
  background: #f6f9fc;
`;

export const ModalView = styled.View`
  flex: 1;
  justify-content: flex-end;

  padding: 0 20px 50px 20px;
  background: rgba(0, 0, 0, 0.7);
`;

export const Options = styled.View`
  background: #fff;
  border-radius: 16px;

  align-items: center;
`;

export const ModalTitle = styled.Text`
  padding: 20px 0;
  font-size: 18px;
  font-family: OpenSansBold;
  border-color: #ccc;
  color: #333;
`;

export const Option = styled.View`
  align-self: stretch;
  border-color: #ccc;
  border-top-width: ${StyleSheet.hairlineWidth}px;
`;

export const OptionButton = styled(RectButton)`
  align-self: stretch;
  padding: 20px 0;
  align-items: center;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  font-family: OpenSans;
  color: #333;
`;

export const CancelButton = styled(RectButton)`
  padding: 20px 0;
  align-items: center;
  background: #fff;

  border-radius: 16px;

  margin-top: 24px;
`;

export const CancelButtonText = styled.Text`
  font-size: 16px;
  font-family: OpenSans;
  color: #f00;
`;
