import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import {
  favoriteRequest,
  unfavoriteRequest,
} from '~/store/modules/question/actions';

import { Container } from './styles';

export default function FavoriteButton({ question }) {
  const dispatch = useDispatch();
  const favoriteQuestions = useSelector(state => state.question.favorites);

  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    const isFavorited = !!favoriteQuestions.filter(
      favoriteQuestion => favoriteQuestion.Name === question.Name
    ).length;

    setFavorited(isFavorited);
  }, [favoriteQuestions, question]);

  function handlePress() {
    if (favorited) {
      dispatch(unfavoriteRequest(question));
    } else {
      dispatch(favoriteRequest(question));
    }

    setFavorited(!favorited);
  }

  return (
    <Container onPress={handlePress}>
      {favorited ? (
        <MaterialIcons name="favorite" color="#f6f9fc" size={30} />
      ) : (
        <MaterialIcons name="favorite-border" color="#f6f9fc" size={30} />
      )}
    </Container>
  );
}
