import React, { useState, useContext, useEffect, useReducer } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { Colors, Typography, Form } from '@/styles'
// import { FirebaseContext } from '../../firebaseContext'
import './styles.css'
import { Cancel, EditInput, ProfileLeft, ProfileRight, Column, Text, Row, Label, Class, ClassText, Sections } from './styles.js'
import WavyPurple from '../../About/assets/wavy_purple.svg'
import WavyTurquoise from '../../About/assets/wavy_turquoise.svg'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { getTeacher, listTeachers } from "../../../graphql/queries.js"
import { getSeminar, listSeminar } from "../../../graphql/queries.js"
import { updateTeacher } from "../../../graphql/mutations.js"
import { updateSeminar } from "../../../graphql/mutations.js"

import CourseCard from '../../../components/CourseCard'
import { MediumContainer } from '@/pages/About/styles'
import { IconContainer } from '@/components/Chip/styles'



const profileState = {
  // Personal Data
  firstName: '',
  lastName: '',
  email: '',
  school: '',
  gradYear: '',
  country: '',
  city: '',
}

const seminarProfileState = {
  // Course Data - refer to AWS GraphQL Schema for types
  couTitle:'',
  couMaxSize:0,
  couPrereqs:'',
  couDescrip: '',
  couCategory:[], // make a dropdown
  couSyllabus:'',
  couTargAud:[],
  updatedAt: ''
  // Class-Specific Data
  /* would have each date + 
  Jackie's enrollment data */
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
    }
  }

  const seminarProfileReducer = (state, action) => {
    switch (action.type) {
      case 'COUTITLE':
        return ({
          ...state,
          courseTitle: action.content
      })
      case 'COUMAXSIZE':
        return ({
          ...state,
          maxClassSize: action.content
      })
      case 'COUPREREQS':
        return ({
          ...state,
          prereqs: action.content
      })
      case 'COUDESCRIP':
      return ({
        ...state,
        courseDescription: action.content
      })
      case 'COUSYLLABUS':
      return ({
        ...state,
        syllabus: action.content
      })
      case 'COUTARGAUD':
      return ({
        ...state,
        targetAudience: action.content
      })
      case 'UPDATEDAT':
      return ({
        ...state,
        updatedAt: action.content
      })      
    case 'RESET':
      return (action.content)
  }
}

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [user, setUser] = useState(null)
  const [theError, setTheError] = useState(null)
  const [coursesDisplayed, setCoursesDisplayed] = useState([])
  const [wave, setWave] = useState('5')
  const [edit, toggleEdit] = useState(false)
  const [editSeminar, toggleEditSeminar] = useState(false)
  const [localTeacherInfo, setLocalTeacherInfo] = useState({})
  const [localSeminarInfo, setLocalSeminarInfo] = useState({})
  const [docID, setDocID] = useState('')
  const [profile, profileDispatch] = useReducer(profileReducer, profileState)
  const [seminarProfile, seminarProfileDispatch] = useReducer(seminarProfileReducer, seminarProfileState)
  const [teacher, setTeacher] = useState(null)
  const [seminar, setSeminar] = useState(null)
  const [tab, setTab] = useState('course');
  
  var teacherId = 'student1';
  var seminarId = 'seminar1';

  const genFrag = function (label, data, dispatch, state) {
    return {
      label,
      data,
      dispatch,
      state
    }
  }

  const generateTeacherInfo = function (teacher) {
    return [
      genFrag('First Name', teacher.data.getTeacher.first_name, 'FIRSTNAME', 'firstName'),
      genFrag('Last Name', teacher.data.getTeacher.last_name, 'LASTNAME', 'lastName'),
      genFrag('Email', teacher.data.getTeacher.email, 'EMAIL', 'email'),
      genFrag('School', teacher.data.getTeacher.school, 'SCHOOL', 'school'),
      genFrag('Grad Year', teacher.data.getTeacher.gradYear, 'GRADYEAR', 'gradYear'),
      genFrag('Country', teacher.data.getTeacher.country, 'COUNTRY', 'country'),
      genFrag('City', teacher.data.getTeacher.city, 'CITY', 'city')
    ]
  }

  const generateSeminarInfo = function (seminar) {
    return [
      genFrag('Title', seminar.data.getSeminar.courseTitle, 'COUTITLE', 'courseTitle'),
      genFrag('Max Size', seminar.data.getSeminar.maxClassSize, 'COUMAXSIZE', 'maxClassSize'),
      genFrag('Prerequisites', seminar.data.getSeminar.prereqs, 'COUPREREQS', 'prereqs'),
      genFrag('Description', seminar.data.getSeminar.courseDescription, 'COUDESCRIP', 'courseDescription'),
      genFrag('Last Updated At', seminar.data.getSeminar.updatedAt, 'UPDATEDAT', 'updatedAt')      
    ]
  }

 const getTeacherData = async () => {
    try { 
      const teacherData = await API.graphql(graphqlOperation(getTeacher, {id: teacherId}));      
    setTeacher(teacherData);
    console.log(teacherData);
    } catch (error) {
        console.log('error on fetching data', error);
    }
  }

  const getSeminarData = async () => {
    try { 
      const seminarData = await API.graphql(graphqlOperation(getSeminar, {id: seminarId}));
      console.log(seminarData);      
    setSeminar(seminarData);
    } catch (error) {
        console.log('error on fetching data', error);
    }
  }

  useEffect(() => {
    getTeacherData();
  }, []);

  useEffect(() => {
    getSeminarData();
  }, []);

  useEffect(() => {  }, [wave])


  useEffect(() => {
    if (teacher) {
      var teacherInfo = generateTeacherInfo(teacher)
      setLocalTeacherInfo({
        firstName: teacher.first_name,
        lastName: teacher.last_name,
        email: teacher.email,
        school: teacher.school,
        gradYear: teacher.gradYear,
        country: teacher.country,
        city: teacher.city
      })
      teacherInfo.forEach(label => {
        profileDispatch({ type: label.dispatch, content: label.data })
      })
    }
  }, [teacher])

  useEffect(() => {
    if (seminar) {
      var seminarInfo = generateSeminarInfo(seminar)
      setLocalSeminarInfo({
        courseTitle: seminar.courseTitle,
        maxClassSize: seminar.maxClassSize,
        prereqs: seminar.prereqs,
        courseDescription: seminar.courseDescription,
        updatedAt: seminar.updatedAt
      })
      seminarInfo.forEach(label => {
        seminarProfileDispatch({ type: label.dispatch, content: label.data })
      })
    }
  }, [seminar])

  const cancelTeacher = () => {
    profileDispatch({ type: 'RESET', content: localTeacherInfo })
    toggleEdit(false)
  }

  const cancelSeminar = () => {
    seminarProfileDispatch({ type: 'RESET', content: localSeminarInfo })
    toggleEditSeminar(false)
  }

  const submitTeacher = () => {
    console.log(profile);
    API.graphql(graphqlOperation(updateTeacher, {
      input: {id: teacherId,
        first_name: profile.firstName,
        last_name: profile.lastName,
        school: profile.school
      }}))
    setLocalTeacherInfo(profile)
    toggleEdit(false)
  }

  const submitSeminar = () => {
    console.log(seminarProfile);
    API.graphql(graphqlOperation(updateSeminar, {
      input: {id: seminarId,
        courseTitle: seminarProfile.courseTitle,
        maxClassSize: seminarProfile.maxClassSize,
        prereqs: seminarProfile.prereqs,
        courseDescription: seminarProfile.courseDescription
      }}))
    setLocalSeminarInfo(seminarProfile)
    toggleEditSeminar(false)
  }

  if (isError) {
    return (
      <>
        <Navbar/>
        <Container>
          <ContainerInner>
            <p>Error. Code: {theError.code}</p>
            <p>Error Message: {theError.message}</p>
          </ContainerInner>
        </Container>

        <Footer/>
      </>)
  }

  if (false) {
    return (
      <>
        <Navbar/>
        <Container>
          <ContainerInner>
            <p>Loading database...</p>
          </ContainerInner>
        </Container>

        <Footer/>
      </>)
  }

  if (false) {
    return (
      <>
        <Navbar/>
        <Container>
          <ContainerInner>
            <p>Not signed in.</p>
          </ContainerInner>
        </Container>

        <Footer/>
      </>)
  }

  const inputChanged = function (setWave) {
    var result = (event) => {
      var value = event.target.value
      setWave(prevData => {
        var result = { ...prevData }
        result = value
        return result
      })
    }
    return result
  }

  const WAVE_OPTIONS = [
    5,
    4/*,
    3,
    2,
    1 */
  ]

  const openTeacherProfilePage = () => {
    document.getElementById("teacherProfilePage").style.display = "block";
    document.getElementById("seminarProfilePage").style.display = "none";
  }

  const openSeminarProfilePage = () => {
    document.getElementById("teacherProfilePage").style.display = "none";
    document.getElementById("seminarProfilePage").style.display = "block";
  }

  if (teacher && seminar) {
    var teacherInfo = generateTeacherInfo(teacher);
    var seminarInfo = generateSeminarInfo(seminar);
    return (<>
      <div>
        <Navbar/>
        <Container>
          <ContainerInner>
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>
            Instructor Dashboard
          </Typography.Header>
          <br></br>
          <CourseCard
            title = {seminar.data.getSeminar.courseTitle}
            teachers = {seminar.data.getSeminar.teachers}
            color = {Colors.WLF_ORANGE}
            description = {seminar.data.getSeminar.courseDescription}
            classDates = {seminar.data.getSeminar.classDates}
            time = {seminar.data.getSeminar.courseTimes}
            targetAudience = {seminar.data.getSeminar.targetAudience}
            classDays = {seminar.data.getSeminar.classDays}
            courseId = {seminarId}
          />
          </ContainerInner>
        </Container>   
        
        <Container>
          <ContainerInner>
              <div class = "tab" style = {{
                paddingBottom: '10px'
              }}>
                <button className = "tablinks" onClick ={() => openSeminarProfilePage()}>
                  <Typography.Header style={{ color: Colors.WLF_TURQOUISE }}>My Tide</Typography.Header>                  
                </button>  
                <button className= "tablinks" onClick ={() => openTeacherProfilePage()}>
                  <Typography.Header style={{ color: Colors.WLF_PURPLE }}>My Profile</Typography.Header>                
                </button>          
              </div>

              <div>
                <Row>
                <a href="/sign-out" style={{ textDecoration: 'none', color: 'white', float: 'left' }}>
                      <Form.Button style={{ margin: 5, width: 125, textAlign: 'center', fontSize: 18 }}>
                        <b>Sign Out</b>
                      </Form.Button>
                    </a>
                    <a href="/change-password" style={{ textDecoration: 'none', color: 'white', float: 'right' }}>
                      <Form.Button style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
                        <b>Change Password</b>
                      </Form.Button>
                </a>
                </Row>
              </div>              

              <div id = "teacherProfilePage" className = "tabcontent" style={{ display: 'none' }}>
                <br></br>
                  <div style={{
                    backgroundImage: `url(${WavyPurple})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    marginBottom: 5,
                    paddingBottom: '20px'
                  }}>
                    <Text>
                      <br/><br/>
                      {teacherInfo.map((info, index) => {
                        return (
                          <Row key={index}>
                            <ProfileLeft>
                              <Label>{`${info.label} `}</Label>
                            </ProfileLeft>
                            <ProfileRight>
                              <EditInput
                                edit={edit}
                                disabled={!edit}
                                value={profile[info.state]}
                                onChange={e => profileDispatch({ type: info.dispatch, content: e.target.value })}/>
                            </ProfileRight>
                          </Row>
                        )
                      })}
                      <br/>
                    </Text>
                    {edit && <Row style={{ alignItems: 'center' }}>
                      <Form.Button onClick={() => submitTeacher()} style={{ marginTop: 0, marginRight: 20, marginLeft: 20, width: 100, textAlign: 'center', fontSize: 18 }}>
                        <b style ={{ color: 'white' }}>Submit</b>
                      </Form.Button>
                      <Cancel onClick={() => cancelTeacher()} style ={{ color: 'white' }}>Cancel</Cancel>
                    </Row>}
                  </div>
                  <Row>
                    <Form.Button onClick={() => toggleEdit(!edit)} style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
                      <b style ={{ color: 'white' }}>Edit Teacher Profile</b>
                    </Form.Button>
                  </Row>
              </div>

              <div id = "seminarProfilePage" className = "tabcontent" >
                  <div style={{
                    backgroundImage: `url(${WavyTurquoise})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    marginBottom: 5,
                    paddingBottom: '20px'
                  }}>
                    <Text>
                      <br/><br/>
                      {seminarInfo.map((info, index) => {
                        return (
                          <Row key={index}>
                            <ProfileLeft>
                              <Label>{`${info.label} `}</Label>
                            </ProfileLeft>
                            <ProfileRight>
                              <EditInput
                                edit={editSeminar}
                                disabled={!editSeminar}
                                value={seminarProfile[info.state]}
                                onChange={e => seminarProfileDispatch({ type: info.dispatch, content: e.target.value })}/>
                            </ProfileRight>
                          </Row>
                        )
                      })}
                      <br/>
                    </Text>
                    {editSeminar && <Row style={{ alignItems: 'center' }}>
                      <Form.Button onClick={() => submitSeminar()} style={{ marginTop: 0, marginRight: 20, marginLeft: 20, width: 100, textAlign: 'center', fontSize: 18 }}>
                        <b style ={{ color: 'white' }}>Submit</b>
                      </Form.Button>
                      <Cancel onClick={() => cancelSeminar()} style ={{ color: 'white' }}>Cancel</Cancel>
                    </Row>}
                  </div>
                  <Row>
                    <Form.Button onClick={() => toggleEditSeminar(!editSeminar)} style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
                      <b style ={{ color: 'white' }}>Edit Seminar Profile</b>
                    </Form.Button>
                  </Row>
              </div>
          </ContainerInner>        
        </Container>
        
        <Footer/>
      </div>
    </>)
  }

  return (
    <>
      <Navbar/>
      <Container>
        <ContainerInner>
          <p>Failed...</p>
        </ContainerInner>
      </Container>

      <Footer/>
    </>)
}

export default Dashboard
