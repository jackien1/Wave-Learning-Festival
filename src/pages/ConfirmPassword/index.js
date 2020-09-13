import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Colors, Typography, Form } from '@/styles'
import * as Styles from './styles'
import Logo from './logo.png'
import firebase from 'firebase'
import { FirebaseContext } from '@/firebaseContext'
import { Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'

var inputChanged = function (key, setField) {
  var result = (event) => {
    var value = event.target.value
    setField(prevData => {
      var result = { ...prevData }
      result[key] = value
      return result
    })
  }
  return result
}

const submit = async (signInForm, setWrongSubmission, isStudent) => {
  try {
    Auth.signIn(signInForm.username, 'wavelf2020')
      .then(user => {
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          const { requiredAttributes } = user.challengeParam // the array of required attributes, e.g ['email', 'phone_number']
          Auth.completeNewPassword(
            user, // the Cognito User Object
            signInForm.password // the new password
          ).then(user => {
            // at this time the user is logged in if no MFA required
            console.log(user)
            isStudent ? window.location.href = '/dashboard' : window.location.href = '/teacher-dashboard'
          }).catch(e => {
            console.log(e)
          })
        } else {
          console.log('else')
        }
      }).catch(e => {
        console.log(e)
      })
    // if (user) {
    //   console.log(user)
    // }
  } catch (error) {
    setWrongSubmission('Wrong email/password!')
    throw Error(error)
  }
}

const Home = (signInForm, setSignInForm, wrongSubmission, setWrongSubmission) => {
  return (
    <>
      <Typography.Header color={Colors.WLF_YELLOW}>
          Change Password
      </Typography.Header>

      <Typography.BodyText color="white" fontsize="21px">

      </Typography.BodyText>

      <br />

      <Typography.Header2 color="white" fontSize="24px">
      Email
      </Typography.Header2>
      <Form.Input
        value={signInForm.username}
        onChange={inputChanged('username', setSignInForm)}
      />
      <Typography.Header2 color="white" fontSize="24px">
      New Password
      </Typography.Header2>
      <Form.Input
        value={signInForm.password}
        onChange={inputChanged('password', setSignInForm)}
        type="password"
      />

      <div style={{ width: 'auto', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Form.Button onClick={(event) => {
          submit(signInForm, setWrongSubmission, false)
        }}>
          <Typography.Header color="white" fontSize="24px">
          Login as Teacher
          </Typography.Header>
        </Form.Button>
      </div>

      {wrongSubmission &&
    <Typography.BodyText color="white">
      {wrongSubmission}
    </Typography.BodyText>}

    </>
  )
}

const Loading = () => {
  return (
    <Typography.Header color={Colors.WLF_YELLOW}>Loading...</Typography.Header>
  )
}

const ConfirmPassword = () => {
  const [page, setPage] = useState('loading')
  const [calledOnce, setCalledOnce] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const [wrongSubmission, setWrongSubmission] = useState('')
  const [signInForm, setSignInForm] = useState({
    username: '',
    password: ''
  })

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Navbar />
      <Styles.SignupBackground>
        <div style={{ maxWidth: 800 }}>
          { Home(signInForm, setSignInForm, wrongSubmission, setWrongSubmission)}
        </div>
      </Styles.SignupBackground>
      <Styles.LogoBackground src={Logo} alt="logo" style={{
        position: 'absolute',
        width: 300,
        height: 300,
        transform: 'rotate(-35deg)',
        top: '60%',
        left: -100
      }}/>
      <Styles.LogoBackground src={Logo} alt="logo" style={{
        position: 'absolute',
        width: 300,
        height: 300,
        transform: 'rotate(-235deg)',
        top: '20%',
        right: -150
      }}/>
      <Footer />
    </div>
  )
}

export default ConfirmPassword
