/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';

import {
  Container,
  Title,
  TitleText,
  Subtitle,
  CategoryGroup,
  Category,
  CategoryName,
  CategoryFooter,
  NumberOfQuestions,
} from './styles';

export default function Categories({ data: categories, navigation }) {
  return (
    <Container>
      <Title>
        <TitleText>Categories</TitleText>
        <Subtitle>Browse through categories</Subtitle>
      </Title>

      {Object.keys(categories).map((category, index) => {
        if (index % 2 === 0) {
          const { type: FirstIcon, name: firstName } = categories[
            category
          ].icon;
          const { type: SecondIcon, name: secondName } = categories[
            Object.keys(categories)[index + 1]
          ].icon;

          return (
            <CategoryGroup key={category}>
              <Category
                onPress={() =>
                  navigation.navigate('Category', {
                    category: categories[category],
                  })
                }
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 4.65,

                  elevation: 8,
                }}
              >
                <CategoryName>{category}</CategoryName>
                <CategoryFooter>
                  <NumberOfQuestions>
                    0 / {categories[category].questions.length}
                  </NumberOfQuestions>
                  <FirstIcon name={firstName} size={30} color="#02203c" />
                </CategoryFooter>
              </Category>

              <Category
                onPress={() =>
                  navigation.navigate('Category', {
                    category: categories[Object.keys(categories)[index + 1]],
                  })
                }
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 4.65,

                  elevation: 8,
                }}
              >
                <CategoryName>
                  {Object.keys(categories)[index + 1]}
                </CategoryName>
                <CategoryFooter>
                  <NumberOfQuestions>
                    0 /{' '}
                    {
                      categories[Object.keys(categories)[index + 1]].questions
                        .length
                    }
                  </NumberOfQuestions>
                  <SecondIcon name={secondName} size={30} color="#02203c" />
                </CategoryFooter>
              </Category>
            </CategoryGroup>
          );
        }

        return <View key={category} />;
      })}
    </Container>
  );
}
