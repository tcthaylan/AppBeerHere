import styled from 'styled-components/native'
import AddressCard from '../../components/AddressCard'
import Category from '../../components/Category'
export const Container = styled.View`

`
export const Header = styled.View`
  flex-direction: row;
  /* border: 1px solid #000; */
  height: 150px;
  justify-content: space-between;
  padding-top: 30px;
`

export const ContanerACard = styled.View`
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
  margin-top: 20px;
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
  margin-right: 10px;
  background-color: ${props => props.color ? props.color : '#fff'};
`