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

export default function Categories({ data: categories }) {
  return (
    <Container>
      <Title>
        <TitleText>Categories</TitleText>
        <Subtitle>Browse through categories</Subtitle>
      </Title>

      {Object.keys(categories).map((category, index) => {
        if (index % 2 === 0) {
          return (
            <CategoryGroup key={category}>
              <Category
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
                  {categories[category].icon}
                </CategoryFooter>
              </Category>

              <Category
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
                  {categories[Object.keys(categories)[index + 1]].icon}
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
