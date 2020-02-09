import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import api from '~/services/api';

import Header from '~/components/Header';

import {
  Container,
  Content,
  TipContainer,
  TipHeader,
  TipTitle,
  PlayButton,
  TipBody,
  TipDescription,
  PlayButtonText,
} from './styles';

export default function Tips({ navigation }) {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTips() {
      const response = await api.get('/problems/v1/tips');

      setTips(response.data);
      setLoading(false);
    }

    loadTips();
  }, []);

  return (
    <Container>
      <Content>
        <Header
          title="Tips & Tricks"
          navigation={navigation}
          description="What'll make you stand out."
        />

        {loading ? (
          <ActivityIndicator
            style={{
              marginTop: 20,
            }}
            size="large"
          />
        ) : (
          tips.map(tip => (
            <TipContainer
              key={tip.name}
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
              <TipHeader>
                <TipTitle>{tip.title}</TipTitle>
              </TipHeader>
              <TipBody>
                <TipDescription>{tip.description}</TipDescription>

                {tip.available ? (
                  <PlayButton>
                    <PlayButtonText>Play</PlayButtonText>
                    <MaterialIcons
                      name="play-arrow"
                      size={35}
                      color="#02203c"
                    />
                  </PlayButton>
                ) : (
                  <PlayButton disabled>
                    <PlayButtonText
                      style={{
                        marginRight: 8,
                      }}
                    >
                      Unavailable
                    </PlayButtonText>
                    <MaterialIcons
                      name="do-not-disturb-alt"
                      size={30}
                      color="#02203c"
                    />
                  </PlayButton>
                )}
              </TipBody>
            </TipContainer>
          ))
        )}
      </Content>
    </Container>
  );
}
