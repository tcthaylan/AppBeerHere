import React from 'react';
import { Container, Text } from './styles';

const Button = ({ style, children, ...rest }) => {
  return (
    <Container style={style} {...rest}>
      <Text>{children}</Text>
    </Container>
  )
}

export default Button;