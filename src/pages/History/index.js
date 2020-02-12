import React from 'react';
import { useSelector } from 'react-redux';
import { formatDistance } from 'date-fns';
import LottieView from 'lottie-react-native';

import Header from '~/components/Header';

import notFound from '~/../assets/not-found.json';

import {
  Container,
  Content,
  HistoryList,
  HistoryComponent,
  Text,
  Time,
  NotFoundView,
  NotFoundText,
  NotFoundAdvice,
} from './styles';

export default function History({ navigation }) {
  const maxHistoryLength = useSelector(state => state.config.maxHistory);
  const history = useSelector(state =>
    state.config.history.map(h => ({
      ...h,
      formattedTime: formatDistance(h.timestamp, new Date()),
    }))
  );

  return (
    <Container>
      <Content>
        <Header
          navigation={navigation}
          title="History"
          description={`Showing ${
            history.length < maxHistoryLength
              ? history.length
              : maxHistoryLength
          } of ${history.length} results`}
        />
        {history.length > 0 ? (
          <HistoryList>
            {history.map(h => (
              <HistoryComponent>
                <Text key={h.timestamp}>{h.content}</Text>
                <Time>{h.formattedTime}</Time>
              </HistoryComponent>
            ))}
          </HistoryList>
        ) : (
          <NotFoundView>
            <LottieView
              style={{
                width: 500,
                height: 500,
              }}
              source={notFound}
              autoPlay
              autoSize
            />
            <NotFoundText>
              It seems there&apos;s nothing to show here
            </NotFoundText>
            <NotFoundAdvice>
              Go ahead and do something in the app :)
            </NotFoundAdvice>
          </NotFoundView>
        )}
      </Content>
    </Container>
  );
}
