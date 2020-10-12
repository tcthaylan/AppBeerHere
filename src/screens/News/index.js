import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../../store/actions/auth'
import Button from '../../components/Button'
import { Container, LogoutButton, Text } from './styles';

const News = ({ signOut, auth }) => {
  const handleSubmit = async () => {
    await signOut()
  }
  return (
    <Container>
      <LogoutButton onPress={handleSubmit}>
        <Text>Sair</Text>
      </LogoutButton>
    </Container>
  )
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ signOut }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(News)