import React, { useState } from 'react';
import { Switch, Modal, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  switchRecordHistory,
  switchShowFavorites,
  changeLanguage,
  changeMaxHistory,
  changeDifficulty,
} from '~/store/modules/config/actions';

import languages from '~/assets/data/languages';
import formatDifficulty from '~/util/question';

import Header from '~/components/Header';

import {
  Container,
  Content,
  SettingsView,
  Setting,
  Left,
  SettingText,
  SettingDescription,
  PickerButton,
  PickerButtonText,
  ModalView,
  ModalTitle,
  Options,
  Option,
  OptionButton,
  OptionText,
  CancelButton,
  CancelButtonText,
} from './styles';

export default function Settings({ navigation }) {
  const dispatch = useDispatch();

  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [historyModalVisible, setHistoryModalVisible] = useState(false);
  const [difficultyModalVisible, setDifficultyModalVisible] = useState(false);

  const showFavorites = useSelector(state => state.config.showFavorites);
  const recordHistory = useSelector(state => state.config.recordHistory);
  const favoriteLanguage = useSelector(state => state.config.favoriteLanguage);
  const maxHistory = useSelector(state => state.config.maxHistory);
  const difficulty = useSelector(state => state.config.difficulty);

  function dismissModals() {
    setLanguageModalVisible(false);
    setHistoryModalVisible(false);
    setDifficultyModalVisible(false);
  }

  function handleDifficultyPress() {
    Alert.alert(
      'Change difficulty',
      'Our app auto sets the best difficulty that fits for you based on your question solutions history. Are you sure you want to change the difficulty?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes, let me change it!',
          onPress: () => setDifficultyModalVisible(true),
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <Container>
      <Content>
        <Header navigation={navigation} title="Settings" />

        <SettingsView>
          <Setting>
            <Left>
              <SettingText>Show Favorite Questions</SettingText>
              <SettingDescription>
                Your favorite questions will appear at the home page.
              </SettingDescription>
            </Left>
            <Switch
              onValueChange={() => dispatch(switchShowFavorites())}
              value={showFavorites}
              trackColor={{
                true: '#02203c',
              }}
            />
          </Setting>

          <Setting>
            <Left>
              <SettingText>Record History</SettingText>
              <SettingDescription>
                All your actions in the app will be saved in memory.
              </SettingDescription>
            </Left>
            <Switch
              onValueChange={() => dispatch(switchRecordHistory())}
              value={recordHistory}
              trackColor={{
                true: '#02203c',
              }}
            />
          </Setting>

          <Setting>
            <Left>
              <SettingText>Max History Record</SettingText>
              <SettingDescription>
                When reached, past actions will be deleted from memory.
              </SettingDescription>
            </Left>

            <PickerButton onPress={() => setHistoryModalVisible(true)}>
              <PickerButtonText>{maxHistory}</PickerButtonText>
            </PickerButton>
          </Setting>

          <Setting>
            <Left>
              <SettingText>Favorite Language</SettingText>
              <SettingDescription>
                The solutions will firstly be in that language.
              </SettingDescription>
            </Left>

            <PickerButton onPress={() => setLanguageModalVisible(true)}>
              <PickerButtonText>
                {languages[favoriteLanguage].formatted}
              </PickerButtonText>
            </PickerButton>
          </Setting>

          <Setting>
            <Left>
              <SettingText>Difficulty</SettingText>
              <SettingDescription>
                The recommended questions difficulty.
              </SettingDescription>
            </Left>

            <PickerButton onPress={handleDifficultyPress}>
              <PickerButtonText>
                {formatDifficulty({
                  Difficulty: difficulty,
                })}
              </PickerButtonText>
            </PickerButton>
          </Setting>
        </SettingsView>
      </Content>

      <Modal animationType="fade" transparent visible={languageModalVisible}>
        <ModalView>
          <Options>
            <ModalTitle>Favorite Language</ModalTitle>

            {Object.keys(languages).map(language => (
              <Option key={language}>
                <OptionButton
                  onPress={() =>
                    dispatch(changeLanguage(language)) && dismissModals()
                  }
                >
                  <OptionText>{languages[language].formatted}</OptionText>
                </OptionButton>
              </Option>
            ))}
          </Options>

          <CancelButton onPress={() => dismissModals()}>
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButton>
        </ModalView>
      </Modal>

      <Modal animationType="fade" transparent visible={historyModalVisible}>
        <ModalView>
          <Options>
            <ModalTitle>Max History Record</ModalTitle>

            <Option>
              <OptionButton
                onPress={() =>
                  dispatch(changeMaxHistory(20)) && dismissModals()
                }
              >
                <OptionText>20</OptionText>
              </OptionButton>
            </Option>

            <Option>
              <OptionButton
                onPress={() =>
                  dispatch(changeMaxHistory(50)) && dismissModals()
                }
              >
                <OptionText>50</OptionText>
              </OptionButton>
            </Option>

            <Option>
              <OptionButton
                onPress={() =>
                  dispatch(changeMaxHistory(80)) && dismissModals()
                }
              >
                <OptionText>80</OptionText>
              </OptionButton>
            </Option>

            <Option>
              <OptionButton
                onPress={() =>
                  dispatch(changeMaxHistory(100)) && dismissModals()
                }
              >
                <OptionText>100</OptionText>
              </OptionButton>
            </Option>
          </Options>

          <CancelButton onPress={() => dismissModals()}>
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButton>
        </ModalView>
      </Modal>

      <Modal animationType="fade" transparent visible={difficultyModalVisible}>
        <ModalView>
          <Options>
            <ModalTitle>Difficulty</ModalTitle>

            <Option>
              <OptionButton
                onPress={() => dispatch(changeDifficulty(1)) && dismissModals()}
              >
                <OptionText>Easy</OptionText>
              </OptionButton>
            </Option>

            <Option>
              <OptionButton
                onPress={() => dispatch(changeDifficulty(2)) && dismissModals()}
              >
                <OptionText>Medium</OptionText>
              </OptionButton>
            </Option>

            <Option>
              <OptionButton
                onPress={() => dispatch(changeDifficulty(3)) && dismissModals()}
              >
                <OptionText>Hard</OptionText>
              </OptionButton>
            </Option>

            <Option>
              <OptionButton
                onPress={() => dispatch(changeDifficulty(4)) && dismissModals()}
              >
                <OptionText>Very Hard</OptionText>
              </OptionButton>
            </Option>

            <Option>
              <OptionButton
                onPress={() => dispatch(changeDifficulty(5)) && dismissModals()}
              >
                <OptionText>Extremely Hard</OptionText>
              </OptionButton>
            </Option>
          </Options>

          <CancelButton onPress={() => dismissModals()}>
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButton>
        </ModalView>
      </Modal>
    </Container>
  );
}
