import React, { useState, useContext, useEffect, useReducer } from 'react'
import { Colors, Typography, Form } from '@/styles'
import WavyPurple from '../About/assets/wavy_purple.svg'
import { ListIcon, InfoContainer, InfoContainerInner, ContainerInner, Container, Sidebar, ListItem, Highlight, CalendarButton, SelectedCalendarButton, CalendarContainer, ContentContainer, ContainerOuter, ArrowButton } from './styles'
import Navbar from './components/Navbar'
import Calendar from './components/Calendar'
import StatsCards from './components/Statistics'
import BLOB_YELLOW from './BLOB_YELLOW.svg'
import { FaPowerOff, FaHome } from 'react-icons/fa'
import StudentProfile from './components/StudentProfile'
import { Auth, API, graphqlOperation } from 'aws-amplify'

import { getStudent } from '../../graphql/queries.js'

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

  const profileState = {
    // Personal Data
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    gradYear: '',
    country: '',
    city: ''
  }

  const profileReducer = (state, action) => {
    switch (action.type) {
      case 'FIRSTNAME':
        return ({
          ...state,
          firstName: action.content
        })
      case 'LASTNAME':
        return ({
          ...state,
          lastName: action.content
        })
      case 'EMAIL':
        return ({
          ...state,
          email: action.content
        })
      case 'SCHOOL':
        return ({
          ...state,
          school: action.content
        })
      case 'GRADYEAR':
        return ({
          ...state,
          gradYear: action.content
        })
      case 'COUNTRY':
        return ({
          ...state,
          country: action.content
        })
      case 'CITY':
        return ({
          ...state,
          city: action.content
        })
      case 'RESET':
        return (action.content)
    }
  }

    const [tab, setTab] = useState(true)
    const [loading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [user, setUser] = useState(null)
    const [edit, toggleEdit] = useState(false)
    const [localStudentInfo, setLocalStudentInfo] = useState({})
    const [profile, profileDispatch] = useReducer(profileReducer, profileState)
    const [student, setStudent] = useState(null)
    const [studentId, setStudentId] = useState('')

    const genFrag = function (label, data, dispatch, state) {
      return {
        label,
        data,
        dispatch,
        state
      }
    }

    const generateStudentInfo = function (student) {
      return [
        genFrag('First Name', student.data.getStudent.first_name, 'FIRSTNAME', 'firstName'),
        genFrag('Last Name', student.data.getStudent.last_name, 'LASTNAME', 'lastName'),
        genFrag('Email', student.data.getStudent.email, 'EMAIL', 'email'),
        genFrag('School', student.data.getStudent.school, 'SCHOOL', 'school'),
        genFrag('Grad Year', student.data.getStudent.gradYear, 'GRADYEAR', 'gradYear'),
        genFrag('Country', student.data.getStudent.country, 'COUNTRY', 'country'),
        genFrag('City', student.data.getStudent.city, 'CITY', 'city')
      ]
    }

    const getStudentData = async (username) => {
      try {
        const studentData = await API.graphql(graphqlOperation(getStudent, { id: "student1" }))
        setStudent(studentData)
      } catch (error) {
        console.log('error on fetching data', error)
      }
    }

    useEffect(() => {
      Auth.currentUserInfo()
        .then(user => {
          setStudentId(user.username)
          getStudentData(user.username)
        })
    }, [])

    useEffect(() => {
      if (student) {
        var studentInfo = generateStudentInfo(student)
        setLocalStudentInfo({
          firstName: student.data.getStudent.first_name,
          lastName: student.data.getStudent.last_name,
          email: student.data.getStudent.email,
          school: student.data.getStudent.school,
          gradYear: student.data.getStudent.gradYear,
          country: student.data.getStudent.country,
          city: student.data.getStudent.city
        })
        studentInfo.forEach(label => {
          profileDispatch({ type: label.dispatch, content: label.data })
        })
      }
    }, [student])


  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => userEmail(user.attributes.email))
      .catch(err => window.location.href = '/')
  }, [])

    return (<>
      {/* <Navbar user={email}/>
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
          }}>Dashboard</h2> */}
      <div>
        <Sidebar>
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
          <ListItem onClick={() => <StudentProfile></StudentProfile>}>
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
          <StatsCards/>
        </ContentContainer>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
        </div>
  </>)
}

export default Dashboard
