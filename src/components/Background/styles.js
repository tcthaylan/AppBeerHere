import { Dimensions } from 'react-native';
import styled from 'styled-components/native'

export const BackgroundImage = styled.ImageBackground.attrs({
  source: require('../../assets/Images/beer-background.jpg')
})`
  flex: 1;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
`
export const TransparentView = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
`