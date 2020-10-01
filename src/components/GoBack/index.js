import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container } from './styles';

const GoBack = ({ style, ...rest }) => {
  return (
    <Container style={style} {...rest}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </Container>
  )
}

export default GoBack;