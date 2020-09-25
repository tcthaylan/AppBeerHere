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
  CategoryText
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
    </Container>
  )
}

export default Home;