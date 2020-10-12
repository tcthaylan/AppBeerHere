import React from 'react';
import { Container, Title, Description, Image } from './styles';

const CardPubMaps = ({ title, description, ...rest }) => {
  return (
    <Container {...rest}>
      <Image />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default CardPubMaps;