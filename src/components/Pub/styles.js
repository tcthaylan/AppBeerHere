import styled from 'styled-components'

export const Container = styled.TouchableOpacity`
  width: 380px;
  height: 200px;
  border: 1px solid #000;
  padding: 2px;
  background-color: #fff;
  border-radius: 3px;
`
export const Image = styled.Image.attrs({
  source: require('../../assets/Images/pub.jpg')
})`
  width: 100%;
  height: 130px;
  padding: 5px;
`
export const About = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: center;
  padding: 10px;
`
export const Name = styled.Text`
  font-weight: bold;
`
export const Address = styled.Text`
  color: #9E9E9E
`