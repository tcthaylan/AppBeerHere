import React from 'react';
import { View, Text } from 'react-native';

import { Container, BeerImage, Footer } from './styles';

const BeerCard = () => {
  return (
    <Container>
      {/* <BeerImage /> */}
      <Footer>
        <Text>4,5</Text>
      </Footer>
    </Container>
  )
}

export default BeerCard;