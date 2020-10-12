import React from 'react';
import { View, Text } from 'react-native';

import { Container, BeerImage, BeerTextContainer, BeerName, BeerDescription } from './styles';

const BeerCard = ({ style, name, description, image, ...rest }) => {
  return (
    <Container style={style} {...rest}>
      <BeerImage image={image} />
      <BeerTextContainer>
        <BeerName>{name}</BeerName>
        <BeerDescription>{description}</BeerDescription>
      </BeerTextContainer>
    </Container>
  )
}

export default BeerCard;