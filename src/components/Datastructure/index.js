/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Video } from 'expo-av';

import { watchRequest, unwatchRequest } from '~/store/modules/video/actions';

import {
  Container,
  Thumbnail,
  PlayButton,
  Title,
  Description,
  Watched,
  WatchedText,
  TitleText,
  Duration,
  Unavailable,
} from './styles';

export default function Datastructure({ item, index }) {
  const dispatch = useDispatch();
  const watchedVideos = useSelector(state => state.video.watched);

  const [watched, setWatched] = useState(false);
  const [watching, setWatching] = useState(false);

  useEffect(() => {
    const exists = !!watchedVideos.filter(video => video.name === item.name)
      .length;

    setWatched(exists);
  }, [watchedVideos, item]);

  function handleWatchPress() {
    if (watched) {
      dispatch(unwatchRequest(item));
    } else {
      dispatch(watchRequest(item));
    }

    setWatched(!watched);
  }

  function handlePlaybackStatus({ positionMillis, durationMillis }) {
    const almostFinishing = durationMillis - positionMillis < 1500;

    if (almostFinishing && !watched) {
      handleWatchPress();
    }
  }

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
        {!watching ? (
          <PlayButton
            onPress={() => setWatching(true)}
            disabled={!item.available}
          >
            <FontAwesome name="play" size={50} color="#fff" />
          </PlayButton>
        ) : (
          <Video
            source={{
              uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            useNativeControls
            style={{
              alignSelf: 'stretch',
              height: 208,
              width: 370,
              borderTopRightRadius: 6,
              borderTopLeftRadius: 6,
            }}
            shouldPlay
            progressUpdateIntervalMillis={1000}
            onPlaybackStatusUpdate={handlePlaybackStatus}
          />
        )}
      </Thumbnail>

      <View style={{ padding: 20 }}>
        <Title>
          {item.available ? (
            <Watched onPress={handleWatchPress}>
              {watched ? (
                <>
                  <MaterialIcons
                    name="radio-button-checked"
                    size={30}
                    color="#67bd57"
                  />
                  <WatchedText>Watched</WatchedText>
                </>
              ) : (
                <>
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={30}
                    color="#fff"
                  />
                  <WatchedText>Mark as Watched</WatchedText>
                </>
              )}
            </Watched>
          ) : (
            <Unavailable>Purchase AlgoExpert to watch this video.</Unavailable>
          )}

          <TitleText>
            {index + 1}. {item.name}
          </TitleText>
        </Title>
        <Description>{item.description}</Description>
        <Duration>Duration: {item.video_duration} min</Duration>
      </View>
    </Container>
  );
}
