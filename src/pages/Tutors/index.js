import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as Styles from './styles'
import { Colors, Typography, Form } from '@/styles'
import Logo from './logo.png'
import { FirebaseContext } from '@/firebaseContext'
import { BodyText } from '@/styles/Typography'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createTutorRegistration, createNewsletter } from "../../graphql/mutations.js"

const renderMultiOption = ({key, option, tutorData, setTutorData}) => (
  <Form.RadioInputBackground onClick={() => {
    const newData = tutorData[key];
    const ix = newData.indexOf(option);
    if (ix >= 0) {
      newData.splice(ix,1);
    } else {
      newData.push(option);
    }
    setTutorData(prevData => {
      var result = {...prevData};
      result[key] = newData;
      return result;
  });
  }}>
    <Form.RadioInputButton many={true} selected={tutorData[key].indexOf(option) >= 0}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" &&
          <Form.Input
            value={tutorData["other" + key]}
            onChange={event => {
              const value = event.target.value;
              setTutorData(prevData => {
                var result = {
                  ...prevData
                };
                result["other" + key] = value;
                return result;
              });
            }}
          />
        }
      </div>
    </div>
  </Form.RadioInputBackground>
);

const TutorHome = ({ setPage }) => {
  return (<>
    <Typography.Header color={Colors.WLF_YELLOW} style={{marginTop:-50, marginBottom: -30}}>
      Tutors
    </Typography.Header>
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Form.Button onClick={() => setPage('tutorData')}>
        <Typography.Header color="white" fontSize="24px">
          Apply Now!
        </Typography.Header>
      </Form.Button>
    <div style={{ flex: 1 }} />
    </div>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginTop:30, marginBottom: 10 }}>
    Do you want to help students around the world who are struggling with the drastic change in their learning environment? Are you excited by the idea of using your expertise in science, math, language, or the humanities to support others? Sign up to be a <b>Wave Tutor</b>! 
    </Typography.BodyText>
    <br/>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: 10 }}>
      As millions of students around the world adjust to learning from home, they are in desperate need of tutors who are able to propel them to academic excellence. We are looking for passionate and inspiring volunteers who can help middle and high schoolers with academic subjects. Whether you choose to tutor one subject or three, we want you to be involved and give back. Apply, set up a weekly schedule, and just be open to giving these students whatever hours you have free for the week. Whether you want to guide someone through derivatives or explain the difference between commas and colons, it is all possible as a Wave Tutor.    
    </Typography.BodyText>
    <br/>
    <Typography.BodyText color="white" fontSize="20px" style={{ marginBottom: 10 }}>
      Tutoring sessions will begin on October 5th, so be sure to sign up today! Applications will be considered on a rolling basis, throughout the semester. We are all so excited to have you on board with us at Wave Learning Festival!
    </Typography.BodyText>
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Form.Button onClick={() => setPage('tutorData')}>
        <Typography.Header color="white" fontSize="24px">
          Apply Now!
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

const SUBJECT_OPTIONS_MATH = [
  "Pre-algebra/algebra 1",
  "Geometry",
  "Algebra 2/Pre-calculus",
  "Statistics",
  "Calculus"
];

const SUBJECT_OPTIONS_SCIENCE = [
  "Biology",
  "Physics",
  "Chemistry",
  "Computer Science"
];

const SUBJECT_OPTIONS_LANGUAGE = [
  "French",
  "Chinese",
  "Spanish"
];

const SUBJECT_OPTIONS_HUMANITIES = [
  "US history",
  "World history",
  "Economics",
  "Psychology",
  "English"
];

const OTHER = [
  "Other"
];

const AGE_OPTIONS = [
  "Middle School",
  "High School"
];

const TutorDataInput = ({ setPage, tutorData, setTutorData, submit, wrongSubmission }) => {
  return (<div style={{ width: '100%' }}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Tutor Information
    </Typography.Header>
    <Typography.BodyText color="white">
      Thank you for your interest in becoming a member of the Wave Tutoring Program! Please fill out the questions below. We are excited to get to know you!
    </Typography.BodyText>

    <Typography.Header2 color="white" fontSize="24px">
      First Name *
    </Typography.Header2>
    <Form.Input
      value={tutorData.first_name}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
          ...prevData,
          first_name: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Last Name *
    </Typography.Header2>
    <Form.Input
      value={tutorData.last_name}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
          ...prevData,
          last_name: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Email *
    </Typography.Header2>
    <Form.Input
      value={tutorData.email}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
          ...prevData,
          email: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      School *
    </Typography.Header2>
    <Form.Input
      value={tutorData.school}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
          ...prevData,
          school: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Graduation Year *
    </Typography.Header2>
    <Typography.BodyText color="white">
      You must be at least a high school sophomore to apply.
    </Typography.BodyText>
    <Form.Input
      value={tutorData.gradYear}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
          ...prevData,
          gradYear: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Which subject(s) would you like to tutor? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Math
    </Typography.BodyText>
    {SUBJECT_OPTIONS_MATH.map((value) => (
      renderMultiOption({key: "subjects", option: value, tutorData, setTutorData})
    ))}
    <Typography.BodyText color="white">
      Science
    </Typography.BodyText>
    {SUBJECT_OPTIONS_SCIENCE.map((value) => (
      renderMultiOption({key: "subjects", option: value, tutorData, setTutorData})
    ))}
    <Typography.BodyText color="white">
      Language
    </Typography.BodyText>
    {SUBJECT_OPTIONS_LANGUAGE.map((value) => (
      renderMultiOption({key: "subjects", option: value, tutorData, setTutorData})
    ))}
    <Typography.BodyText color="white">
      Humanities
    </Typography.BodyText>
    {SUBJECT_OPTIONS_HUMANITIES.map((value) => (
      renderMultiOption({key: "subjects", option: value, tutorData, setTutorData})
    ))}
    <Typography.BodyText color="white">
      Other
    </Typography.BodyText>
    {OTHER.map((value) => (
      renderMultiOption({key: "subjects", option: value, tutorData, setTutorData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      For the above subject(s), what age ranges do you feel comfortable tutoring? *
    </Typography.Header2>
    {AGE_OPTIONS.map((value) => (
      renderMultiOption({key: "ageRanges", option: value, tutorData, setTutorData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      What qualifies you to tutor in the subject(s) above? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 100 words.
    </Typography.BodyText>
    <Form.BigInput
      value={tutorData.qualifications}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
          ...prevData,
          qualifications: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Why do you want to become a Wave Tutor? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 100 words.
    </Typography.BodyText>
    <Form.BigInput
      value={tutorData.why}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
          ...prevData,
          why: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      What experiences do you have with teaching/tutoring younger students? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 100 words.
    </Typography.BodyText>
    <Form.BigInput
      value={tutorData.experience}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
          ...prevData,
          experience: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
    How many hours a week would you like to tutor? *
    </Typography.Header2>
    <Form.Input
      value={tutorData.hours}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
          ...prevData,
          hours: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Have you emailed us a copy of your grade report? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please email a PDF copy of your transcript or grade report (unofficial or official), or any other relevant proof of qualification, to <a href="mailto:wavelf.logistics@gmail.com" style={{color: Colors.WLF_YELLOW}}>wavelf.logistics@gmail.com</a> with the subject line: [First Name Last Name] Wave Tutoring Qualifications.
    </Typography.BodyText>
    {renderMultiOption({key: "gradeReport", option: "Yes", tutorData, setTutorData})}

    <Typography.Header2 color="white" fontSize="24px">
      Any questions/comments?
    </Typography.Header2>
    <Form.Input
      value={tutorData.questions}
      onChange={event => {
        const value = event.target.value
        setTutorData(prevData => ({
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
          Back to Tutor Page
        </Typography.Header>
      </Form.Button>
    </div>
  </>
)

const Tutors = () => {
  const [page, setPage] = useState('home')
  const [wrongSubmission, setWrongSubmission] = useState("")
  const [tutorData, setTutorData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    school: "",
    gradYear: "",
    subjects: [],
    ageRanges: [],
    qualifications: "",
    why: "",
    experience: "",
    hours: "",
    gradeReport: [],
    questions: "",
    othersubjects: ""
  })
  const { db } = useContext(FirebaseContext)

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
      form.subjects.length > 0 &&
      form.ageRanges.length > 0 &&
      form.qualifications != "" &&
      form.why != "" &&
      form.experience != "" &&
      form.hours != "" &&
      form.gradeReport != "";
  }

  const submit = () => {
    console.log(tutorData);
    var email = tutorData.email.toLowerCase();
    if (!emailValidated(email)) {
      setWrongSubmission("Invalid email.");
    } else if (!requiredFields(tutorData)) {
      setWrongSubmission("Please fill out all required fields marked with an asterisk (*).")
    } else {
      API.graphql(graphqlOperation(createTutorRegistration, {
        input: {
          first_name: tutorData.first_name,
          last_name: tutorData.last_name,
          email: tutorData.email,
          school: tutorData.school,
          gradYear: tutorData.gradYear,
          subjects: tutorData.subjects,
          ageRanges: tutorData.ageRanges,
          qualifications: tutorData.qualifications,
          why: tutorData.why,
          experience: tutorData.experience,
          hours: tutorData.hours,
          questions: tutorData.questions,
          othersubjects: tutorData.othersubjects
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
          {page === 'home' && TutorHome({ setPage })}
          {page === 'tutorData' && TutorDataInput({ setPage, tutorData, setTutorData, submit, wrongSubmission })}
          {page === 'thanks' && Thanks({ setPage })}
        </div>
      </Styles.TeacherBackground>
      <Footer />
    </div>
  )
}

export default Tutors
