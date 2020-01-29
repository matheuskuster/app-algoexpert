import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import topics from '~/../assets/data/topics';

import FAQBox from '~/components/FAQBox';
import Header from '~/components/Header';
import Input from '~/components/Input';

import CategoryInput from './CategoryInput';

import {
  Container,
  Content,
  Contact,
  Title,
  Description,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function Help({ navigation }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit() {
    if (name && email && category && message) {
      Alert.alert(
        'Your question was successfully sent. We will work to answer it as quickly as possible.'
      );

      setName('');
      setEmail('');
      setMessage('');
    } else {
      Alert.alert('Please fill all the fields.');
    }
  }

  return (
    <Container>
      <Content>
        <Header navigation={navigation} />

        {topics &&
          topics.map(topic => <FAQBox key={topic.title} topic={topic} />)}

        <Contact>
          <Title>Contact Us</Title>
          <Description>
            Please check our FAQ before contacting us! We will not reply to
            questions that are answered in our FAQ.
          </Description>

          <Input
            label="Name"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Daenerys Targaryen"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            ref={nameRef}
            onChange={setName}
            value={name}
          />

          <Input
            label="E-mail address"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="motherofdragons@gmail.com"
            ref={emailRef}
            onChange={setEmail}
            value={email}
          />

          <CategoryInput setCategory={setCategory} />

          <Input
            label="Message:"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Dracarys."
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            multiline
            ref={messageRef}
            onChange={setMessage}
            value={message}
          />

          <SubmitButton
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
            onPress={handleSubmit}
          >
            <FontAwesome name="send" color="#fff" size={18} />
            <SubmitButtonText>Send</SubmitButtonText>
          </SubmitButton>
        </Contact>
      </Content>
    </Container>
  );
}
