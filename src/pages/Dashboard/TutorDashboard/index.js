import React, { useState, useContext, useEffect, useReducer } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { Colors, Typography, Form } from '@/styles'
// import { FirebaseContext } from '../../firebaseContext'
import './styles.css'
import { Cancel, EditInput, ProfileLeft, ProfileRight, Column, Text, Row, Label, Class, ClassText, Sections } from './styles.js'
import WavyPurple from '../../About/assets/wavy_purple.svg'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { getTeacher } from "../../../graphql/queries.js"

const profileState = {
  name: '',
  email: '',
  parentName: '',
  parentEmail: '',
  age: '',
  school: '',
  country: '',
  city: ''
}

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'NAME':
      return ({
        ...state,
        name: action.content
      })
    case 'EMAIL':
      return ({
        ...state,
        email: action.content
      })
    case 'PARENTNAME':
      return ({
        ...state,
        parentName: action.content
      })
    case 'PARENTEMAIL':
      return ({
        ...state,
        parentEmail: action.content
      })
    case 'AGE':
      return ({
        ...state,
        age: action.content
      })
    case 'SCHOOL':
      return ({
        ...state,
        school: action.content
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
  // const { db, storage, auth } = useContext(FirebaseContext)
  const [profile, profileDispatch] = useReducer(profileReducer, profileState)

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
    const teacherInfo = student.data.getTeacher;
    console.log(teacherInfo);
    return [
      genFrag('Name', teacherInfo.first_name + teacherInfo.last_name, 'NAME', 'name'),
      genFrag('Email', teacherInfo.email, 'EMAIL', 'email'),
      genFrag('Parent Name', teacherInfo.first_name, 'PARENTNAME', 'parentName'),
      genFrag('Parent Email', teacherInfo.first_name, 'PARENTEMAIL', 'parentEmail'),
      genFrag('Age', '100', teacherInfo.first_name, 'age'),
      genFrag('School', teacherInfo.school, 'SCHOOL', 'school'),
      genFrag('Country', teacherInfo.country, 'COUNTRY', 'country'),
      genFrag('City', teacherInfo.city, 'CITY', 'city')
    ]
  }

  const updateStudent = async () => {
    try {
      const teacherData = await API.graphql(graphqlOperation(getTeacher, {id: "student1"}));
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
        name: studentName,
        email: student.email,
        parentName: student.parentName,
        parentEmail: student.parentEmail,
        age: student.age,
        school: student.school,
        country: student.country,
        city: student.city
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
    console.log(localInfo.name);
    // if (localInfo.name !== profile.name ||
    //        localInfo.email !== profile.email ||
    //        localInfo.parentName !== profile.parentName ||
    //         localInfo.parentEmail !== profile.parentEmail) {
    //   const editRef = db.collection('editAssignments').where('studentId', '==', student.id)
    //   editRef.get().then(snapshot => {
    //     if (!snapshot.empty) {
    //       // db.collection('editAssignments').doc(snapshot.docs[0].id).update({
    //       //   name: profile.name,
    //       //   email: profile.email,
    //       //   parentName: profile.parentName,
    //       //   parentEmail: profile.parentEmail,
    //       //   studentId: student.id,
    //       //   userId: student.userID,
    //       //   courses: coursesDisplayed
    //       // })
    //       console.log('lol');
    //     } else {
    //       // db.collection('editAssignments').add({
    //       //   name: profile.name,
    //       //   email: profile.email,
    //       //   parentName: profile.parentName,
    //       //   parentEmail: profile.parentEmail,
    //       //   studentId: student.id,
    //       //   userId: student.userID,
    //       //   courses: coursesDisplayed
    //       // })
    //       console.log('yeet');
    //     }
    //   })
    // }
    const name = profile.name.split(' ')
    // db.collection('StudentRegistrations').doc(docID).update({
    //   name_first: name[0],
    //   name_last: name[1],
    //   email: profile.email,
    //   parentEmail: student.parentEmail,
    //   parentName: profile.parentName,
    //   age: profile.age,
    //   school: profile.school,
    //   country: profile.country,
    //   city: profile.city
    // })

    // if (localInfo.email !== profile.email) {
    //   auth.onAuthStateChanged(function (user) {
    //     if (user) {
    //       user.updateEmail(profile.email).then(() => {
    //
    //       }).catch(e => {
    //         throw e
    //       })
    //     } else {
    //     }
    //   })
    // }

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
                  <Form.Button onClick={() => toggleEdit(!edit)} style={{ margin: 5, width: 200, textAlign: 'center', fontSize: 18 }}>
                    <b style ={{ color: 'white' }}>Edit Profile</b>
                  </Form.Button>
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
