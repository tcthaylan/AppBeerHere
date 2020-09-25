import React from 'react';
import Background from '../../components/Background'
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  FooterLink
} from './styles';

const SignIn = () => {
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
          <SignLink onPress={() => { }}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </FooterLink>
      </Container>
    </Background>
  )
}

export default SignIn;