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
import { getSeminar } from "../../../graphql/queries.js"
import { updateTeacher } from "../../../graphql/mutations.js"



const profileState = {
  // Personal Data
  firstName: '',
  lastName: '',
  email: '',
  school: '',
  gradYear: '',
  country: '',
  city: '',
  // Course Data - refer to AWS GraphQL Schema for types
  couDescrip: '',
  couTitle:'',
  couCategory:'', // make a dropdown
  couMaxSize:'',
  couPrereqs:'',
  couSyllabus:'',
  couTargAud:'',
  couEnrolled:'',
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
  // COURSE DATA
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
  const [localInfo, setLocalInfo] = useState({})
  const [docID, setDocID] = useState('')
  const [profile, profileDispatch] = useReducer(profileReducer, profileState)
  const [teacher, setTeacher] = useState([])
  const [seminar, setSeminar] = useState(null)
  
  var id = 'student1';

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

  const generateSeminarInfo = function (seminar){
    var student = API.graphql(graphqlOperation(getTeacher, {id: "student1"}))
    console.log(student)
    return [
      // genFrag('CouTitle', seminar.courseTitle, 'COUTITLE', 'title'),
      // genFrag('CouMaxSize', seminar.maxClassSize, 'COUMAXSIZE', 'maxSize'),
      // genFrag('CouPreReqs', seminar.prereqs, 'COUPREREQS', 'preReqs'),
      // genFrag('CouDescrip', seminar.courseDescription, 'COUDESCRIP', 'description')

      genFrag('Tide Title', 'my title!', 'COUTITLE', 'title'),
      genFrag('Max Size', '20', 'COUMAXSIZE', 'maxSize'),
      genFrag('Prerequisites', 'just be awesome', 'COUPREREQS', 'preReqs'),
      genFrag('Description', 'fun fun fun!', 'COUDESCRIP', 'description')
    ]
  }

 const getTeacherData = async () => {
    try { 
      const teacherData = await API.graphql(graphqlOperation(getTeacher, {id: "student1"}));      
    setTeacher(teacherData);
    } catch (error) {
        console.log('error on fetching songs', error);
    }
  }

  useEffect(() => {
    getTeacherData();
  }, []);


  useEffect(() => {  }, [wave])

  useEffect(() => {
    if (teacher) {
      var teacherInfo = generateTeacherInfo(teacher)
      setLocalInfo({
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
      var courseInfo = generateSeminarInfo(seminar)
      var courseName = seminar.courseTitle
      setLocalInfo({
        title: courseName,
        maxSize: seminar.maxClassSize,
        preReqs: seminar.prereqs,
        description: seminar.courseDescription
      })
      courseInfo.forEach(label => {
        profileDispatch({ type: label.dispatch, content: label.data })
      })
    }
  }, [seminar])

  const cancel = () => {
    profileDispatch({ type: 'RESET', content: localInfo })
    toggleEdit(false)
  }

  const submit = () => {
    console.log(profile);
    API.graphql(graphqlOperation(updateTeacher, {
      input: {id: id,
        first_name: profile.firstName,
        last_name: profile.lastName,
        school: profile.school
      }}))

    setLocalInfo(profile)
    toggleEdit(false)
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

  const openProfile = function (evt, page) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(page).style.display = "block";
    evt.currentTarget.className += " active";
  }

  if (teacher) {
    var teacherInfo = generateTeacherInfo(teacher)
    var courseInfo = generateSeminarInfo(seminar)
    return (<>
      <div>
        <Navbar/>
        <Container>
        <ContainerInner>
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>
            Instructor Dashboard
          </Typography.Header>
        </ContainerInner>
        </Container>
        
        <Container>
          <ContainerInner>
              <div class = "tab" style = {{
                paddingBottom: '10px'
              }}>
                <button className= "tablinks" onClick ={openProfile(event, 'TeacherProfile')}>
                  <Typography.Header style={{ color: Colors.WLF_PURPLE }}>My Profile</Typography.Header>                
                </button>
                <button className = "tablinks" onClick ={openProfile(event, 'TideProfile')}>
                  <Typography.Header style={{ color: Colors.WLF_TURQOUISE }}>My Tide</Typography.Header>                  
                </button>            
              </div>

              <div id = "TeacherProfile" className = "tabcontent">
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
                      <Form.Button onClick={() => submit()} style={{ marginTop: 0, marginRight: 20, marginLeft: 20, width: 100, textAlign: 'center', fontSize: 18 }}>
                        <b style ={{ color: 'white' }}>Submit</b>
                      </Form.Button>
                      <Cancel onClick={() => cancel()} style ={{ color: 'white' }}>Cancel</Cancel>
                    </Row>}
                  </div>
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
                    <Form.Button onClick={() => toggleEdit(!edit)} style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
                      <b style ={{ color: 'white' }}>Edit Profile</b>
                    </Form.Button>
                  </Row>
              </div>

              <div id = "CourseProfile" className = "tabcontent">
                  <div style={{
                    backgroundImage: `url(${WavyTurquoise})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    marginBottom: 5,
                    paddingBottom: '20px'
                  }}>
                    <Text>
                      <br/><br/>
                      {courseInfo.map((info, index) => {
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
                      <Form.Button onClick={() => submit()} style={{ marginTop: 0, marginRight: 20, marginLeft: 20, width: 100, textAlign: 'center', fontSize: 18 }}>
                        <b style ={{ color: 'white' }}>Submit</b>
                      </Form.Button>
                      <Cancel onClick={() => cancel()} style ={{ color: 'white' }}>Cancel</Cancel>
                    </Row>}
                  </div>
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
                    <Form.Button onClick={() => toggleEdit(!edit)} style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
                      <b style ={{ color: 'white' }}>Edit Profile</b>
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
