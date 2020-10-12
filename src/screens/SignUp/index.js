import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
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

const SignUp = ({ navigation }) => {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Nome obrigatório'),
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(6, 'No mínimo 6 dígitos'),
    confirmPassword: Yup.string()
      .required('Senha obrigatória')
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
  });

  const handleSubmit = ({ name, email, password, confirmPassword }) => {
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(confirmPassword)
  }

  return (
    <Background>
      <Container>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => handleSubmit(values)}
          validationSchema={formSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched, }) => (
              <>
                <Form>
                  <FormInput
                    icon="person"
                    placeholder="Digite seu nome"
                    returnKeyType="next"
                    keyboardType="email-address"
                    value={values.name}
                    error={touched.name && errors.name && errors.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                  <FormInput
                    icon="mail-outline"
                    placeholder="Digite seu e-mail"
                    returnKeyType="next"
                    keyboardType="email-address"
                    value={values.email.toLowerCase()}
                    error={touched.email && errors.email && errors.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  <FormInput
                    icon="lock-outline"
                    placeholder="Digite sua senha"
                    returnKeyType="send"
                    secureTextEntry
                    value={values.password}
                    error={touched.password && errors.password && errors.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                  <FormInput
                    icon="lock-outline"
                    placeholder="Digite a sua senha novamente"
                    returnKeyType="send"
                    secureTextEntry
                    value={values.confirmPassword}
                    error={touched.confirmPassword && errors.confirmPassword && errors.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                  />
                </Form>
                <SubmitButton onPress={handleSubmit}>Registrar</SubmitButton>
              </>
            )}
        </Formik>
        <FooterLink>
          <SignLink onPress={() => { navigation.navigate('SignIn') }}>
            <SignLinkText>Fazer login</SignLinkText>
          </SignLink>
        </FooterLink>
      </Container>
    </Background>
  )
}

export default SignUp;