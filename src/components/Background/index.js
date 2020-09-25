import React from 'react';
import { TransparentView, BackgroundImage } from './styles';

const Background = ({ children }) => {
  return (
    <>

      <BackgroundImage>
        <TransparentView />
        {children}
      </BackgroundImage>

    </>

  )
}

export default Background;