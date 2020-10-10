import styled from 'styled-components/native'
import HeaderImage from '../../components/HeaderImage';
import GoBack from '../../components/GoBack';
import FavoriteButton from '../../components/FavoriteButton';

export const Container = styled.View`

`
export const BackButton = styled(GoBack)`

`
export const FavoriteBtn = styled(FavoriteButton)`
  position: absolute;
  right: 20;
  top: 20;
`

export const HImage = styled(HeaderImage)`
  align-items: center;
  justify-content: center;
`

export const ContainerDescription = styled.View`
  margin-top: 50px;
  margin-left: 22px;
`

export const PizzaName = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`
export const PizzaDescription = styled.Text`
  color: #B3B3B3;
  font-size: 16px;
`

export const Menu = styled.View`
  background-color: #fff;
  height: 55px;
 justify-content: center;
`

export const MenuText = styled.Text`
  margin-left: 22px;
  font-size: 20px;
  /* font-weight: bold; */
`


