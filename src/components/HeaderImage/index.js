import React from 'react';
import { View } from 'react-native';

import { BackgroundImage, TransparentView } from './styles';

const HeaderImage = ({ children }) => {
  return (
    <>
      <BackgroundImage>
        <TransparentView />
        {children}
      </BackgroundImage>
    </>
  )
}

export default HeaderImage;