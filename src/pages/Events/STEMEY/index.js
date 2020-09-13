import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as Styles from './styles'
import jessica from './img/jessica.png'
import antonia from './img/antonia.png'
import cibonay from './img/Cardonay.png'
import natasha from './img/natasha.jpg'
import { Colors, Typography, Form } from '@/styles'
import logo from './logo.png'
import { FirebaseContext } from '@/firebaseContext'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createEventRegistration, createNewsletter } from "../../../graphql/mutations.js"
import { COUNTRIES, UNITED_STATES, STATES } from "./countries";

const speakersData = [
  {
    name: "10:00 AM EST: Jessica Barquist",
    pos: <p>Director of Policy and Organizing at the <i>Vermont Network Against Domestic and Sexual Violence</i></p>,
    bio: <p>A desire to create a world in which all people thrive led her to a focus on systemic change through public policy and community organizing. Prior to joining the Vermont Network, she was the Field Director on a statewide early childhood campaign. As an organizer and advocate, Jessica’s mission is to empower others to use their voices for positive social change.</p>,
    image: jessica
  },
  {
    name: "11:30 EST: Antonia Drew-Vann",
    pos: <p>Antonia Drew-Vann is the founder of Asha Family Services. Asha remains the first and only recognized culturally specific domestic violence program in Wisconsin for African Americans.</p>,
    bio: <p>Vann has also worked with the US Health Resources and Services Administration to train domestic violence workers across the country to better serve African American women. <b>Her work has earned her White House invitations under three separate administrations!</b></p>,
    image: antonia
  },
  /*{
    name: "1:00 PM EST: Esperanza Castillo",
    pos: <p>North Carolina Coalition Against Domestic Violence</p>,
    bio: <p>Esperanza Castillo is the Latinx and Immigration Services Coordinator for the North Carolina Coalition against Domestic Violence. She first connected with interpersonal violence prevention in college, volunteering as a peer educator and bilingual hotline advocate for her local domestic violence agency. Esperanza continued to work with survivors and their families as Latinx Services Director at Compass Center in Chapel Hill, where she supported staff, community partners, and dozens of dedicated volunteers in strengthening Orange County’s response to immigrant survivors.
    <a href="http://www.sickkids.ca/AboutSickKids/Directory/People/B/Zulfiqar-Bhutta.html">Learn more about Dr. Zulfiqar Bhutta.</a></p>,
    image: keynote
  },*/
  {
    name: "2:00 EST: Cibonay Jimenez",
    pos: <p>California Partnership to End Violence</p>,
    bio: <p>Cibonay Jimenez  has over 20 years of professional experience in the Domestic Violence and Sexual Assault. Her passion for this work derives from her rich history and experience as a DV/SA survivor and Native Chicana woman. She previously held the position of Chief Program Officer at WEAVE, one of the largest Domestic Violence/Sexual Assault Agencies in the US. Before WEAVE, she held the position of the Community Services Director at the Sacramento Native American Health Center for 8 years and managed prevention, intervention, treatment, and aftercare programs for domestic violence, sexual assault, health disparities, mental health, among others.</p>,
    image: cibonay
  },
  {
    name: "3:00 EST: Olivia Bass",
    pos: <p>North Carolina Coalition Against Domestic Violence</p>,
    bio: <p>Olivia earned her Bachelor’s degree in psychology and her Master's in Social Work with a concentration in social innovation and entrepreneurship at the University of North Carolina at Chapel Hill. She discovered her passion about violence prevention during her undergraduate career. She first started volunteering at the local rape crisis center supporting prevention education for adolescents and their families. This passion evolved to focusing in a career of social work by providing direct client services, support group facilitation, crisis management, and support to local bar staff about alcohol-facilitated sexual assault, and sexual health and relationship education. <br />
    Olivia manages the Nia program which focuses on the cultural values, tropes, and worries that often act as barriers that prevent Black IPV survivors from seeking formal assistance. With the support of community advocates and community-based organizations, Olivia will raise awareness about IPV and available resources and services for ABC survivors, and will provide referral services and support to this population.</p>,
    image: logo
  },
  {
    name: "4:00 EST: Natasha Tretheway",
    pos: <p>US Poet Laureate (2012-2014) and Pulitzer Prize Poet <i>(Her recordings of her poetry—sent to us—will be played in the conference.)</i></p>,
    bio: <p>Poet Natasha Tretheway won the 2007 Pulitzer Prize in poetry and was appointed United States Poet Laureate in 2012 and 2013. Tretheway has received fellowships from the Guggenheim Foundation, the Rockefeller Foundation, the National Endowment for the Arts, and Harvard's Radcliffe Institute. She is currently the Board of Trustees Professor of English at Northwestern University.<br />
    Her most recent work, “Memorial Drive: A Daughter’s Memoir,” released this summer, was an “instant” New York Times Bestseller. Her memoir documents her experience as a domestic violence survivor. When she was 19, Tretheway’s stepfather murdered her mother in the street in Atlanta, Georgia. The New Yorker reviewed, “Trethewey’s writing mines the cavernous isolation, brutality, and resilience of African-American history, tracing its subterranean echoes to today.”</p>,
    image: natasha
  },
]



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
    We have recently partnered with STEMEY to host a virtual series of speaker seminars every Saturday of October, which we are calling STEMtober. We are hoping to inspire students who have limited contact with STEM to explore the field further, as well as provide guidance to passionate students seeking to become more involved in STEM. We are looking for experienced STEM professionals to speak.
    <br/>We are planning on hosting a speaker series for. The talks are from accomplished professors and professionals who would give you an insight into their experience in STEM, what inspired them to pursue that field of study, and any advice they may have for students hoping to pursue their profession. 
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
    <Typography.Header color="white" fontSize="21px">
            Coming Soon!
          </Typography.Header>
        {/*<Form.Button onClick={() => setPage('teacherData')}>
          <Typography.Header color="white" fontSize="21px">
            Register Now!
          </Typography.Header>
  </Form.Button>*/}
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
    <Typography.Header color="white" fontSize="21px">
          Coming Soon!
        </Typography.Header>
      {/*<Form.Button onClick={() => setPage('teacherData')}>
        <Typography.Header color="white" fontSize="21px">
          Register Now!
        </Typography.Header>
  </Form.Button>*/}
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
      <Styles.TeacherBackground>
        <div style={{ maxWidth: 800 }}>
          {page === 'home' && EventHome({ setPage })}
          {page === 'teacherData' && TeacherDataInput({ setPage, teacherData, setTeacherData, submit, wrongSubmission })}
          {page === 'thanks' && Thanks({ setPage })}
        </div>
      </Styles.TeacherBackground>
      <Footer />
    </div>
  )
}

export default Teachers
