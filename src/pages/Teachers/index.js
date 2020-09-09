import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as Styles from './styles'
import TeacherPic from './teacher.jpg'
import { Colors, Typography, Form } from '@/styles'
import Logo from './logo.png'
import { FirebaseContext } from '@/firebaseContext'
import { BodyText } from '@/styles/Typography'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createTeacherRegistration, createNewsletter } from "../../graphql/mutations.js"


const TeacherHome = ({ setPage }) => {
  return (<>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Instructors
    </Typography.Header>
    
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: -10 }}>
    Are you interested in teaching a topic you love to motivated students around the world? Apply to be an instructor at Wave Learning Festival!  Wave instructors have taught classes from “Counting Infinities” to “Hip-Hop and Social Activism”, and so much more.
    </Typography.BodyText>
    {/*
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Form.Button onClick={() => setPage('teacherData')}>
        <Typography.Header color="white" fontSize="24px">
          Apply Now!
        </Typography.Header>
      </Form.Button>
      <div style={{ flex: 1 }} />
    </div>
    <Typography.BodyText color={Colors.WLF_YELLOW} fontSize="20px">
        <b><br/>If you have applied to teach or tutor with Wave and have not yet received a confirmation email, please re-apply and email wavelf.logistics@gmail.com! </b>
    </Typography.BodyText>
    */}
    <Styles.TestimonialBackground>
      <Styles.TestimonialItem>
        <Styles.TeacherImage src={TeacherPic} />
      </Styles.TestimonialItem>
      <Styles.TestimonialItem style={{ alignItems: 'flex-start' }}>
        <Typography.Header color={Colors.WLF_YELLOW} fontSize="20px">
          "I am 100% looking to pursue teaching as a career in the future which is something I never considered before working with Wave Learning Festival. The Wave administration made teaching my course, Introduction to Filmmaking, such a positive experience for me. I started out my class as a college student looking to share a couple of fun tips about filmmaking and I ended my class as an educator passionate about student engagement and educational equity. Thank you a million times to the Wave team!"
        </Typography.Header>
        <Typography.Header color={Colors.WLF_YELLOW} fontSize="28px">
          - Morgan, Wave 3 instructor
        </Typography.Header>
      </Styles.TestimonialItem>
    </Styles.TestimonialBackground>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: 30 }}>
    As an Engaged Seminars instructor, you would teach an “engaged” seminar that runs for about 5 weeks. These 5-week sessions are affectionately referred to as Tides!
    </Typography.BodyText>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: 30 }}>
      In each of our Engaged Seminars, we are looking for an element of interactivity to promote active learning and make each class more of a conversation rather than a lecture. Your class will meet about 1-2 times/week for the duration of those five weeks, either on weekends or after-school hours on weekdays. Seminars can range from meeting every two weeks (3 sessions total) to twice a week (10 sessions total). The long-form structure will give you more time to build on a topic that excites you and allows your students to learn a greater depth of information. We encourage instructors to bring co-instructors (double the ideas, half the work!), though that is optional. Regardless of whether you onboard a co-instructor, you will have support throughout your course planning process—a member of our Seminars team will guide you through teaching in a virtual setting and help with course-planning.
    </Typography.BodyText>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: 30 }}>
      Tide 1 will start on Monday, October 5th and end on Friday, November 6th. We hope to see you here with Wave Learning Festival!
    </Typography.BodyText>

    <Typography.BodyText color={Colors.WLF_YELLOW} fontSize="20px" style={{marginTop:-10, marginBottom:30}}>
      <b>Applications for Tide 1 have now closed. Follow us on social media to be notified when Tide 2 instructor applications open!</b>
    </Typography.BodyText>

    {/*
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Form.Button onClick={() => setPage('teacherData')}>
        <Typography.Header color="white" fontSize="24px">
          Apply Now!
        </Typography.Header>
      </Form.Button>
    <div style={{ flex: 1 }} />
    </div>
    * /}

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
          questions: teacherData.questions, 
          approved: false
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
