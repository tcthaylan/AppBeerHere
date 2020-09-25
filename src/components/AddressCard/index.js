import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, ProfileImage, ProfileName, City, CText } from './styles';

const AddressCard = ({ image, name, city }) => {
  return (
    <Container>
      <CText>
        <ProfileName>{name}</ProfileName>
        <View
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon name="location-pin" color="green" size={14} />
          <City>{city}</City>
        </View>
      </CText>
      <ProfileImage image={image} />
    </Container>
  )
}

export default AddressCard;