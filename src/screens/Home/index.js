import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Header,
  HTitle,
  ACard,
  ContanerACard,
  CategoriesContainer,
  CategoriesList,
  CategoryCard,
  CategoryText,
  PubsContainer,
  PubText,
  PubsList,
  PubCard
} from './styles';

const Home = () => {
  return (
    <Container>
      <Header>
        <View>
          <HTitle>Escolha a sua</HTitle>
          <HTitle color="#DEA82A">Cerveja!</HTitle>
        </View>
        <ContanerACard>
          <ACard
            name="Thaylan Conceição"
            city="São Paulo"
            image={require('../../assets/Images/profile-image.jpg')}
          />
        </ContanerACard>
      </Header>
      <CategoriesContainer>
        <CategoryText>Categorias</CategoryText>
        <CategoriesList>
          <CategoryCard name="cerveja" color="#F5CB22" />
          <CategoryCard name="cerveja" />
          <CategoryCard name="cerveja" />
          <CategoryCard name="cerveja" />
        </CategoriesList>
      </CategoriesContainer>
      <PubsContainer>
        <PubText>Cervejárias</PubText>
        <PubsList>
          <PubCard name="Cervejaria - Goose Island" address="Av. Presidente Castelo Branco, 102 - SP" />
          <PubCard name="Cervejaria - Goose Island" address="Av. Presidente Castelo Branco, 102 - SP" />
        </PubsList>
      </PubsContainer>
    </Container>
  )
}

export default Home;