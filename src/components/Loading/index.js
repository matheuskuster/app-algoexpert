import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import loading from '~/../assets/loading.json';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <LottieView source={loading} autoPlay autoSize />
    </View>
  );
}
