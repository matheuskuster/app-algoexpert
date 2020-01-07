import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  TitleText,
  Subtitle,
  StyledList,
  FinalComponent,
} from './styles';

export default function List({ title, subtitle, ...rest }) {
  return (
    <Container>
      <Title>
        <TitleText>{title}</TitleText>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
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
};

List.defaultProps = {
  subtitle: null,
  horizontal: false,
  numColumns: 1,
};
