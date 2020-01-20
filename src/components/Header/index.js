import React from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Background from '~/components/Background';

export default function Header({ navigation }) {
  return (
    <Background>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginLeft: 10,
            marginTop: 30,
          }}
        >
          <MaterialIcons name="chevron-left" size={38} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
