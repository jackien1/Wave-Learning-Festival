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
import { updateStudent, updateSeminarRegistration } from '@/graphql/mutations'
import { getSeminarRegistration, listSeminarRegistrations, listSeminars } from '../../graphql/queries.js'

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
    first_name: '',
    last_name: '',
    email: '',
    parent_first_name: '',
    parent_last_name: '',
    parentEmail: '',
    grade: '',
    school: '',
    country: '',
    state: '',
    city: '',
    howYouHear: '',
    orgs: []
  }

  const profileReducer = (currstate, action) => {
    switch (action.type) {
      case 'FIRSTNAME':
        return ({
          ...currstate,
          first_name: action.content
        })
      case 'LASTNAME':
        return ({
          ...currstate,
          last_name: action.content
        })
      case 'EMAIL':
        return ({
          ...currstate,
          email: action.content
        })
        case 'PARENTFIRSTNAME':
        return ({
          ...currstate,
          parent_first_name: action.content
        })
      case 'PARENTLASTNAME':
        return ({
          ...currstate,
          parent_last_name: action.content
        })
      case 'PARENTEMAIL':
        return ({
          ...currstate,
          parentEmail: action.content
        })
      case 'GRADE':
        return ({
          ...currstate,
          grade: action.content
        })
      case 'SCHOOL':
        return ({
          ...currstate,
          school: action.content
        })
      case 'COUNTRY':
        return ({
          ...currstate,
          country: action.content
        })
      case 'STATE':
        return ({
          ...currstate,
          state: action.content
        })
      case 'CITY':
        return ({
          ...currstate,
          city: action.content
        })
      case 'HOWYOUHEAR':
        return ({
          ...currstate,
          howYouHear: action.content
        })
      case 'ORGS':
        return ({
          ...currstate,
          orgs: action.content
        })
      case 'RESET':
        return (action.content)
    }
  }

    const [studentPage, setStudentPage] = useState(true)
    const [seminarPage, setSeminarPage] = useState(false)
    const [loading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [user, setUser] = useState(null)
    const [edit, toggleEdit] = useState(false)
    const [localStudentInfo, setLocalStudentInfo] = useState({})
    const [profile, profileDispatch] = useReducer(profileReducer, profileState)
    const [student, setStudent] = useState(null)
    const [studentId, setStudentId] = useState('')

    const [registrations, updateRegistrations] = useState([])

    var studentEmail = "";

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
        genFrag('Student First Name', student.data.getStudent.first_name, 'FIRSTNAME', 'first_name'),
        genFrag('Student Last Name', student.data.getStudent.last_name, 'LASTNAME', 'last_name'),
        genFrag('Student Email', student.data.getStudent.email, 'EMAIL', 'email'),
        genFrag('Parent First Name', student.data.getStudent.parent_first_name, 'PARENTFIRSTNAME', 'parent_first_name'),
        genFrag('Parent Last Name', student.data.getStudent.parent_last_name, 'PARENTLASTNAME', 'parent_last_name'),
        genFrag('Parent Email', student.data.getStudent.parentEmail, 'PARENTEMAIL', 'parentEmail'),
        genFrag('Grade Level', student.data.getStudent.grade, 'GRADE', 'grade'),
        genFrag('School', student.data.getStudent.school, 'SCHOOL', 'school'),
        genFrag('Country', student.data.getStudent.country, 'COUNTRY', 'country'),
        genFrag('State', student.data.getStudent.state, 'COUNTRY', 'state'),
        genFrag('City', student.data.getStudent.city, 'CITY', 'city'),
        genFrag('How You Hear', student.data.getStudent.howYouHear, 'HOWYOUHEAR', 'howYouHear'),
        genFrag('Orgs', student.data.getStudent.orgs, 'ORGS', 'orgs')
      ]

    }

    const generateSeminarInfo = function (registrations) {
      return [
        genFrag('Number of Seminars', registrations.data.getSeminarRegistration.numSeminars, 'FIRSTNAME', 'first_name'),
      ]
    }

    const getStudentData = async (username) => {
      try {
        const studentData = await API.graphql(graphqlOperation(getStudent, { id: username }))
        studentEmail = studentData.data.getStudent.email
        console.log(studentEmail)
        setStudent(studentData)

        const studentSeminar = await API.graphql(graphqlOperation(listSeminarRegistrations));
        const itemsofSeminar = studentSeminar.data.listSeminarRegistrations.items;
        var studentSeminarId = "";
        for (var i = 0; i < itemsofSeminar.length; i++){
          if (itemsofSeminar[i].email === studentEmail){
            studentSeminarId = itemsofSeminar[i].id
          }
        }
        const seminarData = await API.graphql(graphqlOperation(getSeminarRegistration, { id: studentSeminarId }));
        console.log(seminarData);
        console.log(studentData.data.getStudent.first_name + " is enrolled in " + seminarData.data.getSeminarRegistration.numSeminars + " seminar(s)")

      } catch (error) {
        console.log('id', username)
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
          first_name: student.data.getStudent.first_name,
          last_name: student.data.getStudent.last_name,
          email: student.data.getStudent.email,
          parent_first_name: student.data.getStudent.parent_first_name,
          parent_last_name: student.data.getStudent.parent_last_name,
          parentEmail: student.data.getStudent.parentEmail,
          grade: student.data.getStudent.grade,
          school: student.data.getStudent.school,
          country: student.data.getStudent.country,
          state: student.data.getStudent.state,
          city: student.data.getStudent.city,
          howYouHear: student.data.getStudent.howYouHear,
          orgs: student.data.getStudent.orgs
        })
        studentInfo.forEach(label => {
          profileDispatch({ type: label.dispatch, content: label.data })
        })
      }
    }, [student])

    const cancelProfile = () => {
      profileDispatch({ type: 'RESET', content: localStudentInfo })
    }

    const submitProfile = () => {
      API.graphql(graphqlOperation(updateStudent, {
        input: {
          id: studentId,
          city: profile.city,
          state: profile.state,
          country: profile.country,
          school: profile.school,
          first_name: profile.first_name,
          last_name: profile.last_name,
          email: profile.email,
          grade: profile.grade,
          howYouHear: profile.howYouHear,
          parent_first_name: profile.parent_first_name,
          parent_last_name: profile.parent_last_name,
          parentEmail: profile.parentEmail,
          orgs: profile.orgs
        }
      }))
      setLocalStudentInfo(profile)
      toggleEdit(false)
    }

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
          <ListItem onClick={() => setSeminarPage(true)}>
            Seminars
          </ListItem>
          <ListItem>
            Special Events
          </ListItem>
          <ListItem>
            Curricular Support
          </ListItem>
          <ListItem onClick={() => setStudentPage(true)}>
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
          {/* <StatsCards/> */}
          {studentPage && <StudentProfile 
          first_name = {profile.first_name}
          last_name = {profile.last_name}
          email = {profile.email}
          parent_first_name = {profile.parent_first_name}
          parent_last_name = {profile.parent_last_name}
          parentEmail = {profile.parentEmail}
          grade = {profile.grade}
          school = {profile.school}
          country = {profile.country}
          state = {profile.state}
          city = {profile.city}
          howYouHear = {profile.howYouHear}
          orgs = {profile.orgs}
          profileDispatch = {profileDispatch}
          cancelProfile = {cancelProfile}
          submitProfile = {submitProfile}  />}
        </ContentContainer>
        <CalendarContainer>
          <Calendar />
        </CalendarContainer>
        </div>
  </>)
}

export default Dashboard
