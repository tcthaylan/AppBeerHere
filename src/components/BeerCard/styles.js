import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  height: 100px;
  background-color: #fff;
  /* width: 100%; */
  border: #ddd;
  border-radius: 10px;
`

export const BeerImage = styled.Image.attrs(props => ({
  source: props.image
}))`
  width: 80px;
  height: 80px;
  border: 1px solid #ccc;
  border-radius: 7px;
  margin-right: 10px;
`

export const BeerTextContainer = styled.View`
  flex-direction: column;
  width: 250px;
`

export const BeerName = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: "tail"
})`
  font-weight: bold;
`

export const BeerDescription = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: "tail"
})`
  color: #9EA1A3;
`