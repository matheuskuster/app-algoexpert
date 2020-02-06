import React, { useState, useRef } from 'react';
import { Alert, Switch } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import Input from '~/components/Input';
import Header from '~/components/Header';

import {
  Container,
  Content,
  Label,
  TotalPrice,
  Price,
  Notice,
  PaymentMethod,
  Methods,
  Method,
  MethodText,
  PaymentForm,
  CardInfo,
  PersonalDetails,
  NameInfo,
  PromoCode,
  ApplyButton,
  ApplyButtonText,
  SwitchView,
  SwitchText,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function Payment({ navigation }) {
  const [applied, setApplied] = useState(false);
  const [saveCardData, setSaveCardData] = useState(false);

  const [card, setCard] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [email, setEmail] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const dateRef = useRef(null);
  const cvvRef = useRef(null);
  const emailRef = useRef(null);
  const promoCodeRef = useRef(null);

  function applyPromoCode() {
    if (promoCode === 'clem') {
      setApplied(true);
      Alert.alert(
        `The following promo code has been applied to your account: '${promoCode}'`
      );
    } else {
      setApplied(false);
      Alert.alert('This promo code is not valid');
    }
  }

  async function handlePurchase() {
    if (card && firstName && lastName && date && cvv && email) {
      Alert.alert(
        'Success',
        'The purchase was successful. Now you own AlgoExpert',
        [
          {
            text: 'Ace the interviews',
            onPress: () => navigation.navigate('Home'),
          },
        ]
      );
    } else {
      Alert.alert('Failed', 'Please fill all the fields.');
    }
  }

  return (
    <Container>
      <Content>
        <Header navigation={navigation} title="Payment" />

        <TotalPrice>
          <Label>Total price</Label>
          <Price>{applied ? '$72.25' : '$85.00'}</Price>
          <Notice>You&apos;ll have access to AlgoExpert for 1 year.</Notice>
        </TotalPrice>

        <PaymentMethod>
          <Label>Payment method</Label>
          <Methods>
            <Method
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4,

                elevation: 8,
              }}
            >
              <MethodText>Card</MethodText>
              <EvilIcons name="check" color="#fff" size={35} />
            </Method>
            <Method disabled>
              <MethodText>PayPal</MethodText>
              <EvilIcons name="check" color="#fff" size={35} />
            </Method>
            <Method disabled>
              <MethodText>Wallet</MethodText>
              <EvilIcons name="check" color="#fff" size={35} />
            </Method>
          </Methods>
        </PaymentMethod>

        <PaymentForm>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            label="Credit or Debit Card"
            placeholder="Card Number"
            onChangeText={setCard}
            value={card}
            returnKeyType="next"
            onSubmitEditing={() => dateRef.current.focus()}
          />

          <CardInfo>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numbers-and-punctuation"
              inputSize="65%"
              label="Valid until"
              placeholder="Month / Year"
              onChangeText={setDate}
              value={date}
              ref={dateRef}
              returnKeyType="next"
              onSubmitEditing={() => cvvRef.current.focus()}
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              inputSize="30%"
              label="CVV"
              placeholder="***"
              onChangeText={setCvv}
              value={cvv}
              ref={cvvRef}
              returnKeyType="next"
              onSubmitEditing={() => firstNameRef.current.focus()}
            />
          </CardInfo>
        </PaymentForm>

        <PersonalDetails>
          <Label>Personal details</Label>
          <NameInfo>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              inputSize="48%"
              placeholder="First name"
              onChangeText={setFirstName}
              value={firstName}
              ref={firstNameRef}
              returnKeyType="next"
              onSubmitEditing={() => lastNameRef.current.focus()}
            />
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              inputSize="48%"
              placeholder="Last name"
              onChangeText={setLastName}
              value={lastName}
              ref={lastNameRef}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
            />
          </NameInfo>
          <Input
            label="E-mail adress"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="E-mail adress"
            spaced
            onChangeText={setEmail}
            value={email}
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => promoCodeRef.current.focus()}
          />
        </PersonalDetails>

        <PromoCode>
          <Input
            editable={false}
            label="Promo code"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Use 'clem'"
            inputSize="72%"
            onChangeText={setPromoCode}
            value={promoCode}
            ref={promoCodeRef}
          />
          <ApplyButton onPress={() => applyPromoCode()}>
            <ApplyButtonText>Apply</ApplyButtonText>
          </ApplyButton>
        </PromoCode>

        <SwitchView>
          <SwitchText>Save card data for future payments</SwitchText>
          <Switch
            onValueChange={() => setSaveCardData(!saveCardData)}
            value={saveCardData}
            trackColor={{
              true: '#626ee3',
            }}
          />
        </SwitchView>

        <SubmitButton onPress={handlePurchase}>
          <SubmitButtonText>Purchase AlgoExpert</SubmitButtonText>
        </SubmitButton>
      </Content>
    </Container>
  );
}
