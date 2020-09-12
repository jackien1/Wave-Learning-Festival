import React, { useState } from 'react'
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
var AWS = require("aws-sdk");

const Login = () => {
  const [password, updatePassword] = useState('')
  const [email, updateEmail] = useState('')
  const [code, updateCode] = useState('')

  AWS.config.update({region:'us-west-2'});
  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

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
      cognitoidentityserviceprovider.adminAddUserToGroup({GroupName: "Students", UserPoolId: "wavelearningfestivalfac48596_userpool_fac48596-dev", Username: user.username}, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });
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
              <Input placeholder="name@email.com" onChange={e => updateEmail(e.target.value)}/>

              <p>Password</p>
              <Input placeholder="********" onChange={e => updatePassword(e.target.value)}/>
              <p>Code</p>

              <Input placeholder="Code" onChange={e => updateCode(e.target.value)}/>
              <Button onClick={() => confirmSignUp()}>Confirm Signup</Button>
              <Button onClick={() => signUp()}>Create account</Button>
              <Button onClick={() => signIn()}>Log in</Button>
              <Button onClick={() => signOut()}> Signout</Button>

            </Form>
          </FormContainer>
        </ContainerInner>
      </Container>
      <Footer />
    </>
  )
}

export default Login
