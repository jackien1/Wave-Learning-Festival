import React, { useState, useContext, useEffect, useReducer } from 'react'
import { Colors, Typography, Form } from '@/styles'
import WavyPurple from '../About/assets/wavy_purple.svg'
import { Container, Sidebar, ListItem, Highlight, CalendarButton, CalendarContainer, ContentContainer, ContainerOuter } from './styles'
import Navbar from './components/Navbar'
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
          <p>Content</p>
        </ContentContainer>
        <CalendarContainer>
          <header>
            <h2>Upcoming Events</h2>
            <h4>August 27, 2020</h4>
          </header>
          <div>
            <CalendarButton>
              Mon<br />
              <h3>24</h3>
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_ORANGE,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_YELLOW,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
            </CalendarButton>
            <CalendarButton>
              Tue<br />
              <h3>25</h3>
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_ORANGE,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_YELLOW,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_TURQOUISE,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
            </CalendarButton>
            <CalendarButton>
              Wed<br />
              <h3>26</h3>
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_ORANGE,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_YELLOW,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
            </CalendarButton>
            <CalendarButton>
              Thu<br />
              <h3>27</h3>
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_ORANGE,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_YELLOW,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
            </CalendarButton>
            <CalendarButton>
              Fri<br />
              <h3>28</h3>
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_ORANGE,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
              <dot style={{
                height: "5px",
                width: "5px",
                backgroundColor: Colors.WLF_YELLOW,
                borderRadius: "50%",
                display: "inline-block",
                margin: "3px"
              }} />
            </CalendarButton>
          </div>
          <div style={{width: "100%"}}>
            <div style={{width: "50%", height: "75px", float: "left"}}>
              <shape style={{
                borderRadius: "25px",
                background: Colors.WLF_ORANGE,
                width: "100px",
                margin: "auto",
                opacity: "50%",
                display: "inline-block",
                height: "50px"
              }}>
                <h2 style={{color: "#FFFFFF", display: "inline-block", marginTop: "3px", marginLeft: "30px"}}>
                  7:00
                </h2>
              </shape>
            </div>
            <div style={{marginLeft: "50%", height: "75px"}}>
              <p style={{marginTop: "0px"}}><b>Beep Bop</b></p>
              <p style={{marginBottom: "0px"}}>Seminar</p>
            </div>
          </div>
          <hr style={{opacity: "33%"}}/>
          <div style={{width: "100%"}}>
            <div style={{width: "50%", height: "75px", float: "left"}}>
              <shape style={{
                borderRadius: "25px",
                background: Colors.WLF_YELLOW,
                width: "100px",
                margin: "auto",
                opacity: "50%",
                display: "inline-block",
                height: "50px"
              }}>
                <h2 style={{color: "#FFFFFF", display: "inline-block", marginTop: "3px", marginLeft: "30px"}}>
                  7:00
                </h2>
              </shape>
            </div>
            <div style={{marginLeft: "50%", height: "75px"}}>
              <p style={{marginTop: "0px"}}><b> Intro to Due Process </b></p>
              <p style={{marginBottom: "0px"}}>Class</p>
            </div>
          </div>
          <hr style={{opacity: "33%"}}/>
          <div style={{width: "100%"}}>
            <div style={{width: "50%", height: "75px", float: "left"}}>
              <shape style={{
                borderRadius: "25px",
                background: Colors.WLF_TURQOUISE,
                width: "100px",
                margin: "auto",
                opacity: "50%",
                display: "inline-block",
                height: "50px"
              }}>
                <h2 style={{color: "#FFFFFF", display: "inline-block", marginTop: "3px", marginLeft: "30px"}}>
                7:00
                </h2>
              </shape>
            </div>
            <div style={{marginLeft: "50%", height: "75px"}}>
              <p style={{marginTop: "0px"}}><b> To Hand and Back </b></p>
              <p style={{marginBottom: "0px"}}>Class</p>
            </div>
          </div>
          <hr style={{opacity: "33%"}}/>
        </CalendarContainer>
      </Container>
    </div>
  )
}

export default Dashboard
