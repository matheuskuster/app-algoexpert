import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

function usePersistedState(key, initialState) {
  const [state, setState] = useState(async () => {
    const storageValue = await AsyncStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    async function storeState() {
      await AsyncStorage.setItem(key, JSON.stringify(state));
    }

    storeState();
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
