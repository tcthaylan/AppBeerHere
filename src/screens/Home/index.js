import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {
  Container,
  Header,
  HTitle,
  ACard,
  ContainerACard,
  CategoriesContainer,
  CategoriesList,
  CategoryCard,
  CategoryText,
  PubsContainer,
  PubText,
  PubsList,
  PubCard
} from './styles';

const categories = [
  { name: 'Cerveja', color: '#F5CB22' },
  { name: 'Cerveja', color: '#fff' },
  { name: 'Cerveja', color: '#fff' },
  { name: 'Cerveja', color: '#fff' },
  { name: 'Cerveja', color: '#fff' }
]

const pubs = [
  { name: "Cervejaria - Goose Island", address: "Av. Presidente Castelo Branco, 102 - SP" },
  { name: "Cervejaria - Goose Island", address: "Av. Presidente Castelo Branco, 102 - SP" },
  { name: "Cervejaria - Goose Island", address: "Av. Presidente Castelo Branco, 102 - SP" },
]

const Home = ({ navigation }) => {

  const renderCategory = ({ item }) => (
    <CategoryCard name="cerveja" color={item.color} />
  )

  const renderPubCard = ({ item }) => (
    <PubCard
      name="Cervejaria - Goose Island"
      address="Av. Presidente Castelo Branco, 102 - SP"
    // onPress={() => navigation.navigate('Pub')}
    />
  )

  return (
    <Container>
      <Header>
        <View>
          <HTitle>Escolha a sua</HTitle>
          <HTitle color="#DEA82A">Cerveja!</HTitle>
        </View>
        <ContainerACard>
          <ACard
            name="Thaylan Conceição"
            city="São Paulo"
            image={require('../../assets/Images/profile-image.jpg')}
          />
        </ContainerACard>
      </Header>
      <CategoriesContainer>
        <CategoryText>Categorias</CategoryText>
        <CategoriesList>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            horizontal
          />
        </CategoriesList>
      </CategoriesContainer>
      <PubsContainer>
        <PubText>Cervejárias</PubText>
        <FlatList
          data={pubs}
          renderItem={renderPubCard}
        />
      </PubsContainer>
    </Container>
  )
}

export default Home;