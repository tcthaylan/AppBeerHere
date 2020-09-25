import React from 'react';
import { Container, Text } from './styles';

const Button = ({ style, children }) => {
  return (
    <Container style={style}>
      <Text>{children}</Text>
    </Container>
  )
}

export default Button;