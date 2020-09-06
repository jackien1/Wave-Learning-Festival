import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as Styles from './styles'
import HighlightPic from './img/keynote.jpg'
import { Colors, Typography, Form } from '@/styles'
import Logo from './logo.png'
import { FirebaseContext } from '@/firebaseContext'
import { BodyText } from '@/styles/Typography'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createTeacherRegistration, createNewsletter } from "../../../graphql/mutations.js"


const EventHome = ({ setPage }) => {
  return (<>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Instructors
    </Typography.Header>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: -10 }}>
    Welcome! Join us on Zoom to hear from influential leaders currently making an impact through medicine, education, development, technology, and entrepreneurship in communities all around the world. The event will consist of a keynote speaker, and then concurrent breakout rooms of panel discussions with accomplished leaders in education, medicine & healthcare, and technology & entrepreneurship!
    </Typography.BodyText>
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Form.Button onClick={() => setPage('teacherData')}>
        <Typography.Header color="white" fontSize="24px">
          Sign Up Now!
        </Typography.Header>
      </Form.Button>
      <div style={{ flex: 1 }} />
  </div>
  <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: 30 }}>
    Each participant will indicate the panel discussion in which they would like to engage.
    <br />
    Date of Event: Saturday, September 26, 2020, 1:00-4:00pm EDT, 10:00-1:00pm PST, 6:00-9:00pm GMT
    <br />
    Schedule:
    <br />
    1:00 - 2:15 pm EDT: Keynote Speaker, Zulfiqar A. Bhutta
    <br />
    2:15 - 4:00 pm EDT: Panel Discussions in Medicine, Education, and Technology
    </Typography.BodyText>
    <Styles.TestimonialBackground>
      <Styles.TestimonialItem>
        <Styles.TeacherImage src={HighlightPic} />
      </Styles.TestimonialItem>
      <Styles.TestimonialItem style={{ alignItems: 'flex-start' }}>
        <Typography.Header color={Colors.WLF_YELLOW} fontSize="28px">
        Keynote Speaker: Dr. Zulfiqar A. Bhutta
        </Typography.Header>
        <Typography.Header color={Colors.WLF_YELLOW} fontSize="20px">
        Inaugural Robert Harding Chair in Global Child Health at The Hospital for Sick Children (SickKids), Co-Director of the SickKids Centre for Global Child Health and the Founding Director of the Centre of Excellence in Women and Child Health at the Aga Khan University
        </Typography.Header>
      </Styles.TestimonialItem>
    </Styles.TestimonialBackground>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: 30 }}>
    Panel Discussion in Medicine & Healthcare: <br />
    <div className="teacher-container" key={teacher.name}>
          <p>
          <img src={WaveLogo} className="img-left"/>
          <b>Taught by: </b>{teacher.name}<br/>
          <b>Teacher Bio: </b>{teacher.bio}
          </p>
        </div>
    Dr. Nick Ellis - MEDLIFE, Executive Director and Founder <br />
    Dr. Angel M Matos Lugo - Global Health Institute, Director
    </Typography.BodyText>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: 30 }}>
    Panel Discussion in Education:<br />
    Benjamin Owens - Silicon Valley Youth, Co-Founder and CEO, Harvard '21<br />
    Oliver Ye - Silicon Valley Youth, President, Saratoga High '21<br />
    Karly Hou - Wave Learning Festival, Founder and Chair, Harvard '23
    </Typography.BodyText>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: 30 }}>
    Panel Discussion in Technology & Entrepreneurship: <br />
    Omar Farooqui - Coded Minds, Founder and President<br />
    Carlos Pereira - Livox, Founder and CEO
    </Typography.BodyText>
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Form.Button onClick={() => setPage('teacherData')}>
        <Typography.Header color="white" fontSize="24px">
          Sign Up Now!
        </Typography.Header>
      </Form.Button>
  <div style={{ flex: 1 }} />
  </div>
  </>)
}

var emailValidated = function(email) {
  //Based on thouroughly tested regex
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(String(email.replace(" ", "")));
}

const EventDataInput = () => {
  return (
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScT61H0wl1PXj3LgLwta2prQ1Wvv3b-WEDdMKwwIMapaYJ0RA/viewform?embedded=true" 
      width="90%" 
      height="520" 
      frameborder="0" 
      margin="10px">
      Loading…
    </iframe>
  )
}

const Thanks = ({ setPage }) => (
  <>
    <Typography.Header color={Colors.WLF_YELLOW}>Thank you for applying!</Typography.Header>
    <Typography.Header2 color="white">You should receive a confirmation email within the next few days, and we will reach out regarding interviews within a couple weeks. If you have any questions/concerns, please email us at wavelearningfestival@gmail.com.</Typography.Header2>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Form.Button onClick={() => setPage('home')}>
        <Typography.Header color="white" fontSize="24px">
          Back to Teacher Page
        </Typography.Header>
      </Form.Button>
    </div>
  </>
)

const Teachers = () => {
  const [page, setPage] = useState('home')
  const [wrongSubmission, setWrongSubmission] = useState("")
  const [teacherData, setTeacherData] = useState({
    first_name: "",
    last_name: "",
    school: "",
    gradYear: "",
    coFirst: "",
    coLast: "",
    coEmail: "",
    coSchool: "",
    coYear: "",
    seminarTitle: "",
    seminarDesc: "",
    numSessions: "",
    qualifications: "",
    priorTeaching: "",
    engagement: "",
    skills: "",
    previousWaves: "",
    questions: ""
  })
  const [coData, setCoData] = useState({
    name: '',
    email: '',
    school: '',
    gradYear: '',
    pronouns: ''
  })
  const [classData, setClassData] = useState({
    title: '',
    description: '',
    grade: '',
    schedule: '',
    runTime: '',
    times: '',
    qualified: ''
  })
  const { db } = useContext(FirebaseContext)

  const resetData = () => {
    setTeacherData({
      name: '',
      email: '',
      school: '',
      gradYear: '',
      pronouns: '',
      inDemand: [],
      referral: [],
      otherReferral: '',
      comment: ''
    })
    setCoData({
      name: '',
      email: '',
      school: '',
      gradYear: '',
      pronouns: ''
    })
    setClassData({
      title: '',
      description: '',
      grade: '',
      schedule: '',
      runTime: '',
      times: '',
      qualified: ''
    })
  }

  var requiredFields = (form) => {
    return form.first_name != "" &&
      form.last_name != "" &&
      form.email != "" &&
      form.school != "" &&
      form.gradYear != "" &&
      form.seminarTitle != "" &&
      form.seminarDesc != "" &&
      form.numSessions != "" &&
      form.qualifications != "" &&
      form.priorTeaching != "" &&
      form.engagement != "" &&
      form.skills != "" &&
      form.previousWaves != "";
  }

  const submit = () => {
    console.log(teacherData);
    var email = teacherData.email.toLowerCase();
    if (!emailValidated(email)) {
      setWrongSubmission("Invalid email.");
    } else if (!requiredFields(teacherData)) {
      setWrongSubmission("Please fill out all required fields marked with an asterisk (*).")
    } else {
      API.graphql(graphqlOperation(createTeacherRegistration, {
        input: {
          first_name: teacherData.first_name,
          last_name: teacherData.last_name,
          school: teacherData.school,
          email: email,
          gradYear: teacherData.gradYear,
          coFirst: teacherData.coFirst,
          coLast: teacherData.coLast,
          coEmail: teacherData.coEmail,
          coSchool: teacherData.coSchool,
          coYear: teacherData.coYear,
          seminarTitle: teacherData.seminarTitle,
          seminarDesc: teacherData.seminarDesc,
          numSessions: teacherData.numSessions,
          qualifications: teacherData.qualifications,
          priorTeaching: teacherData.priorTeaching,
          engagement: teacherData.engagement,
          skills: teacherData.skills,
          previousWaves: teacherData.previousWaves,
          questions: teacherData.questions
        }
      }));
      setPage('thanks');
    }

  }

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Navbar />
      {page !== 'teacherData' && <Styles.TeacherBackground>
        <div style={{ maxWidth: 800 }}>
          {page === 'home' && EventHome({ setPage })}
          {page === 'thanks' && Thanks({ setPage })}
        </div>
      </Styles.TeacherBackground>}
      {page === 'teacherData' &&  <Styles.TeacherBackgroundForm>
          {EventDataInput({ setPage, teacherData, setTeacherData, submit, wrongSubmission })}
      </Styles.TeacherBackgroundForm>}
      <Footer />
    </div>
  )
}

export default Teachers
