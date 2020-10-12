import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Background from '../../components/Background'
import { getLoggedUser } from '../../store/actions/user'
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  FooterLink
} from './styles';

const SignIn = ({ navigation, user }) => {
  console.log(user)
  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            keyboardType="email-address"
          />
          <FormInput
            icon="lock-outline"
            placeholder="Digite sua senha"
            returnKeyType="send"
            secureTextEntry
          />
        </Form>
        <SubmitButton>Acessar</SubmitButton>
        <FooterLink>
          <SignLink onPress={() => { navigation.navigate('SignUp') }}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </FooterLink>
      </Container>
    </Background>
  )
}

const mapStateToProps = state => ({ user: state.user })
const mapDispatchToProps = dispatch => bindActionCreators({ getLoggedUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)