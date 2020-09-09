import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as Styles from './styles'
import keynote from './img/keynote.jpg'
import ellis from './img/ellis.png'
import matoslugo from './img/matoslugo.png'
import owens from './img/owens.png'
import ye from './img/ye.png'
import hou from './img/hou.png'
import farooqui from './img/farooqui.png'
import sumathipala from './img/sumathipala.jpg'
import pereira from './img/pereira.png'
import waveXmedlife from './img/wlf_x_medlife.png'
import { Colors, Typography, Form } from '@/styles'
import Logo from './logo.png'
import { FirebaseContext } from '@/firebaseContext'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createTeacherRegistration, createNewsletter } from "../../../graphql/mutations.js"

const speakersData = [
  {
    name: "10:00 AM EST: Jessica Barquist",
    pos: <p>Director of Policy and Organizing at the <i>Vermont Network Against Domestic and Sexual Violence</i></p>,
    bio: <p>A desire to create a world in which all people thrive led her to a focus on systemic change through public policy and community organizing. Prior to joining the Vermont Network, she was the Field Director on a statewide early childhood campaign. As an organizer and advocate, Jessica’s mission is to empower others to use their voices for positive social change.
    <a href="http://www.sickkids.ca/AboutSickKids/Directory/People/B/Zulfiqar-Bhutta.html">Learn more about Dr. Zulfiqar Bhutta.</a></p>,
    image: keynote
  },
  {
    name: "11:30 EST: Antonia Drew-Vann",
    pos: <p>Antonia Drew-Vann is the founder of Asha Family Services. Asha remains the first and only recognized culturally specific domestic violence program in Wisconsin for African Americans.</p>,
    bio: <p>Vann has also worked with the US Health Resources and Services Administration to train domestic violence workers across the country to better serve African American women. <b>Her work has earned her White House invitations under three separate administrations!</b>
    <a href="http://www.sickkids.ca/AboutSickKids/Directory/People/B/Zulfiqar-Bhutta.html">Learn more about Dr. Zulfiqar Bhutta.</a></p>,
    image: keynote
  },
  {
    name: "1:00 PM EST: Esperanza Castillo",
    pos: <p>North Carolina Coalition Against Domestic Violence</p>,
    bio: <p>Esperanza Castillo is the Latinx and Immigration Services Coordinator for the North Carolina Coalition against Domestic Violence. She first connected with interpersonal violence prevention in college, volunteering as a peer educator and bilingual hotline advocate for her local domestic violence agency. Esperanza continued to work with survivors and their families as Latinx Services Director at Compass Center in Chapel Hill, where she supported staff, community partners, and dozens of dedicated volunteers in strengthening Orange County’s response to immigrant survivors.
    <a href="http://www.sickkids.ca/AboutSickKids/Directory/People/B/Zulfiqar-Bhutta.html">Learn more about Dr. Zulfiqar Bhutta.</a></p>,
    image: keynote
  },
  {
    name: "2:00 EST: Cibonay Jimenez",
    pos: <p>California Partnership to End Violence</p>,
    bio: <p>Cibonay Jimenez  has over 20 years of professional experience in the Domestic Violence and Sexual Assault. Her passion for this work derives from her rich history and experience as a DV/SA survivor and Native Chicana woman. She previously held the position of Chief Program Officer at WEAVE, one of the largest Domestic Violence/Sexual Assault Agencies in the US. Before WEAVE, she held the position of the Community Services Director at the Sacramento Native American Health Center for 8 years and managed prevention, intervention, treatment, and aftercare programs for domestic violence, sexual assault, health disparities, mental health, among others.
    <a href="http://www.sickkids.ca/AboutSickKids/Directory/People/B/Zulfiqar-Bhutta.html">Learn more about Dr. Zulfiqar Bhutta.</a></p>,
    image: keynote
  },
  {
    name: "3:00 EST: Olivia Bass",
    pos: <p>North Carolina Coalition Against Domestic Violence</p>,
    bio: <p>Olivia earned her Bachelor’s degree in psychology and her Master's in Social Work with a concentration in social innovation and entrepreneurship at the University of North Carolina at Chapel Hill. She discovered her passion about violence prevention during her undergraduate career. She first started volunteering at the local rape crisis center supporting prevention education for adolescents and their families. This passion evolved to focusing in a career of social work by providing direct client services, support group facilitation, crisis management, and support to local bar staff about alcohol-facilitated sexual assault, and sexual health and relationship education. <br />
    Olivia manages the Nia program which focuses on the cultural values, tropes, and worries that often act as barriers that prevent Black IPV survivors from seeking formal assistance. With the support of community advocates and community-based organizations, Olivia will raise awareness about IPV and available resources and services for ABC survivors, and will provide referral services and support to this population.
    <a href="http://www.sickkids.ca/AboutSickKids/Directory/People/B/Zulfiqar-Bhutta.html">Learn more about Dr. Zulfiqar Bhutta.</a></p>,
    image: keynote
  },
  {
    name: "4:00 EST: Natasha Tretheway",
    pos: <p>US Poet Laureate (2012-2014) and Pulitzer Prize Poet <i>(Her recordings of her poetry—sent to us—will be played in the conference.)</i></p>,
    bio: <p>Poet Natasha Tretheway won the 2007 Pulitzer Prize in poetry and was appointed United States Poet Laureate in 2012 and 2013. Tretheway has received fellowships from the Guggenheim Foundation, the Rockefeller Foundation, the National Endowment for the Arts, and Harvard's Radcliffe Institute. She is currently the Board of Trustees Professor of English at Northwestern University.<br />
    Her most recent work, “Memorial Drive: A Daughter’s Memoir,” released this summer, was an “instant” New York Times Bestseller. Her memoir documents her experience as a domestic violence survivor. When she was 19, Tretheway’s stepfather murdered her mother in the street in Atlanta, Georgia. The New Yorker reviewed, “Trethewey’s writing mines the cavernous isolation, brutality, and resilience of African-American history, tracing its subterranean echoes to today.”
    <a href="http://www.sickkids.ca/AboutSickKids/Directory/People/B/Zulfiqar-Bhutta.html">Learn more about Dr. Zulfiqar Bhutta.</a></p>,
    image: keynote
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
      Education, Medicine, Technology: Living the MEDLife
    </Typography.Header>
    <Typography.BodyText color="white" style={{ marginBottom: -10 }}>
      Our very first Wave Special Event features nine influential leaders making impact through education, medicine, and technology in vulnerable communities all around the world. A collaboration with MEDLIFE Ontario, this event will consist of a keynote speaker, and then concurrent breakout rooms of interactive panel discussions with accomplished leaders in each theme!
    </Typography.BodyText>
    <br/>
    <Typography.BodyText color="white" style={{ marginBottom: -10 }}>
      <b>Date and Time: Saturday, September 26, 1:00-4:00pm EDT, 10:00-1:00pm PST, 6:00-9:00pm GMT </b>
    </Typography.BodyText>
    <br/>
    <Typography.BodyText color="white" style={{ marginBottom: -10 }}>
      To hear how these pioneers are pushing the forefront of development in their fields today, register at the link below!
    </Typography.BodyText>

    <div style={{ display: 'flex', flexDirection: 'row'}}>
        <Form.Button onClick={() => setPage('teacherData')}>
          <Typography.Header color="white" fontSize="21px">
            Register Now!
          </Typography.Header>
        </Form.Button>
        <div style={{ flex: 1 }} />
    </div>
    <br/>
    <Typography.Header2 color={Colors.WLF_YELLOW} fontSize="24px">
      Schedule
    </Typography.Header2>
    <Typography.BodyText color="white" style={{ marginBottom: 30 }}>
      <b>1:00 - 2:15 pm EDT:</b> Keynote Speaker, Zulfiqar A. Bhutta
      <br />
      <b>2:15 - 4:00 pm EDT:</b> Panel Discussions in Medicine, Education, and Technology
      <br/>
    </Typography.BodyText>
    <Typography.Header2 color={Colors.WLF_YELLOW} fontSize="24px">
      About MEDLIFE
    </Typography.Header2>
    <Typography.BodyText color="white" style={{ marginBottom: 30 }}>
      <b>MEDLIFE</b>, which stands for Medicine, Education, and Development for Low Income Families Everywhere, is an international non-profit aimed at empowering people in their fight for equal access to healthcare, education, and a safe home. <a href="https://www.medlifemovement.org/">Learn more about MEDLIFE.</a>
      <br/>
    </Typography.BodyText>
    <Typography.Header2 color={Colors.WLF_YELLOW} fontSize="24px">
      Speaker and Panelist Information
    </Typography.Header2>

    <Typography.Header2 fontSize="20px" color="white" style={{marginBottom:-10}}>
      <b>Speaker Bios & Tentative Schedule</b>
    </Typography.Header2>
    {speakersData.map((speaker) => { return SpeakerIcon(speaker) })}

    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <Form.Button onClick={() => setPage('teacherData')}>
        <Typography.Header color="white" fontSize="21px">
          Register Now!
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
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={waveXmedlife} style={{maxWidth: 700, margin: 'auto'}}/>
      </div>
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
