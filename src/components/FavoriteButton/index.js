import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container } from './styles';

const FavoriteButton = ({ style, ...rest }) => {
  return (
    <Container style={style} {...rest}>
      <Icon name="heart" size={20} color="#FF4645" />
    </Container>
  )
}

export default FavoriteButton;