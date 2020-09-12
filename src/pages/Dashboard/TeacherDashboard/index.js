import React, { useState, useContext, useEffect, useReducer } from 'react'
import Navbar from './components/Navbar'
import Footer from '@/components/Footer'
import { Colors, Typography, Form } from '@/styles'
// import { FirebaseContext } from '../../firebaseContext'
import CourseInfo from './components/CourseInfo'
import Selector from './components/Selector'
import ClassDetails from './components/ClassDetails'
import InstructorDetails from './components/InstructorDetails'
import './styles.css'
import { InfoContainerInner, InfoContainer, Container, ContainerInner, Cancel, EditInput, ProfileLeft, ProfileRight, Column, Text, Row, Label, Class, ClassText, Sections } from './styles.js'
import WavyPurple from '../../About/assets/wavy_purple.svg'
import WavyTurquoise from '../../About/assets/wavy_turquoise.svg'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getTeacher, listTeachers, getSeminar, listSeminar } from '../../../graphql/queries.js'

import { updateTeacher, updateSeminar } from '../../../graphql/mutations.js'

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
  bio: ''
}

const seminarProfileState = {
  // Course Data - refer to AWS GraphQL Schema for types
  couTitle: '',
  couMaxSize: 0,
  couPrereqs: '',
  couDescrip: '',
  couCategory: [], // make a dropdown
  couSyllabus: '',
  couTargAud: [],
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

    case 'BIO':
      return ({
        ...state,
        bio: action.content
      })
    case 'RESET':
      return (action.content)
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
  const [tab, setTab] = useState(true)
  const [loading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [user, setUser] = useState(null)
  const [edit, toggleEdit] = useState(false)
  const [editSeminar, toggleEditSeminar] = useState(false)
  const [localTeacherInfo, setLocalTeacherInfo] = useState({})
  const [localSeminarInfo, setLocalSeminarInfo] = useState({})
  const [profile, profileDispatch] = useReducer(profileReducer, profileState)
  const [seminarProfile, seminarProfileDispatch] = useReducer(seminarProfileReducer, seminarProfileState)
  const [teacher, setTeacher] = useState(null)
  const [seminar, setSeminar] = useState(null)
  // const [tab, setTab] = useState('course')

  var teacherId = 'student1'
  var seminarId = 'seminar1'

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
      genFrag('City', teacher.data.getTeacher.city, 'CITY', 'city'),
      genFrag('Bio', teacher.data.getTeacher.bio, 'BIO', 'bio')

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
      const teacherData = await API.graphql(graphqlOperation(getTeacher, { id: teacherId }))
      setTeacher(teacherData)
      console.log(teacherData)
    } catch (error) {
      console.log('error on fetching data', error)
    }
  }

  const getSeminarData = async () => {
    try {
      const seminarData = await API.graphql(graphqlOperation(getSeminar, { id: seminarId }))
      console.log(seminarData)
      setSeminar(seminarData)
    } catch (error) {
      console.log('error on fetching data', error)
    }
  }

  useEffect(() => {
    getTeacherData()
  }, [])

  useEffect(() => {
    getSeminarData()
  }, [])

  useEffect(() => {
    if (teacher) {
      var teacherInfo = generateTeacherInfo(teacher)
      console.log(teacher)
      setLocalTeacherInfo({
        firstName: teacher.data.getTeacher.first_name,
        lastName: teacher.data.getTeacher.last_name,
        email: teacher.data.getTeacher.email,
        school: teacher.data.getTeacher.school,
        gradYear: teacher.data.getTeacher.gradYear,
        country: teacher.data.getTeacher.country,
        city: teacher.data.getTeacher.city,
        bio: teacher.data.getTeacher.bio
      })
      teacherInfo.forEach(label => {
        console.log(label)

        profileDispatch({ type: label.dispatch, content: label.data })
      })
    }
  }, [teacher])

  useEffect(() => {
    if (seminar) {
      var seminarInfo = generateSeminarInfo(seminar)
      console.log(seminar)
      setLocalSeminarInfo({
        courseTitle: seminar.data.getSeminar.courseTitle,
        maxClassSize: seminar.data.getSeminar.maxClassSize,
        prereqs: seminar.data.getSeminar.prereqs,
        targetAudience: seminar.data.getSeminar.targetAudience,
        courseDescription: seminar.data.getSeminar.courseDescription,
        updatedAt: seminar.data.getSeminar.updatedAt
      })
      seminarInfo.forEach(label => {
        seminarProfileDispatch({ type: label.dispatch, content: label.data })
      })
    }
  }, [seminar])

  const cancelTeacher = () => {
    profileDispatch({ type: 'RESET', content: localTeacherInfo })
  }

  const cancelSeminar = () => {
    seminarProfileDispatch({ type: 'RESET', content: localSeminarInfo })
  }

  const submitTeacher = () => {
    console.log(profile)
    API.graphql(graphqlOperation(updateTeacher, {
      input: {
        id: teacherId,
        first_name: profile.firstName,
        last_name: profile.lastName,
        school: profile.school,
        bio: profile.bio
      }
    }))
    setLocalTeacherInfo(profile)
    toggleEdit(false)
  }

  const submitSeminar = () => {
    console.log(seminarProfile)
    API.graphql(graphqlOperation(updateSeminar, {
      input: {
        id: seminarId,
        courseTitle: seminarProfile.courseTitle,
        maxClassSize: seminarProfile.maxClassSize,
        prereqs: seminarProfile.prereqs,
        courseDescription: seminarProfile.courseDescription
      }
    }))
    setLocalSeminarInfo(seminarProfile)
    toggleEditSeminar(false)
  }

  const openTeacherProfilePage = () => {
    document.getElementById('teacherProfilePage').style.display = 'block'
    document.getElementById('seminarProfilePage').style.display = 'none'
  }

  const openSeminarProfilePage = () => {
    document.getElementById('teacherProfilePage').style.display = 'none'
    document.getElementById('seminarProfilePage').style.display = 'block'
  }

  if (teacher && seminar) {
    var teacherInfo = generateTeacherInfo(teacher)
    var seminarInfo = generateSeminarInfo(seminar)
    return (<>
      <div>
        <Navbar style={{ zIndex: 10 }}/>
        <Container>
          <ContainerInner>

            <CourseInfo
              title = {seminarProfile.courseTitle}
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
        <InfoContainer >
          <Selector setTab={setTab}/>

          <InfoContainerInner>
            {tab && <ClassDetails
              cancelSeminar = {cancelSeminar}
              submitSeminar = {submitSeminar}
              seminarProfileDispatch = {seminarProfileDispatch}
              maxClassSize = {seminarProfile.maxClassSize}
              title = {seminarProfile.courseTitle}
              description = {seminarProfile.courseDescription}
              targetAudience = {seminarProfile.targetAudience}
              prereqs = {seminarProfile.prereqs}
              courseId = {seminarId}/>}

            {!tab && <InstructorDetails
              cancelTeacher = {cancelTeacher}
              submitTeacher = {submitTeacher}
              profileDispatch = {profileDispatch}
              bio = {profile.bio}
              school = {profile.school}
              first = {profile.firstName}
              last = {profile.lastName}

            />}

          </InfoContainerInner>
        </InfoContainer>
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
