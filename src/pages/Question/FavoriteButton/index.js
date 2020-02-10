import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';

export default function FavoriteButton({ question }) {
  const [favoriteQuestions, setFavoriteQuestions] = useState([]);

  useEffect(() => {
    async function retrieveFavoriteQuestions() {
      const data = await AsyncStorage.getItem('favorite_questions');

      setFavoriteQuestions(JSON.parse(data) || []);
    }

    retrieveFavoriteQuestions();
  }, []);

  async function storeFavoriteQuestions(data) {
    await AsyncStorage.setItem('favorite_questions', JSON.stringify(data));
  }

  function handleFavorite() {
    const data = [...favoriteQuestions, question.Name];

    setFavoriteQuestions(data);
    storeFavoriteQuestions(data);
  }

  function handleUnfavorite() {
    const data = favoriteQuestions.filter(
      favorite => favorite !== question.Name
    );

    setFavoriteQuestions(data);
    storeFavoriteQuestions(data);
  }

  return favoriteQuestions && favoriteQuestions.includes(question.Name) ? (
    <Container onPress={handleUnfavorite}>
      <MaterialIcons name="favorite" color="#f6f9fc" size={30} />
    </Container>
  ) : (
    <Container onPress={handleFavorite}>
      <MaterialIcons name="favorite-border" color="#f6f9fc" size={30} />
    </Container>
  );
}
