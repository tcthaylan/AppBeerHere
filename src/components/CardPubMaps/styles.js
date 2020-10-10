import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: ${Dimensions.get('window').width - 40}px;
  max-height: 200px;
  background-color: #FFF;
  margin: 0 20px;
  border-radius: 10px;
  padding: 8px;
  border: 1px solid #ddd;
`
export const Image = styled.Image.attrs({
  source: require('../../assets/Images/pub.jpg')
})`
  width: 100%;
  height: 130px;
  padding: 5px;
  margin-bottom: 5px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`

export const Description = styled.Text`
  color: #999;
  font-size: 12;
  margin-top: 2px;
`
