import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import {
  Container,
  Title,
  TitleText,
  Subtitle,
  TipsBox,
  Tip,
  TipTitle,
} from './styles';

export default function Tips() {
  const [tips, setTips] = useState(null);

  useEffect(() => {
    async function loadTips() {
      const response = await api.get('/problems/v1/tips');

      setTips(response.data);
    }

    loadTips();
  }, []);

  return (
    <Container>
      <Title>
        <TitleText>Tips & Tricks</TitleText>
        <Subtitle>What&apos;ll make you stand out</Subtitle>
      </Title>

      <TipsBox>
        {tips &&
          tips.map(tip => (
            <Tip
              key={tip.name}
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4.65,

                elevation: 8,
              }}
            >
              <TipTitle>{tip.name}</TipTitle>
            </Tip>
          ))}
      </TipsBox>
    </Container>
  );
}
