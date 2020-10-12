import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const BackgroundImage = styled.ImageBackground.attrs(props => ({
  source: require(`../../assets/Images/pubs/1.jpg`)
}))`
  width: ${Dimensions.get('window').width};
  height: 230px;
`
export const TransparentView = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`