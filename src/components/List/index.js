import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Title,
  TitleText,
  Subtitle,
  StyledList,
  FinalComponent,
  Left,
  CloseButton,
} from './styles';

export default function List({
  title,
  subtitle,
  disabled,
  close,
  setNoHeader,
  ...rest
}) {
  return (
    <Container>
      <Title disabled={disabled}>
        <Left>
          <TitleText>{title}</TitleText>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Left>

        {close && (
          <CloseButton onPress={setNoHeader}>
            <MaterialCommunityIcons name="close" size={30} />
          </CloseButton>
        )}
      </Title>

      <StyledList {...rest} ListFooterComponent={<FinalComponent />} />
    </Container>
  );
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  horizontal: PropTypes.bool,
  numColumns: PropTypes.number,
  disabled: PropTypes.bool,
  close: PropTypes.bool,
};

List.defaultProps = {
  subtitle: null,
  horizontal: false,
  numColumns: 1,
  disabled: false,
  close: false,
};
