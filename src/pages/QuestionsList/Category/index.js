import React from 'react';
import { View } from 'react-native';

import GroupedQuestions from '~/components/GroupedQuestions';

export default function Category({ categories, navigation }) {
  const defaultTheme = {
    primary: '#ccc',
    secondary: '#f6f0fc',
    letters: '#02203c',
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      {Object.keys(categories).map(categoryName => (
        <GroupedQuestions
          key={categoryName}
          questions={categories[categoryName].questions}
          title={categoryName}
          theme={defaultTheme}
          navigation={navigation}
        />
      ))}
    </View>
  );
}
