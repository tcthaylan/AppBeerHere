import React from 'react';
import { Container, Title, Description, Image } from './styles';

const CardPubMaps = ({ title, description, image, ...rest }) => {
  return (
    <Container {...rest}>
      <Image image={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default CardPubMaps;