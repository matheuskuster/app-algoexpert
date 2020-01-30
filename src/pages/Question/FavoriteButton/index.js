import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';

export default function FavoriteButton({ favorite }) {
  const [favoriteState, setFavoriteState] = useState(favorite);

  function handleFavorite() {
    setFavoriteState(!favoriteState);
  }

  return (
    <Container onPress={handleFavorite}>
      {favoriteState ? (
        <MaterialIcons name="favorite" color="#f6f9fc" size={30} />
      ) : (
        <MaterialIcons name="favorite-border" color="#f6f9fc" size={30} />
      )}
    </Container>
  );
}
