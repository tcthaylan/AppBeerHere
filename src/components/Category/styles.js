import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100px;
  height: 125px;
  border: 2px solid #000;
  background-color: #fff;
  /* justify-content: center; */
  align-items: center;
  border-radius: 25px;
  &:hover {
    background-color: #F5CB22;
  }
`
export const Image = styled.Image.attrs({
  source: require('../../assets/Images/beer-category.png')
})`
  width: 65px;
  height: 65px;
`
export const Text = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 4px;
`
