import React, { forwardRef } from 'react';
import { Animated } from 'react-native';

import { Container, StyledInput, Label, Border } from './styles';

function Input({ label, inputSize, spaced, ...rest }, ref) {
  const width = new Animated.Value(0);

  function onFocus() {
    Animated.timing(width, {
      toValue: 1,
      timing: 300,
    }).start();
  }

  function onBlur() {
    Animated.timing(width, {
      toValue: 0,
      timing: 300,
    }).start();
  }

  function maxBorderWidth() {
    return `${95 - (100 - Number(inputSize.replace('%', ''))) / 8}%`;
  }

  return (
    <Container spaced={spaced} inputSize={inputSize}>
      {label && <Label>{label}</Label>}
      <StyledInput
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
        onBlur={onBlur}
        onFocus={onFocus}
        ref={ref}
        {...rest}
      />
      <Border
        style={{
          width: width.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', inputSize ? maxBorderWidth() : '95%'],
            extrapolate: 'clamp',
          }),
        }}
      />
    </Container>
  );
}

export default forwardRef(Input);
