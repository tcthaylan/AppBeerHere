import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPubs } from '../../store/actions/pub'
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
  {
    id: 1,
    name: "Soroko's Bar",
    description: "Em ambiente sofisticado e convidativo o bar serve coquetéis chamativos entre cervejas artesanais e petiscos.",
    image: require(`../../assets/Images/pubs/1.jpg`),
    address: "R. Augusta, 550 - Consolação, São Paulo",
  },
  {
    id: 2,
    name: "Caixote Bar",
    description: "Drinques clássicos e contemporâneos, cervejas, em espaço descolado com bar feito de engradados de cerveja.",
    image: require(`../../assets/Images/pubs/2.jpg`),
    address: "R. Augusta, 914 - Cerqueira César, São Paulo - SP"
  },
  {
    id: 3,
    name: "Ball Five",
    description: "Quatro grandes mesas de bilhar são a grande atração do bar, que destoa de outras casas da rua Augusta, de estilo mais alternativo.",
    image: require(`../../assets/Images/pubs/3.jpg`),
    address: "R. Augusta, 1149 - Consolação, São Paulo - SP"
  },
  {
    id: 4,
    name: "The Blue Pub",
    description: "Ambiente agradável e simples com partidas de futebol em telonas acompanhadas de cerveja e porções.",
    image: require(`../../assets/Images/pubs/4.jpg`),
    address: "Alameda Ribeirão Preto, 384 - Bela Vista, São Paulo - SP"
  },
  {
    id: 5,
    name: "Asterix Cervejaria",
    description: "Cervejaria com ampla variedade de rótulos nacionais e importados, petiscos e sanduíches em ambiente despojado.",
    image: require(`../../assets/Images/pubs/5.jpg`),
    address: "Alameda Joaquim Eugênio de Lima, 573 - Jardim Paulista, São Paulo - SP"
  },
  {
    id: 6,
    name: "Titus Bar",
    description: "Bar agradável e aconchegante com lista de cervejas artesanais e música ao vivo em certos dias.",
    image: require(`../../assets/Images/pubs/6.jpg`),
    address: "R. Rocha, 370 - Bela Vista, São Paulo - SP"
  },
]

const Home = ({ navigation, pub, getPubs }) => {
  useEffect(() => {
    const getData = async () => {
      await getPubs()
    }
    getData()
  }, [])

  const renderCategory = ({ item }) => (
    <CategoryCard name="cerveja" color={item.color} />
  )

  const renderPubCard = ({ item }) => {
    return (
      <PubCard
        image={item.image}
        name={item.name}
        address={item.address}
        onPress={() => navigation.navigate('Pub', {
          name: item.name,
          address: item.address,
          headerImage: item.image
        })}
      />
    )
  }

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

        {pub.loading ? (
          <Text>Loading</Text>
        ) : (
            <>
              <PubText>Cervejárias</PubText>
              <FlatList
                data={pubs}
                renderItem={renderPubCard}
              />
            </>
          )}
      </PubsContainer>
    </Container>
  )
}

const mapStateToProps = state => ({ pub: state.pub })
const mapDispatchToProps = dispatch => bindActionCreators({ getPubs }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)