import styled from 'styled-components/native'
import { BaseButton } from 'react-native-gesture-handler'

export const Container = styled(BaseButton)`
  height: 50px;
  border-radius: 5px;
  width: 200px;
  /* align-self: stretch; */
  align-items: center;
  justify-content: center;
  background-color: #DEA82A;
  /* background-color: #F5CB22; */
`
export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`