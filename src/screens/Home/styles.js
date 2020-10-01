import styled from 'styled-components/native'
import AddressCard from '../../components/AddressCard'
import Category from '../../components/Category'
import Pub from '../../components/Pub'

export const Container = styled.View`

`
export const Header = styled.View`
  flex-direction: row;
  /* border: 1px solid #000; */
  height: 150px;
  justify-content: space-between;
  padding-top: 30px;
`

export const ContainerACard = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`

export const ACard = styled(AddressCard)`
`

export const HTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${props => props.color ? props.color : '#000'};
  margin-left: 15px;
`
export const CategoriesContainer = styled.View`
  margin-top: 0px;
  margin-left: 15px;
`
export const CategoryText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const CategoriesList = styled.View`
  flex-direction: row;
`
export const CategoryCard = styled(Category)`
  margin-right: 15px;
  background-color: ${props => props.color ? props.color : '#fff'};
`

export const PubsContainer = styled.View`
  margin-top: 13px;
  justify-content: center;
  align-items: center;
  height: 280px;
`

export const PubText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 15px;
  align-self: flex-start;
`

export const PubsList = styled.View`

`
export const PubCard = styled(Pub)`
  margin-bottom: 15px;
`
