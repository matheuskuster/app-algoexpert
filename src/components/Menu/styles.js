import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
  alwaysBounceVertical: false,
})`
  position: absolute;
  top: 180;

  flex: 1;
  z-index: 0;
  width: 100%;
  padding: 0 30px;
`;

export const OwnBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OwnSymbol = styled.View`
  height: 18px;
  width: 18px;
  background: #808080;
  border-radius: 9px;
  margin-right: 8px;
`;

export const OwnText = styled.Text`
  color: #808080;
  font-size: 16px;
  font-family: JuraBold;
`;

export const LogOutButton = styled.TouchableOpacity`
  border: ${StyleSheet.hairlineWidth}px solid rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin-top: 15px;
  width: 100%;
`;

export const LogOutText = styled.Text`
  font-size: 16px;
  font-family: Jura;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 10px;
`;

export const BuyButton = styled(RectButton)`
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  margin-top: 20px;
  width: 100%;
  background: #626ee3;
`;

export const BuyText = styled.Text`
  font-size: 16px;
  font-family: Jura;
  color: rgba(255, 255, 255, 0.6);
  margin-left: 10px;
`;

export const MenuOptions = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.6);
  align-self: stretch;
`;

export const Option = styled.TouchableOpacity`
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.6);

  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-family: Jura;
  font-size: 16px;
  margin-left: 20px;
`;
