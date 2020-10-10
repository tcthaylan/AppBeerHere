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
      <View style={{ justifyContent: "center", alignItems: "center", height: 300 }}>
        <Text>Conteúdo</Text>
      </View>
    </Container>
  )
}

export default Beer;