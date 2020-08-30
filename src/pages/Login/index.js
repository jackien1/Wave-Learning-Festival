import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Left,
  FormContainer,
  Form,
  Input,
  Button,
  ContainerInner
} from './styles'
import { Container } from '@/globalStyles'
import { Auth } from 'aws-amplify'

const Login = () => {
  const signIn = async () => {
    try {
      const user = await Auth.signIn(email, password)
      console.log(user)
    } catch (error) {
      console.log('error signing in', error)
    }
  }
  const signUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email
        }
      })
      console.log(user)
    } catch (error) {
      console.log('error signing up:', error)
    }
  }
  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, code)
    } catch (error) {
      console.log('error confirming sign up', error)
    }
  }

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true })
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }
  return (
    <>
      <Navbar />
      <Container>
        <ContainerInner>
          <Left>
            <h1>Join Wave as a Student or Teacher today!</h1>
          </Left>
          <FormContainer>
            <Form>
              <h1>Log in</h1>
              <p>Don't have an account? Click here to create one.</p>
              <p>Email Address</p>
              <Input placeholder="name@email.com" />

              <p>Password</p>
              <Input placeholder="********" />
              <Button>Log in</Button>
            </Form>
          </FormContainer>
        </ContainerInner>
      </Container>
      <Footer />
    </>
  )
}

export default Login
