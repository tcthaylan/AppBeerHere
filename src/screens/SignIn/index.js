import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Background from '../../components/Background'
import { signIn } from '../../store/actions/auth';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  FooterLink
} from './styles';

const SignIn = ({ navigation, auth, signIn }) => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(6, 'No mínimo 6 dígitos'),
  });

  const handleSubmit = async ({ email, password }) => {
    await signIn(email, password)
  }

  return (
    <Background>
      <Container>
        <Formik
          initialValues={{
            email: 'use2r@email.com',
            password: 'teste123',
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
                    name="email"
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
                    name="password"
                    icon="lock-outline"
                    placeholder="Digite sua senha"
                    returnKeyType="send"
                    secureTextEntry
                    value={values.password}
                    error={touched.password && errors.password && errors.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                  />
                </Form>
                <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
              </>
            )}
        </Formik>
        <FooterLink>
          <SignLink onPress={() => { navigation.navigate('SignUp') }}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </FooterLink>
      </Container>
    </Background>
  )
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ signIn }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)