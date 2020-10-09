import styled from 'styled-components/native'
import FavoriteButton from '../../components/FavoriteButton'
import Tag from '../../components/Tag'
import BeerCard from '../../components/BeerCard'

export const Container = styled.View``

export const PubName = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`
export const PubAddress = styled.Text`
  color: #B3B3B3;
  font-size: 16px;
`
export const FavoriteBtn = styled(FavoriteButton)`
  position: absolute;
  right: 20;
  top: 20;
`

export const PubInformations = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-left: 22px;
`
export const ContainerTags = styled.View`
  margin-top: 10px;
  flex-direction: row;
`

export const PubCategory = styled(Tag)`
  margin-right: 10px;
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

export const BeersContainer = styled.View`
  align-items: center;
  margin-top: 10px;
  height: 320px;
`

export const BCard = styled(BeerCard)`
  margin-bottom: 10px;
`