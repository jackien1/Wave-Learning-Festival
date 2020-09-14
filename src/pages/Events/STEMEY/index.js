import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as Styles from './styles'
import { Colors, Typography, Form } from '@/styles'
import logo from './logo.png'
import { FirebaseContext } from '@/firebaseContext'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createEventRegistration, createNewsletter } from "../../../graphql/mutations.js"
import { COUNTRIES, UNITED_STATES, STATES } from "./countries";

const SpeakerIcon = (speaker) => {
  if (speaker.name === 'blank') return <div />
  return (
    <Styles.SpeakerContainer>
        <Styles.Header>{speaker.name}</Styles.Header>
        <Styles.Details>{speaker.pos}</Styles.Details>
        <Styles.SpeakerContainerInner>
          <Styles.ImageContainer>
            <Styles.Speaker src={speaker.image}/>
          </Styles.ImageContainer>
          <Styles.Info>
            <Styles.Details>{speaker.bio}</Styles.Details>
          </Styles.Info>
        </Styles.SpeakerContainerInner>
      </Styles.SpeakerContainer>
  )
}

const EventHome = ({ setPage }) => {
  return (<>
    <Typography.Header color={Colors.WLF_YELLOW} style={{marginTop:-10, lineHeight:"60px"}}>
    STEMtober
    </Typography.Header>
    <Typography.BodyText color="white" style={{ marginBottom: -10 }}>
    We have partnered with STEMEY to host a virtual series of speaker seminars every Saturday of October, and thus we present to you STEMtober! We are hoping to inspire students who have limited contact with STEM to explore the field further, as well as provide guidance to passionate students seeking to become more involved in STEM. 
    <br/>
    <br/>We are hosting speaker events that would deal with topics from computational genomics to creating an app to help thousands of people! The talks are from accomplished professors and professionals who will give you an insight into their experience in STEM, what inspired them to pursue that field of study, and any advice they may have for students hoping to pursue their profession. 
    </Typography.BodyText>
    <br/>
    <Typography.BodyText color="white" style={{ marginBottom: -10 }}>
      <b>Date and Time: Every Saturday from 3:00 pm - 8:00 pm EDT </b>
      <br/><b>10/3</b> - Engineering
      <br/><b>10/10</b> - Computer Science & Math
      <br/><b>10/17</b> - Medicine and Biology
      <br/><b>10/24</b> - Natural Sciences

    </Typography.BodyText>
    <br/>
    <Typography.BodyText color="white" style={{ marginBottom: -10 }}>
      To hear how these pioneers are pushing the forefront of development in their fields today, register at the link below!
    </Typography.BodyText>

    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Form.Button onClick={() => setPage('googleForm')}>
          <Typography.Header color="white" fontSize="21px">
           Interest Form
          </Typography.Header>
  </Form.Button>
        <div style={{ flex: 1 }} />
    </div>
    <br/>
    <Typography.Header2 color={Colors.WLF_YELLOW} fontSize="24px">
      About STEM Enrichment Youth
    </Typography.Header2>
    <Typography.BodyText color="white" style={{ marginBottom: 30 }}>
    STEMEY is an organization that is dedicated to inspiring middle/high schoolers to pursue STEM through virtual classes and events. To learn more about STEMEY,  <a href="http://www.stemenrichmentyouth.com" color={Colors.WLF_YELLOW}>http://www.stemenrichmentyouth.com </a>
    </Typography.BodyText>

    <div style={{ display: 'flex', flexDirection: 'row'}}>
    <Form.Button onClick={() => setPage('googleForm')}>
          <Typography.Header color="white" fontSize="21px">
           Interest Form
          </Typography.Header>
  </Form.Button>
    <div style={{ flex: 1 }} />
    </div>
  </>)
}

const renderOption = ({ option }) => (
  <option value={option}>{option}</option>
)

var emailValidated = function(email) {
  //Based on thouroughly tested regex
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(String(email.replace(" ", "")));
}

var WAYS_TO_HEAR = [
  "STEM World Slack Workspace",
  "STEMEY Social Media",
  "WLF Social Media",
  "WLF Student Platform",
  "School Email",
  "A friend",
  "Other"
]

const renderMultiOption = ({key, option, teacherData: data, setTeacherData: setData}) => (
  <Form.RadioInputBackground onClick={() => {
    const newData = data[key];
    const ix = newData.indexOf(option);
    if (ix >= 0) {
      newData.splice(ix,1);
    } else {
      newData.push(option);
    }
    setData(prevData => {
      var result = {...prevData};
      result[key] = newData;
      return result;
  });
  }}>
    <Form.RadioInputButton many={true} selected={data[key].indexOf(option) >= 0}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" &&
          <Form.Input
            value={data["other" + key]}
            onChange={event => {
              const value = event.target.value;
              setData(prevData => {
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

const TeacherDataInput = ({ setPage, teacherData, setTeacherData, submit, wrongSubmission }) => {
  return (<div style={{ width: '100%' }}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      STEMtober RSVP
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
      Country / País *
    </Typography.Header2>
    <Form.Dropdown
      value={teacherData.country}
      // onChange={inputChanged("country", setTeacherData)}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          country: value
        }))
      }}
    >
      {COUNTRIES.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      City *
    </Typography.Header2>
    <Form.Input
      value={teacherData.city}
      // onChange={inputChanged("city", setTeacherData)}
      onChange={event => {
        const value = event.target.value
        setTeacherData(prevData => ({
          ...prevData,
          city: value
        }))
      }}
    />

    {teacherData.country === UNITED_STATES && <>
        <Typography.Header2 color="white" fontSize="24px">
          State *
        </Typography.Header2>
        <Form.Dropdown
          value={teacherData.state}
          onChange={event => {
            const value = event.target.value
            setTeacherData(prevData => ({
              ...prevData,
              state: value
            }))
          }}
          // onChange={inputChanged("state", setTeacherData)}
        >
          {STATES.map((value) => (
            renderOption({option: value})
          ))}
        </Form.Dropdown>
        </>
    }

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

    <Typography.Header2 color="white" fontSize="24px">
    How did you hear about STEMtober? 
    </Typography.Header2>
    {WAYS_TO_HEAR.map((value) => (
      renderMultiOption({key: "howYouHear", option: value, teacherData, setTeacherData})
    ))}


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
    <Typography.BodyText color={Colors.WLF_YELLOW}>
      <b>{wrongSubmission}</b>
    </Typography.BodyText>}
  </div>)
}

const Thanks = ({ setPage }) => (
  <>
    <Typography.Header color={Colors.WLF_YELLOW}>Thank you for registering!</Typography.Header>
    <Typography.Header2 color="white">You should receive a confirmation email within the next few days, and we will reach out with more details closer to the date of the event. If you have any questions/concerns, please email us at <a href = "mailto: wavelearningfestival@gmail.com" style={{color: Colors.WLF_YELLOW}}>wavelearningfestival@gmail.com</a>.</Typography.Header2>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Form.Button onClick={() => setPage('home')}>
        <Typography.Header color="white" fontSize="24px">
          Back to Event Page
        </Typography.Header>
      </Form.Button>
    </div>
  </>
)

const InterestForm = () => {
  return (
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSctUf_QwnzYLFq4uNaMKs7287UMlICCvhH5kMDhn1BmUGGv1w/viewform?embedded=true"
      width="90%"
      height="520"
      frameborder="0"
      margin="10px">
      Loading…
    </iframe>)
}

const Teachers = () => {
  const [page, setPage] = useState('home')
  const [wrongSubmission, setWrongSubmission] = useState("")
  const [teacherData, setTeacherData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    school: "",
    country: "",
    city: "",
    state: "",
    notes: "",
    extra: "",
    questions: "",
    howYouHear: [""]
  })
  
  // const resetData = () => {
  //   setTeacherData({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     notes: "",
  //     extra: "",
  //     questions: "",
  //     howYouHear: [""]
  //   })
  // }

  var requiredFields = (form) => {
    return form.first_name != "" &&
      form.last_name != "" &&
      form.email != "" &&
      form.school != "" &&
      form.country != "" &&
      form.city != ""
  }

  const submit = () => {
    console.log(teacherData);
    var email = teacherData.email.toLowerCase();
    var extra = teacherData.extra.toLowerCase();
    if (!emailValidated(email)) {
      setWrongSubmission("Invalid email.");
    } else if (extra != "" && !emailValidated(extra)) {
      setWrongSubmission("Invalid email for invited friend.")
    } else if (!requiredFields(teacherData)) {
      setWrongSubmission("Please fill out all required fields marked with an asterisk (*).")
    } else {
      API.graphql(graphqlOperation(createEventRegistration, {
        input: {
          first_name: teacherData.first_name,
          last_name: teacherData.last_name,
          email: email,
          eventID: "Stemtober",
          school: teacherData.school,
          country: teacherData.country,
          city: teacherData.city,
          state: teacherData.state,
          notes: teacherData.notes,
          extra: teacherData.extra,
          questions: teacherData.questions, 
          howYouHear: teacherData.howYouHear
        }
      }));
      setPage('thanks');
    }

  }

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Navbar />
      {page !== 'googleForm' && <Styles.TeacherBackground>
        <div style={{ maxWidth: 800 }}>
          {page === 'home' && EventHome({ setPage })}
          {page === 'teacherData' && TeacherDataInput({ setPage, teacherData, setTeacherData, submit, wrongSubmission })}
          {page === 'thanks' && Thanks({ setPage })}
        </div>
      </Styles.TeacherBackground>}
      {page === 'googleForm' &&  <Styles.TeacherBackgroundForm>
          {InterestForm({ setPage })}
      </Styles.TeacherBackgroundForm>}
      <Footer />
    </div>
  )
}

export default Teachers
