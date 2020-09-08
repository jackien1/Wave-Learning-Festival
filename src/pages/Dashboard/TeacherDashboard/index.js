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
  name: '',
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
  // const [student, setStudent] = useState(null)
  const [theError, setTheError] = useState(null)
  // const [courses, setCourses] = useState([])
  const [coursesDisplayed, setCoursesDisplayed] = useState([])
  const [wave, setWave] = useState('5')
  const [edit, toggleEdit] = useState(false)
  const [localInfo, setLocalInfo] = useState({})
  const [docID, setDocID] = useState('')
  // const { db, storage, auth } = useContext(FirebaseContext)
  const [profile, profileDispatch] = useReducer(profileReducer, profileState)
  const [teacher, setTeacher] = useState(null)
  const [seminar, setSeminar] = useState(null)

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
      genFrag('Name', teacher.data.getTeacher.first_name, 'NAME', 'name'),
      genFrag('Email', teacher.data.getTeacher.email, 'EMAIL', 'email'),
      genFrag('School', teacher.data.getTeacher.school, 'SCHOOL', 'school'),
      genFrag('GradYear', teacher.data.getTeacher.gradYear, 'GRADYEAR', 'gradyear'),
      genFrag('Country', teacher.data.getTeacher.country, 'COUNTRY', 'country'),
      genFrag('City', teacher.data.getTeacher.city, 'CITY', 'city')

      // genFrag('Name', teacher.first_name, 'NAME', 'name'),
      // genFrag('Email', teacher.email, 'EMAIL', 'email'),
      // genFrag('School', teacher.school, 'SCHOOL', 'school'),
      // genFrag('GradYear', teacher.gradYear, 'GRADYEAR', 'gradyear'),
      // genFrag('Country', teacher.country, 'COUNTRY', 'country'),
      // genFrag('City', teacher.city, 'CITY', 'city')

      // genFrag('Name', 'Swathi', 'NAME', 'name'),
      // genFrag('Email', 'swathin@live.com', 'EMAIL', 'email'),
      // genFrag('School', 'Eastlake High School', 'SCHOOL', 'school'),
      // genFrag('GradYear', '2021', 'GRADYEAR', 'gradyear'),
      // genFrag('Country', 'USA', 'COUNTRY', 'country'),
      // genFrag('City', 'Sammamish', 'CITY', 'city')
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

 const updateTeacher = async () => {
    try { 
      const teacherData = await API.graphql(graphqlOperation(getTeacher, {id: "student1"}));      
    setTeacher(teacherData);
    } catch (error) {
        console.log('error on fetching songs', error);
    }
  }

  useEffect(() => {
    updateTeacher();
  }, []);



  // useEffect(() => {
  //   if (db && auth) {
  //     console.log("call " + calledOnce);
  //     auth.onAuthStateChanged(function (theUser) {
  //       if (theUser) {
  //         console.log(result.user.uid);

  //         setUser(theUser)
  //         db.collection('StudentRegistrations').where('userID', '==', theUser.uid).get().then(function (snapshot) {
  //           var students = []
  //           snapshot.forEach(function (snap) {
  //             students.push(snap)
  //           })
  //           if (students.length > 0) {
  //             var coursesResult = []
  //             setDocID(students[0].id)
  //             setStudent(students[0].data())
  //             var theStudent = students[0].data()
  //             db.collection('courseAssignments').where('studentID', '==', theStudent.id).get().then(function (assignments) {
  //               var currentlyCounted = 0
  //               var courseData = []
  //               assignments.forEach(function (snap) {
  //                 courseData.push({ data: snap.data(), id: snap.id })
  //               })
  //               var numCourses = courseData.length
  //               if (numCourses >= 0) {
  //                 setLoading(false)
  //               }
  //               var currentNum = 0
  //               courseData.forEach((course, i) => {
  //                 const current = course
  //                 const courseId = current.data.courseID
  //                 db.collection('fl_content').where('id', '==', courseId).get().then(function (snapshot) {
  //                   var isWaitlisted = current.data.waitlisted
  //                   currentNum++
  //                   var courses = []
  //                   snapshot.forEach(function (snap) {
  //                     courses.push(snap)
  //                   })
  //                   var toPush = courses[0].data()
  //                   db.doc(toPush.picture[0].path).get().then(function (picture) {
  //                     storage.child('flamelink/media/' + picture.data().file).getDownloadURL()
  //                       .then(function (url) {
  //                         toPush.waitlisted = isWaitlisted
  //                         toPush.imageUrl = url
  //                         toPush.assignmentID = current.id
  //                         coursesResult.push(toPush)
  //                         if (numCourses == currentNum) {
  //                           setCourses(coursesResult)
  //                           setCoursesDisplayed(coursesResult.filter(course => {
  //                             for (let i = 0; i < courses.length; i++) {
  //                               if (course.wave.includes(wave)) {
  //                                 return true
  //                               }
  //                             }
  //                             return false
  //                           }))
  //                           setLoading(false)
  //                         }
  //                       })
  //                   })
  //                 })
  //               })
  //             })
  //           }
  //         })
  //       } else {
  //         window.location.href = '/sign-in'
  //       }
  //     })
  //   }
  // }, [db, storage, auth])

  useEffect(() => {  }, [wave])

  useEffect(() => {
    if (teacher) {
      var teacherInfo = generateTeacherInfo(teacher)
      var teacherName = teacher.name
      if (typeof teacherName === 'undefined') {
        teacherName = teacher.name_first + ' ' + teacher.name_last
      }
      setLocalInfo({
        name: teacherName,
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
    API.graphql(graphqlOperation(updateTeacher, {
      input: {id: profile.id,
        first_name: profile.first_name,
        last_name: profile.last_name,
        school: profile.school,
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

  const openProfile = function (evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
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
                <button className= "tablinks"> 
                {/* onClick ={openProfile(event, 'TeacherProfile')}> */}
                  <Typography.Header style={{ color: Colors.WLF_PURPLE }}>My Profile</Typography.Header>                
                </button>
                <button className = "tablinks">
                   {/* onClick ={openProfile(event, 'TideProfile')}> */}
                  <Typography.Header style={{ color: Colors.WLF_TURQOUISE }}>My Tide</Typography.Header>                  
                </button>            
              </div>

              <div id = "TeacherProfile">
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

              <div id = "CourseProfile">
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
