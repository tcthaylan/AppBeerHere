import React from 'react';
import { View } from 'react-native';

import { BackgroundImage, TransparentView } from './styles';

const HeaderImage = ({ children, style }) => {
  return (
    <>
      <BackgroundImage style={style} >
        <TransparentView />
        {children}
      </BackgroundImage>
    </>
  )
}

export default HeaderImage;