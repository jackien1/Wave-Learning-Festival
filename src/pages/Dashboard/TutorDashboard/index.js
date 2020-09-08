import React, { useState, useContext, useEffect, useReducer } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { Colors, Typography, Form } from '@/styles'
import './styles.css'
import { Cancel, EditInput, ProfileLeft, ProfileRight, Column, Text, Row, Label, Class, ClassText, Sections } from './styles.js'
import WavyPurple from '../../About/assets/wavy_purple.svg'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { getTutorRegistration } from "../../../graphql/queries.js"
import { updateTutorRegistration } from "../../../graphql/mutations.js"

const profileState = {
  firstName: '',
  lastName: '',
  school: '',
  email: '',
  gradYear: '',
  subjects: [],
  ageRanges: [],
  qualifications: '',
  why: '',
  experience: '',
  hours: '',
  questions: '',
  othersubjects: ''
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
    case 'SCHOOL':
      return ({
        ...state,
        school: action.content
      })
    case 'EMAIL':
      return ({
        ...state,
        email: action.content
      })
    case 'GRADYEAR':
      return ({
        ...state,
        gradYear: action.content
      })
    case 'SUBJECTS':
      return ({
        ...state,
        subjects: action.content
      })
    case 'AGERANGES':
      return ({
        ...state,
        ageRanges: action.content
      })
    case 'QUALIFICATIONS':
      return ({
        ...state,
        qualifications: action.content
      })
    case 'WHY':
      return ({
        ...state,
        why: action.content
      })
    case 'EXPERIENCE':
      return ({
        ...state,
        experience: action.content
      })
    case 'HOURS':
      return ({
        ...state,
        hours: action.content
      })
    case 'QUESTIONS':
      return ({
        ...state,
          questions: action.content
      })
    case 'OTHERSUBJECTS':
      return ({
        ...state,
        othersubjects: action.content
      })
    case 'RESET':
      return (action.content)
  }
}

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [user, setUser] = useState(null)
  const [student, setStudent] = useState(null)
  const [theError, setTheError] = useState(null)
  const [courses, setCourses] = useState([])
  const [coursesDisplayed, setCoursesDisplayed] = useState([])
  const [wave, setWave] = useState('5')
  const [edit, toggleEdit] = useState(false)
  const [localInfo, setLocalInfo] = useState({})
  const [docID, setDocID] = useState('')
  const [profile, profileDispatch] = useReducer(profileReducer, profileState)

  var id = 'student1';

  // const withdraw = (student, course, db) => {
  //   if (window.confirm('Are you sure you want to drop "' + course.courseTitle + '"?')) {
  //     db.collection('courseAssignments').doc(course.assignmentID).delete().then(function () {
  //       console.log('adding to deleted')
  //       db.collection('deleteAssignments')
  //         .add({
  //           courseID: course.id,
  //           studentID: student.id,
  //           waitlisted: course.waitlisted
  //         })
  //         .then(window.location.reload())
  //     })
  //   } else {
  //     // phew
  //   }
  // }

  const genFrag = function (label, data, dispatch, state) {
    return {
      label,
      data,
      dispatch,
      state
    }
  }

  const generateStudentInfo = function () {
    // var studentName = student.name
    // setStudent(API.graphql(graphqlOperation(getTeacher, {id: "student1"})));
    // if (typeof studentName === 'undefined') {
    //   studentName = student.name_first + ' ' + student.name_last
    // }
    const teacherInfo = student.data.getTutorRegistration;
    return [
      genFrag('First Name', teacherInfo.first_name, 'FIRSTNAME', 'firstName'),
      genFrag('Last Name', teacherInfo.last_name, 'LASTNAME', 'lastName'),
      genFrag('School', teacherInfo.school, 'SCHOOL', 'school'),
      genFrag('Email', teacherInfo.email, 'EMAIL', 'email'),
      genFrag('Graduation Year', teacherInfo.gradYear, 'GRADYEAR', 'gradYear'),
      genFrag('Subjects', teacherInfo.subjects, 'SUBJECTS', 'subjects'),
      genFrag('Age Ranges', teacherInfo.ageRanges, 'AGERANGES', 'ageRanges'),
      genFrag('Hours', teacherInfo.hours, 'HOURS', 'hours'),
      genFrag('Other Subjects', teacherInfo.othersubjects, 'OTHERSUBJECTS', 'othersubjects'),
    ]
  }

  const updateStudent = async () => {
    try {
      const teacherData = await API.graphql(graphqlOperation(getTutorRegistration, {id: "student1"}));
      setStudent(teacherData);
    } catch (error) {
        console.log('error on fetching songs', error);
    }
  }

  useEffect(() => {
    updateStudent();
  }, []);

  // useEffect(() => {
  //   setCoursesDisplayed(courses.filter(course => {
  //     for (let i = 0; i < courses.length; i++) {
  //       if (course.wave.includes(wave)) {
  //         return true
  //       }
  //     }
  //     return false
  //   }))
  // }, [wave])

  useEffect(() => {
    if (student) {
      var studentInfo = generateStudentInfo(student)
      var studentName = student.name
      if (typeof studentName === 'undefined') {
        studentName = student.name_first + ' ' + student.name_last
      }
      setLocalInfo({
        firstName: student.first_name,
        lastName: student.last_name,
        school: student.school,
        email: student.email,
        gradYear: student.gradYear,
        subjects: student.subjects,
        ageRanges: student.ageRanges,
        qualifications: student.qualifications,
        why: student.why,
        experience: student.experience,
        hours: student.hours,
        questions: student.questions,
        othersubjects: student.othersubjects
      })
      studentInfo.forEach(label => {
        profileDispatch({ type: label.dispatch, content: label.data })
      })
    }
  }, [student])

  const cancel = () => {
    profileDispatch({ type: 'RESET', content: localInfo })
    toggleEdit(false)
  }

  const submit = () => {
    API.graphql(graphqlOperation(updateTutorRegistration, {
    input: {id: id,
      first_name: profile.first_name,
      last_name: profile.last_name,
      school: profile.school,
      email: profile.email,
      gradYear: profile.gradYear,
      subjects: [],
      ageRanges: [],
      qualifications: '',
      why: '',
      experience: '',
      hours: '',
      questions: '',
      othersubjects: ''
    }}))

    setLocalInfo(profile)
    toggleEdit(false)
  }

  if (false) {
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

  if (student) {
    var studentInfo = generateStudentInfo()
    return (<>
      <div>
        <Navbar/>
        <Container>
          <ContainerInner>
            <Sections>
              <Column>
                <Typography.Header style={{ color: Colors.WLF_PURPLE }}>My Profile</Typography.Header>
                <div style={{
                  backgroundImage: `url(${WavyPurple})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  marginBottom: 5,
                  paddingBottom: '20px'
                }}>
                  <Text>
                    <br/><br/>
                    {studentInfo.map((info, index) => {
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
                  {!edit && 
                    <Form.Button onClick={() => toggleEdit(!edit)} style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
                      <b style ={{ color: 'white' }}>Edit Profile</b>
                    </Form.Button>
                  }
                </Row>
              </Column>
            </Sections>
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
          <p>Loading information for...</p>
        </ContainerInner>
      </Container>

      <Footer/>
    </>)
}

export default Dashboard
