import React, { useState, useContext, useEffect, useReducer } from 'react'
import { Colors, Typography, Form } from '@/styles'
import WavyPurple from '../About/assets/wavy_purple.svg'
import { ListIcon, Container, Sidebar, ListItem, Highlight, CalendarContainer, ContentContainer, ContainerOuter } from './styles'
import Navbar from './components/Navbar'
import BLOB_YELLOW from './BLOB_YELLOW.svg'
import { Auth } from 'aws-amplify'
import { FaPowerOff, FaHome } from 'react-icons/fa'

const Dashboard = () => {
  const [email, userEmail] = useState('')
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true })
      window.location.href = '/sign-in'
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => userEmail(user.attributes.email))
      .catch(err => window.location.href = '/')
  }, [])
  return (
    <div>
      <Navbar user={email}/>
      <Container>
        <Sidebar>
          <Highlight
            src={BLOB_YELLOW}
            style={{
              width: 200,
              height: 50,
              marginTop: '3.5em'
            }}
          />
          <h2 style={{
            marginBottom: '1rem',
            marginTop: '2.5em',
            marginLeft: '2rem',
            color: 'white',
            zIndex: 5,
            position: 'relative'
          }}>Dashboard</h2>
          <ListItem>
            Classes
          </ListItem>
          <ListItem>
            Seminars
          </ListItem>
          <ListItem>
            Special Events
          </ListItem>
          <ListItem>
            Curricular Support
          </ListItem>
          <ListItem>
            Profile
          </ListItem>
          <ListItem onClick={() => signOut()}>
            <ListIcon>
              <FaPowerOff/>
              <p>Sign out</p>
            </ListIcon>
          </ListItem>
          <ListItem onClick={() => window.location.href = '/'}>
            <ListIcon>
              <FaHome/>
              <p>Return to Home</p>
            </ListIcon>
          </ListItem>
        </Sidebar>
        <ContentContainer>
          <p>Content</p>
        </ContentContainer>
        <CalendarContainer>
          <p>Calendar</p>
        </CalendarContainer>
      </Container>
    </div>
  )
}

export default Dashboard
