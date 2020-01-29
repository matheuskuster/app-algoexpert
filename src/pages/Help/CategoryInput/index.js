import React, { useState, useEffect } from 'react';
import { PickerIOS } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Label, CategoryButton, CategoryText } from './styles';

import categories from '~/../assets/data/categories';

export default function CategoryInput({ setCategory }) {
  const [opened, setOpened] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(null);
  const [categoryLabel, setCategoryLabel] = useState(null);

  useEffect(() => {
    setCategoryLabel(categories[categoryIndex]);
    setCategory(categories[categoryIndex]);
  }, [categoryIndex]); //eslint-disable-line

  return (
    <Container>
      <Label>Category</Label>
      <CategoryButton
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
        onPress={() => setOpened(!opened)}
      >
        <CategoryText choosed={!!categoryLabel}>
          {categoryLabel || 'Why are you contacting us?'}
        </CategoryText>
        <MaterialCommunityIcons name="chevron-down" color="#02203c" size={18} />
      </CategoryButton>

      {opened && (
        <PickerIOS
          selectedValue={categoryIndex}
          onValueChange={item => setCategoryIndex(item)}
        >
          {categories.map((category, index) => (
            <PickerIOS.Item key={category} label={category} value={index} />
          ))}
        </PickerIOS>
      )}
    </Container>
  );
}
