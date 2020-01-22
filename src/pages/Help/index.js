import React, { useRef } from 'react';

import topics from '~/../assets/data/topics';

import FAQBox from '~/components/FAQBox';
import Header from '~/components/Header';
import Input from '~/components/Input';

import { Container, Contact, Title, Description } from './styles';

export default function Help({ navigation }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const categoryRef = useRef(null);

  return (
    <Container>
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
          autoCorret={false}
          autoCapitalize="none"
          placeholder="Daenerys Targaryen"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          ref={nameRef}
        />

        <Input
          label="E-mail address"
          autoCorret={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="motherofdragons@gmail.com"
          returnKeyType="next"
          onSubmitEditing={() => categoryRef.current.focus()}
          ref={emailRef}
        />
      </Contact>
    </Container>
  );
}
