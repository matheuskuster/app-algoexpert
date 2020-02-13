import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { RectButton } from 'react-native-gesture-handler';

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

export const SettingsView = styled.View`
  border-color: #ccc;
  border-top-width: ${StyleSheet.hairlineWidth}px;
`;

export const Setting = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 20px 20px 30px;
  border-color: #ccc;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const Left = styled.View``;

export const SettingText = styled.Text`
  font-size: 17px;
  font-family: OpenSansBold;
  color: rgba(0, 0, 0, 0.8);
`;

export const SettingDescription = styled.Text`
  font-family: OpenSans;
  font-size: 11px;
  color: #999;
`;

export const PickerButton = styled.TouchableOpacity``;

export const PickerButtonText = styled.Text`
  font-family: OpenSans;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
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
