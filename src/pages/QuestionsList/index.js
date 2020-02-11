import React, { useState } from 'react';
import { Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '~/components/Header';

import Difficulty from './Difficulty';
import Category from './Category';
import Favorites from './Favorites';

import {
  Container,
  Content,
  ModalView,
  ModalTitle,
  Options,
  Option,
  OptionButton,
  OptionText,
  CancelButton,
  CancelButtonText,
} from './styles';

export default function QuestionsList({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [group, setGroup] = useState('Difficulty');

  const categories = navigation.getParam('categories');
  const questions = navigation.getParam('questions');

  function handlePress(data) {
    setGroup(data);
    setModalVisible(false);
  }

  function handleContent() {
    if (group === 'Difficulty') {
      return <Difficulty navigation={navigation} questions={questions} />;
    }

    if (group === 'Category') {
      return <Category navigation={navigation} categories={categories} />;
    }

    return <Favorites navigation={navigation} />;
  }

  return (
    <Container>
      <Content>
        <Header
          navigation={navigation}
          title={group}
          option={{
            icon: (
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={30}
                color="#02203c"
              />
            ),
            onPress: () => setModalVisible(true),
          }}
        />

        {handleContent()}

        <Modal animationType="fade" transparent visible={modalVisible}>
          <ModalView>
            <Options>
              <ModalTitle>Group By</ModalTitle>

              <Option>
                <OptionButton onPress={() => handlePress('Favorites')}>
                  <OptionText>Favorites</OptionText>
                </OptionButton>
              </Option>

              <Option>
                <OptionButton onPress={() => handlePress('Category')}>
                  <OptionText>Category</OptionText>
                </OptionButton>
              </Option>

              <Option>
                <OptionButton onPress={() => handlePress('Difficulty')}>
                  <OptionText>Difficulty</OptionText>
                </OptionButton>
              </Option>
            </Options>

            <CancelButton onPress={() => setModalVisible(false)}>
              <CancelButtonText>Cancel</CancelButtonText>
            </CancelButton>
          </ModalView>
        </Modal>
      </Content>
    </Container>
  );
}
