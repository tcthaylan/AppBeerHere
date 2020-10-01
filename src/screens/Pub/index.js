import React from 'react';
import { View, Text } from 'react-native';
import GoBack from '../../components/GoBack';
import HeaderImage from '../../components/HeaderImage'
import { Container, PubTitle, PubDescription } from './styles';

const Pub = ({ navigation }) => {
  return (
    <Container>
      <HeaderImage>
        <GoBack onPress={() => navigation.goBack()} />
      </HeaderImage>
    </Container>
  )
}

export default Pub;