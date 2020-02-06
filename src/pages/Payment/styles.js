import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

export const Container = styled(SafeAreaView).attrs({
  forceInset: {
    bottom: 'never',
  },
})`
  flex: 1;
  background: #f6f9fc;
`;

export const Content = styled(KeyboardAwareScrollView).attrs({
  alwaysBounceVertical: false,
})`
  background: #f6f9fc;
`;

export const Label = styled.Text`
  font-family: OpenSansBold;
  color: #02203c;
  margin-bottom: 5px;
`;

export const TotalPrice = styled.View`
  padding: 0 30px;
`;

export const Price = styled.Text`
  font-family: OpenSansBold;
  color: #626ee3;
  font-size: 48px;
`;

export const Notice = styled.Text`
  font-family: OpenSans;
  font-size: 12px;
  color: #445d6e;
`;

export const PaymentMethod = styled.View`
  margin-top: 20px;
  padding: 0 30px;
`;

export const Methods = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Method = styled.TouchableOpacity`
  background: #626ee3;
  border-radius: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

export const MethodText = styled.Text`
  color: #fff;
  font-family: OpenSans;
  font-size: 16px;
  margin-right: 5px;
`;

export const PaymentForm = styled.View`
  margin-top: 20px;
  padding: 0 30px;
`;

export const CardInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PersonalDetails = styled.View`
  padding: 0 30px;
  margin-top: 20px;
`;

export const NameInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PromoCode = styled.View`
  padding: 0 30px;
  margin-top: 20px;

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ApplyButton = styled.TouchableOpacity`
  background: #626ee3;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  padding: 15px 20px;
`;

export const ApplyButtonText = styled.Text`
  color: #fff;
  font-family: OpenSans;
  font-size: 16px;
`;

export const SwitchView = styled.View`
  padding: 0 30px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SwitchText = styled.Text`
  font-size: 15px;
  font-family: OpenSans;
  color: #445d6e;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #626ee3;
  border-radius: 4px;
  padding: 15px 0;
  margin: 20px 30px 80px 30px;

  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-family: OpenSans;
  font-size: 16px;
  margin-left: 10px;
`;
