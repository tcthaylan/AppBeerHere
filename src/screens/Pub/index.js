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
  {
    name: "English Pale Ale",
    description: "Um dos mais antigos estilos de cerveja, a expressão Pale Ale significa cerveja clara de alta fermentação. A English Pale Ale é também chamada na Inglaterra de English Bitter, por ser uma cerveja perceptivelmente mais amarga. As denominações variam em, Ordinary Bitter, de 3,2% a 3,8% de álcool, Best Bitter, de 3,8% a 4,6% e Extra Strong Bitter (ESB) com teor alcoólico entre 4,6% e 6,2%. Como resultado da baixa carbonatação, uma característica típica desses estilos de cerveja é a pouca formação de espuma.",
    image: require(`../../assets/Images/beers/1.jpg`),
  },
  {
    name: "English Brown Ale",
    description: "As cervejas do estilo English Brown Ale são típicas da Inglaterra, no entanto, com algumas variações regionais: as do norte (Northern English Brown Ale) e as do sul (Southern English Brown Ale). As Northern English Brown Ale são as mais conhecidas. Um estilo que evidencia o sabor e aroma do malte. É uma cerveja seca, com caráter mais próximo a de nozes. As Southern English Brown Ale, conhecido também como London Style. É o estilo de cerveja característico de Londres, mais fortes, maltadas e escuras.",
    image: require(`../../assets/Images/beers/2.jpg`),
  },
  {
    name: "India Pale Ale",
    description: "India Pale Ale ou simplesmente IPA. Uma cerveja do século XVIII, fabricada especialmente para os oficiais do Exército Britânico residente na Índia. Originalmente como uma variação mais lupulada e alcoólica das English Pale Ales. Para ajudar a suportar a longa viagem da Inglaterra para a Índia a bebida era produzida com bastante lúpulo, o que, consequentemente, lhe conferia muito mais amargor, com aroma e sabor fortemente frutado. É uma cerveja que varia na intensidade de amargor e percentual alcoólico, de acordo com as variedades do estilo, como, por exemplo, as English IPA, American IPA e Imperial IPA. Certamente é um dos principais estilos de cerveja do mundo.",
    image: require(`../../assets/Images/beers/3.jpg`),
  },
  {
    name: "Pilsen",
    description: "Também chamado de Pilsner, o estilo surgiu na cidade de Pilsen, região da Bohemia, na Republica Tcheca, com a criação da cerveja Pilsner Urquell. As cervejas Pilsen são caracterizadas por um lúpulo acentuado no aroma e sabor, geralmente da variedade Saaz, e por sua cor dourada brilhante. Podem aparecer em dois estilos de cerveja diferentes: Bohemian Pilsner, representada, por exemplo, pelas thecas Pilsner Urquell e Czechvar e German Pilsner, com a Bitburger, warsteiner e  Konig Oilsener.",
    image: require(`../../assets/Images/beers/4.jpg`),
  },
  {
    name: "Munich Helles",
    description: "O estilo de cerveja Munich Helles foi criado na Alemanha, em 1895, com o objetivo de concorrer com o crescente mercado da Pilsen da Bohemia. É um estilo bem maltado, de cor dourada e com amargor sutil e equilibrado revelado pelo lúpulo. Tem corpo e carbonatação medianos, espuma branca e cremosa e retrogosto de malte. Marcas conhecidas são, por exemplo, a Hofbräu Original e Paulaner Original Munchner Hell.",
    image: require(`../../assets/Images/beers/5.jpg`),
  },
  {
    name: "Vienna Lager",
    description: "O Vienna Lager é um estilo de cerveja, que teve origem em Viena, na Áustria, apresenta uma cerveja com cor variando do vermelho-claro ao cobre, corpo médio e um sabor suave e adocicado de malte levemente tostado que se equilibra com o amargor do lúpulo. Sua graduação alcoólica varia entre 4,7% e 5,5%. Algumas principais marcas disponíveis são, por exemplo, Brooklyn Lager, Samuel Adams Boston Lager e Bierland Vienna.",
    image: require(`../../assets/Images/beers/6.jpg`),
  },
]

const Pub = ({ navigation, route }) => {
  const { params } = route;
  const renderBeerCard = ({ item }) => (
    <BCard
      image={item.image}
      name={item.name}
      description={item.description}
      onPress={() => navigation.navigate('Beer')}
    />
  )
  return (
    <Container>
      <HeaderImage
        image={params.headerImage}
      >
        <GoBack onPress={() => navigation.goBack()} />
        <FavoriteBtn />
        <PubInformations>
          <PubAddress>{params.address}</PubAddress>
          <PubName>{params.name}</PubName>
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