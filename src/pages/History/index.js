import React from 'react';
import LottieView from 'lottie-react-native';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { formatDistance } from 'date-fns';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '~/components/Header';

import { deleteHistory } from '~/store/modules/config/actions';

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
  const dispatch = useDispatch();
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
          option={{
            icon: (
              <MaterialCommunityIcons
                name="delete-sweep"
                size={30}
                color="#02203c"
              />
            ),
            onPress: () =>
              Alert.alert(
                'Delete history',
                'Are you sure you want to delete your history? This action is irreversible.',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'Yes, delete!',
                    onPress: () => dispatch(deleteHistory()),
                  },
                ],
                { cancelable: true }
              ),
          }}
        />
        {history.length > 0 ? (
          <HistoryList>
            {history.map(h => (
              <HistoryComponent key={h.timestamp}>
                <Text>{h.content}</Text>
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
