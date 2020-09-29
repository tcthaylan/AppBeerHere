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


// import { Container } from './styles';

const SignUp = () => {
  return (
    <Background>
      <Container>
        <Form>
          <FormInput
            icon="person"
            placeholder="Digite seu nome"
            returnKeyType="next"
            keyboardType="email-address"
          />
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
          <FormInput
            icon="lock-outline"
            placeholder="Digite a sua senha novamente"
            returnKeyType="send"
            secureTextEntry
          />
        </Form>
        <SubmitButton>Registrar</SubmitButton>
        <FooterLink>
          <SignLink onPress={() => { }}>
            <SignLinkText>Fazer login</SignLinkText>
          </SignLink>
        </FooterLink>
      </Container>
    </Background>
  )
}

export default SignUp;