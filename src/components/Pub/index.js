import React from 'react';
import { View } from 'react-native';

import { Container, About, Name, Address, Image } from './styles';

const Pub = ({ style, name, address }) => {
  return (
    <Container style={style} >
      <Image />
      <About>
        <Name>{name}</Name>
        <Address>{address}</Address>
      </About>
    </Container>
  )
}

export default Pub;