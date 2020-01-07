/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import { StyledButton } from './styles';

export default function Button({ color, children }) {
  const dispatch = useDispatch();

  function handlePress() {
    dispatch(signInRequest());
  }

  return (
    <StyledButton onPress={handlePress} color={color}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  color: PropTypes.string,
};

Button.defaultProps = {
  color: '#fff',
};
