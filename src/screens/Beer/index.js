import React from 'react';
import { View, Text } from 'react-native';
import { Container, BackButton, FavoriteBtn, HImage, ContainerDescription, PizzaName, PizzaDescription, Menu, MenuText } from './styles';

const Beer = ({ navigation }) => {
  return (
    <Container>
      <HImage>
        <BackButton onPress={() => { navigation.navigate('Pub') }} />
        <FavoriteBtn />
        <ContainerDescription>
          <PizzaName>Bierbaum Weiss Helles</PizzaName>
          <PizzaDescription>Cerveja Artesanal Brasileira Bierbaum Weiss Helles 600ml</PizzaDescription>
        </ContainerDescription>
      </HImage>
      <Menu>
        <MenuText>Sobre</MenuText>
      </Menu>
      <View style={{ justifyContent: "flex-start", alignItems: "flex-start", height: 300, paddingHorizontal: 15, paddingVertical: 5 }}>
        <Text style={{ marginBottom: 8 }}><Text style={{ fontWeight: 'bold' }}>Descrição</Text>Cerveja clara de trigo de alta fermentação. Usando em sua formulação apenas malte de trigo e cevada. Por ser uma cerveja de alta fermentação e baixo teor alcoólico, a sensação é de uma cerveja leve e refrescante. A coloração amarela clara e turva, e uma boa formação de creme denso e persistente, são características próprias das cervejas de Trigo Européias.</Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Teor Alcoólico:</Text> 4,9%Vol.</Text>
        <Text><Text style={{ fontWeight: 'bold' }}>IBU:</Text> Índice de Amargor: 08 IBU.</Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Aroma:</Text> Bastante refrescante, com aromas fenólicos (cravo), de ésteres frutados (banana) e leve toque de baunilha.</Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Paladar:</Text>O suave sabor do trigo, semelhante a pão ou cereais, é complementar, assim como um leve adocicado do malte Pilsen. Leveduras em suspensão podem aumentar a sensação de corpo. Sabor de lúpulo leve.</Text>
        <Text><Text style={{ fontWeight: 'bold' }}>Validade:</Text>10 meses a partir da data de fabricação.</Text>
      </View>
    </Container>
  )
}

export default Beer;