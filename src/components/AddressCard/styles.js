import styled from 'styled-components/native'

export const Container = styled.View`
  width: 220px;
  height: 75px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px 13px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #F5CB22;
  margin-right: 15px;
`
export const CText = styled.View`
  align-items: flex-end;
`
export const ProfileImage = styled.Image.attrs({
  source: require('../../assets/Images/profile-image.jpg')
})`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-left: 10px;
  border: 1px solid #fff;
  padding: 2px;
`
export const ProfileName = styled.Text`
  font-weight: bold;
`
export const City = styled.Text`
  font-weight: bold;
`