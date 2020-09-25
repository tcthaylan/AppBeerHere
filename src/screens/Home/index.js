import React from 'react';
import { View } from 'react-native';
import { Container, Header, HTitle, ACard, ContanerACard } from './styles';

const Home = () => {
  return (
    <Container>
      <Header>
        <View>
          <HTitle>Choose your</HTitle>
          <HTitle color="#DEA82A">Beer!</HTitle>
        </View>
        <ContanerACard>
          <ACard
            name="Thaylan Conceição"
            city="São Paulo"
            image={require('../../assets/Images/profile-image.jpg')}
          />
        </ContanerACard>
      </Header>
    </Container>
  )
}

export default Home;