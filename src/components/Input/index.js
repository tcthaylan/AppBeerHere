import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, TInput } from './styles';

const Input = ({ style, icon, name, error, ...rest }, ref) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} color="#fff" size={17} />}
      <TInput {...rest} ref={ref} />
    </Container>
  )
}

export default forwardRef(Input);