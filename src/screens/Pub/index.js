import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GoBack from '../../components/GoBack';
import HeaderImage from '../../components/HeaderImage';
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
  BeersContainer,
  BCard
} from './styles';

const beers = [
  { name: 'Bierbaum Weiss Helles', description: 'Cerveja Artesanal Brasileira Bierbaum Weiss Helles 600ml' },
  { name: 'Bierbaum Weiss Helles', description: 'Cerveja Artesanal Brasileira Bierbaum Weiss Helles 600ml' },
  { name: 'Bierbaum Weiss Helles', description: 'Cerveja Artesanal Brasileira Bierbaum Weiss Helles 600ml' },
  { name: 'Bierbaum Weiss Helles', description: 'Cerveja Artesanal Brasileira Bierbaum Weiss Helles 600ml' },
]

const Pub = ({ navigation }) => {

  const renderBeerCard = ({ item }) => (
    <BCard
      name={item.name}
      description={item.description}
      onPress={() => navigation.navigate('Beer')}
    />
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