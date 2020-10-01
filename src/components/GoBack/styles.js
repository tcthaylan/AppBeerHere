import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;
  top: 20;
  left: 20;
  width: 45px;
  height: 45px;
  background-color: rgba(94, 94, 94, 0.7);
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`