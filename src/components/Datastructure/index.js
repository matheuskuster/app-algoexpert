/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Thumbnail,
  PlayButton,
  Title,
  Description,
  Watched,
  WatchedText,
  TitleText,
} from './styles';

export default function Datastructure({ item, index }) {
  return (
    <Container
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,

        elevation: 8,
      }}
    >
      <Thumbnail
        imageStyle={{ borderRadius: 6 }}
        source={{ uri: item.formattedThumbnail }}
      >
        <PlayButton>
          <FontAwesome name="play" size={50} color="#fff" />
        </PlayButton>
      </Thumbnail>

      <View style={{ padding: 20 }}>
        <Title>
          {item.watched ? (
            <Watched>
              <MaterialIcons
                name="radio-button-checked"
                size={30}
                color="#67bd57"
              />
              <WatchedText>Watched</WatchedText>
            </Watched>
          ) : (
            <Watched>
              <MaterialIcons
                name="radio-button-unchecked"
                size={30}
                color="#fff"
              />
              <WatchedText>Mark as Watched</WatchedText>
            </Watched>
          )}
          <TitleText>
            {index + 1}. {item.name}
          </TitleText>
        </Title>
        <Description>{item.description}</Description>
      </View>
    </Container>
  );
}
