import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GoBack from '../../components/GoBack';
import HeaderImage from '../../components/HeaderImage';
import BeerCard from '../../components/BeerCard'
import {
  Container,
  PubTitle,
  FavoriteBtn,
  PubInformations,
  PubName,
  PubAddress,
  ContainerTags,
  PubCategory,
  Menu,
  MenuText,
  BeersContainer
} from './styles';

const beers = [
  { name: 'asfdasd' },
  { name: 'asfdasd' },
  { name: 'asfdasd' },
]

const Pub = ({ navigation }) => {

  const renderBeerCard = ({ item }) => (
    <BeerCard />
  )

  return (
    <Container>
      <HeaderImage>
        <GoBack onPress={() => navigation.goBack()} />
        <FavoriteBtn />
        <PubInformations>
          <PubAddress>Av. Presidente Castelo Branco, 102 - SP</PubAddress>
          <PubName>Cervejaria - Goose Island</PubName>
          <ContainerTags>
            <PubCategory>Cerveja</PubCategory>
            <PubCategory>Cerveja</PubCategory>
            <PubCategory>Cerveja</PubCategory>
          </ContainerTags>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
            <Icon name="star" size={24} color="#F5CB22" />
            <Text style={{ color: '#fff', fontSize: 18, marginLeft: 5 }}>4,55</Text>
          </View>
        </PubInformations>
      </HeaderImage>
      <Menu>
        <MenuText>Cardápio</MenuText>
      </Menu>
      <BeersContainer>
        <FlatList
          data={beers}
          renderItem={renderBeerCard}
        />
      </BeersContainer>
    </Container>
  )
}

export default Pub;