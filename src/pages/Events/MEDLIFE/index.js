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
import pereira from './img/pereira.png'
import { Colors, Typography, Form } from '@/styles'
import Logo from './logo.png'
import { FirebaseContext } from '@/firebaseContext'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createTeacherRegistration, createNewsletter } from "../../../graphql/mutations.js"

const keynoteData = [
  {
    name: "Dr. Zulfiqar A. Bhutta",
    bio: "Inaugural Robert Harding Chair in Global Child Health at The Hospital for Sick Children (SickKids), Co-Director of the SickKids Centre for Global Child Health and the Founding Director of the Centre of Excellence in Women and Child Health at the Aga Khan University",
    image: keynote
  }
]

const medData = [
  {
    name: "Dr. Nick Ellis - MEDLIFE, Executive Director and Founder",
    bio: "Nick Ellis was inspired to create MEDLIFE when in 2001 in Panama he saw how effectively a grassroots organization could listen to the needs of people living in resource-poor settings, and subsequently enact change. He went on to work in both Peru & Ecuador which furthered his passion for understanding the root causes of poverty and exposed new complexities to the issues communities face. In 2004 he created MEDLIFE with the goal of establishing better and more sustainable access to healthcare, education, and a safe home for resource-poor families through the empowerment of communities and a student-led movement.",
    image: ellis
  },
  {
    name: "Dr. Angel M Matos Lugo - Global Health Institute, Director",
    bio: "Angel M. Matos Lugo is a Puerto Rican Physician and Educator; passionate about Humanitarian Health and compelled to diminishing health disparities and inequalities across the globe. Dr. Matos served as an attending physician and guided over 100 UMHS students on medical mission trips to Guatemala, Dominican Republic, Costa Rica, and Peru. He has a strong commitment to fostering students' ability to work with culturally diverse patients and interdisciplinary teams, particularly in low and middle-income countries. Dr. Matos is a member of the Consortium of Universities for Global Health, American Public Health Association, Mexican Society of Public Health, Association of Governing Boards of Universities and Colleges, and the International Association of Medical Science Educators. He serves the Board of Trustees of Albizu University in Miami and Puerto Rico.",
    image: matoslugo
  }
]

const edData = [
  {
    name: "Benjamin Owens - Silicon Valley Youth, Co-Founder and CEO",
    bio: "Ben is a senior at Harvard University, studying computer science, statistics, and economics. Knowing the importance of quality education, Ben co-founded Silicon Valley Youth to help students in underserved communities in the San Francisco Bay Area.",
    image: owens
  },
  {
    name: "Oliver Ye - Silicon Valley Youth, President",
    bio: "Oliver is a senior at Saratoga High school, with an interest in business and technology. Oliver joined Silicon Valley Youth at the time of its founding, and has been the President of the organization for the past two years; as President, Oliver has led multiple project collaborations with local school districts like the Ravenswood, Franklin McKinley, and Cupertino districts, planning leadership conferences, donating supplies, and sponsoring writing competitions.",
    image: ye
  },
  {
    name: "Karly Hou - Wave Learning Festival, Founder and Chair",
    bio: "Karly Hou is a sophomore at Harvard studying some combination of CS, math, economics, and government. Prior to Wave, she started the initiative Healthy Kids International, which taught health and leadership workshops to 2000+ elementary schoolers in China. With her future work, she hopes to advance education, public health, ethical technology, and women’s rights. In her spare time, Karly loves painting, photography, learning new languages, singing, powerlifting, and exploring the great outdoors.",
    image: hou
  }
]

const techData = [
  {
    name: "Omar Farooqui - Coded Minds, Founder and President",
    bio: "Omar Farooqui is an entrepreneur, investor, and startup enthusiast. He is the Founder & President of Coded Minds. Wanting to disrupt the education industry from the ground up, not just through pedagogy but also price, through his vision of merging public and private education as one. With this mission, he created Coded Minds in 2017. Omar is a careered finance professional in a previous life spanning two decades. His two previous ventures were Green Sands Equity out of San Francisco and previously CapInvest (latterly CI Holdings), which was a joint initiative with the asset management arm of United Overseas Bank Singapore. He was also on the Mutual Funds Board of Saudi Fransi Capital for several years. His corporate life was split between Algebra Capital, Deutsche Bank & NCB Capital out of Saudi Arabia. An avid tennis player, he invests and ventures through his investment vehicle, Five Rivers Holdings.",
    image: farooqui
  },
  {
    name: "Carlos Pereira - Livox, Founder and CEO",
    bio: "Brazilian entrepreneur Carlos Pereira, CEO and Founder of Livox, is among the laureates of The Tech for Global Good. The program recognizes innovators solving the world’s biggest problems. This year’s focus is Technology & Health and Livox was included for being a software platform that enables non-verbal disabled people to communicate and learn. Carlos’ work has received awards such as The Best Inclusion Software in the World, by the UN; Technological Innovation with the Greatest Impact by Inter-American Development Bank, Social Entrepreneur of 2017 by Schwab Foundation.",
    image: pereira
  }
]

const SpeakerIcon = (speaker) => {
  if (speaker.name === 'blank') return <div />
  return (
    <Styles.SpeakerContainer>
        <Styles.Header>{speaker.name}</Styles.Header>
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
    <Typography.Header color={Colors.WLF_YELLOW} style={{marginTop:-10}}>
      MEDLIFE
    </Typography.Header>
    <Typography.BodyText color="white" style={{ marginBottom: -10 }}>
      MEDLIFE, which stands for Medicine, Education, and Development for Low Income Families Everywhere, is an international non-profit aimed at empowering people in their fight for equal access to healthcare, education, and a safe home. We have partnered with MEDLIFE Ontario to bring you an event focused on making a difference in developing communities. 
    </Typography.BodyText>
    <br/>
    <Typography.BodyText color="white" style={{ marginBottom: -10 }}>
      ‘Living the MEDlife - Making an Impact in Vulnerable Communities’, features influential leaders making an impact through medicine, education, and technology & entrepreneurship in communities all around the world. The 3-hour event will consist of a keynote speaker, and then concurrent breakout rooms of panel discussions with accomplished leaders in education, medicine & healthcare, and technology & entrepreneurship! 
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
      <b>Event Date:</b> Saturday, September 26, 2020, 1-4pm EDT, 10am-1pm PDT, 6-9pm GMT
      <br/><br/>
      <b>1:00 - 2:15 pm EDT:</b> Keynote Speaker, Zulfiqar A. Bhutta
      <br />
      <b>2:15 - 4:00 pm EDT:</b> Panel Discussions in Medicine, Education, and Technology
      <br/><br/>
      Each participant will indicate the panel discussion in which they would like to engage.
    </Typography.BodyText>
    <Typography.Header2 color={Colors.WLF_YELLOW} fontSize="24px">
      Speaker and Panelist Information
    </Typography.Header2>
    
    <Typography.Header2 fontSize="20px" color="white" style={{marginBottom:-10}}>
      <b>Keynote Speaker</b>
    </Typography.Header2>
    {keynoteData.map((speaker) => { return SpeakerIcon(speaker) })}
    <br/>
    <Typography.Header2 fontSize="20px" color="white" style={{marginBottom:-10}}>
      <b>Panel Discussion in Medicine & Healthcare</b>
    </Typography.Header2>
    {medData.map((speaker) => { return SpeakerIcon(speaker) })}
    <br/>
    <Typography.Header2 fontSize="20px" color="white" style={{marginBottom:-10}}>
      <b>Panel Discussion in Education</b>
    </Typography.Header2>
    {edData.map((speaker) => { return SpeakerIcon(speaker) })}
    <br/>
    <Typography.Header2 fontSize="20px" color="white" style={{marginBottom:-10}}>
      <b>Panel Discussion in Technology & Entrepreneurship</b>
    </Typography.Header2>
    {techData.map((speaker) => { return SpeakerIcon(speaker) })}

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
