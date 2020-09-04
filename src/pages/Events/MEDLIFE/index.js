import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as Styles from './styles'
import TeacherPic from './TempImg.png'
import { Colors, Typography, Form } from '@/styles'
import Logo from './logo.png'
import { FirebaseContext } from '@/firebaseContext'
import { BodyText } from '@/styles/Typography'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createTeacherRegistration, createNewsletter } from "../../../graphql/mutations.js"


const TeacherHome = ({ setPage }) => {
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
  {/*<Typography.BodyText color={Colors.WLF_YELLOW} fontSize="20px">
      <b><br/>Applications will open before 8/25. If you have submitted an application on 8/24, you may need to resubmit if you do not recieve any follow-up. </b>
  </Typography.BodyText>*/}
    <Styles.TestimonialBackground>
      <Styles.TestimonialItem>
        <Styles.TeacherImage src={TeacherPic} />
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
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Form.Button onClick={() => setPage('teacherData')}>
        <Typography.Header color="white" fontSize="24px">
          Sign Up Now!
        </Typography.Header>
      </Form.Button>
  <div style={{ flex: 1 }} />
  </div>

    {/*<Typography.BodyText color={Colors.WLF_YELLOW} fontSize="20px">
      <b>Applications will open before 8/25. </b>
</Typography.BodyText>*/}

  </>)
}

var emailValidated = function(email) {
  //Based on thouroughly tested regex
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(String(email.replace(" ", "")));
}

const TeacherDataInput = ({ setPage, teacherData, setTeacherData, submit, wrongSubmission }) => {
  return (<div style={{ width: '100%' }}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Instructor Information
    </Typography.Header>

    <Typography.Header2 color="white" fontSize="24px">
      First Name *
    </Typography.Header2>
    <Form.Input
      value={teacherData.first_name}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          first_name: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Last Name *
    </Typography.Header2>
    <Form.Input
      value={teacherData.last_name}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          last_name: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Email *
    </Typography.Header2>
    <Form.Input
      value={teacherData.email}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          email: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      School *
    </Typography.Header2>
    <Form.Input
      value={teacherData.school}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          school: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Graduation Year *
    </Typography.Header2>
    <Typography.BodyText color="white">
      You must be at least a high school junior to apply.
    </Typography.BodyText>
    <Form.Input
      value={teacherData.gradYear}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          gradYear: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Co-Instructor First Name
    </Typography.Header2>
    <Form.Input
      value={teacherData.coFirst}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          coFirst: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Co-Instructor Last Name
    </Typography.Header2>
    <Form.Input
      value={teacherData.coLast}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          coLast: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Co-Instructor Email
    </Typography.Header2>
    <Form.Input
      value={teacherData.coEmail}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          coEmail: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Co-Instructor School
    </Typography.Header2>
    <Form.Input
      value={teacherData.coSchool}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          coSchool: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Co-Instructor Graduation Year
    </Typography.Header2>
    <Typography.BodyText color="white">
      Your co-instructor must be at least a high school junior to apply.
    </Typography.BodyText>
    <Form.Input
      value={teacherData.coYear}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          coYear: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Proposed Seminar Title *
    </Typography.Header2>
    <Form.Input
      value={teacherData.seminarTitle}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          seminarTitle: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Seminar Description *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your description to 100 words.
    </Typography.BodyText>
    <Form.BigInput
      value={teacherData.seminarDesc}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          seminarDesc: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Proposed Number of Sessions (3-10) *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Your seminar will run 1-2 times/week for 5 weeks, and can range from meeting every other week to twice a week.
    </Typography.BodyText>
    <Form.Input
      value={teacherData.numSessions}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          numSessions: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Why are you qualified to teach your seminar? What are some personal/professional experiences or insights related to this topic that have prepared you to teach your seminar? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 100 words.
    </Typography.BodyText>
    <Form.BigInput
      value={teacherData.qualifications}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          qualifications: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Please describe any prior teaching experiences you have. *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 100 words.
    </Typography.BodyText>
    <Form.BigInput
      value={teacherData.priorTeaching}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          priorTeaching: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      How do you plan to incorporate an interactive “engaged” element in your seminar? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 100 words.
    </Typography.BodyText>
    <Form.BigInput
      value={teacherData.engagement}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          engagement: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      What skills/ideas do you hope students learn from your seminar? By the end of your seminar, what will students be able to do/create? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 100 words.
    </Typography.BodyText>
    <Form.BigInput
      value={teacherData.skills}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          skills: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Have you taught a course in a previous Wave? If so, what was the title of the course, and which Wave(s)? *
    </Typography.Header2>
    <Form.Input
      value={teacherData.previousWaves}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          previousWaves: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Any questions/comments?
    </Typography.Header2>
    <Form.Input
      value={teacherData.questions}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          questions: value
        }))
      }}
    />

    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Form.Button onClick={(event) => {
        submit()
        }}>
        <Typography.Header color="white" fontSize="24px">
          Submit
        </Typography.Header>
      </Form.Button>
    </div>

    <Typography.BodyText color="white">
      * Required field
    </Typography.BodyText>

    {wrongSubmission &&
    <Typography.BodyText color="white">
      {wrongSubmission}
    </Typography.BodyText>}
  </div>)
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

  /*
  API.graphql(graphqlOperation(createStudent, {
    input: {
      id: "daniela3",
    city: "Kirkland",
    state: "Washington",
    country: "USA",
    school: "Harvard",
    first_name: "Daniela",
    last_name: "Shuman",
    age: "18",
    howYouHear: "woot woot",
    numCourses: 2,
    parentName: "Daniela",
    parentEmail: "Email",
    }
  }
  ))
  */

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
      <Styles.TeacherBackground>
        <div style={{ maxWidth: 800 }}>
          {page === 'home' && TeacherHome({ setPage })}
          {page === 'teacherData' && TeacherDataInput({ setPage, teacherData, setTeacherData, submit, wrongSubmission })}
          {page === 'thanks' && Thanks({ setPage })}
        </div>
      </Styles.TeacherBackground>
      <Footer />
    </div>
  )
}

export default Teachers
