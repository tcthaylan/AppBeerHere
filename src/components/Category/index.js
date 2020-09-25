import React from 'react';
import { Container, Image, Text } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Category = ({ style, image, name }) => {
  return (
    <Container style={style}>
      <Image image={image} />
      <Text>{name}</Text>
      <Icon name="chevron-right-circle" size={22} />
    </Container>
  )
}

export default Category;