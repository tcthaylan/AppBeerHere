import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  padding: 5px 10px;
  border-radius: 8px;
  background-color: rgba(94, 94, 94, 0.7);
  justify-content: center;
  align-items: center;
`
export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
`