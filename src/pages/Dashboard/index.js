import React, { useState, useContext, useEffect, useReducer } from 'react'
import { Colors, Typography, Form } from '@/styles'
import WavyPurple from '../About/assets/wavy_purple.svg'
import { Container, Sidebar, ListItem, Highlight, CalendarButton, SelectedCalendarButton, CalendarContainer, ContentContainer, ContainerOuter, ArrowButton } from './styles'
import Navbar from './components/Navbar'
import Calendar from './components/Calendar'
import StatsCards from './components/Statistics'
import BLOB_YELLOW from './BLOB_YELLOW.svg'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
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
        </Sidebar>
        <ContentContainer>
          <StatsCards/>
        </ContentContainer>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
      </Container>
    </div>
  )
}

export default Dashboard
