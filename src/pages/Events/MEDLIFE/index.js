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
import pereira from './img/pereira.jpg'
import waveXmedlife from './img/wlf_x_medlife.png'
import { Colors, Typography, Form } from '@/styles'
import Logo from './logo.png'
import { FirebaseContext } from '@/firebaseContext'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createTeacherRegistration, createNewsletter } from "../../../graphql/mutations.js"

const keynoteData = [
  {
    name: "Dr. Zulfiqar A. Bhutta",
    bio: <p>Inaugural Robert Harding Chair in Global Child Health at The Hospital for Sick Children (SickKids), Co-Director of the SickKids Centre for Global Child Health and the Founding Director of the Centre of Excellence in Women and Child Health at the Aga Khan University. Among the many feathers on his cap, Dr. Bhutta is the Co-Chair of the Maternal and Child Health oversight committee of the World Health Organization (WHO) Eastern Mediterranean Region (EMRO) and the Chairman of The Coalition of Centres in Global Child Health with its secretariat based at SickKids. <a href="http://www.sickkids.ca/AboutSickKids/Directory/People/B/Zulfiqar-Bhutta.html" style={{color: Colors.WLF_YELLOW}}>Learn more about Dr. Zulfiqar Bhutta.</a></p>,
    image: keynote
  }
]

const medData = [
  {
    name: "Dr. Nick Ellis - MEDLIFE, Executive Director and Founder",
    bio: <p>Nick Ellis was inspired to create MEDLIFE when in 2001 in Panama he saw how effectively a grassroots organization could listen to the needs of people living in resource-poor settings, and subsequently enact change. He went on to work in both Peru & Ecuador which furthered his passion for understanding the root causes of poverty and exposed new complexities to the issues communities face. In 2004 he created MEDLIFE with the goal of establishing better and more sustainable access to healthcare, education, and a safe home for resource-poor families through the empowerment of communities and a student-led movement. <a href="https://www.medlifemovement.org/about-us/our-team/" style={{color: Colors.WLF_YELLOW}}>Learn more about Dr. Nick Ellis.</a></p>,
    image: ellis
  },
  {
    name: "Dr. Angel M Matos Lugo - Global Health Institute, Director",
    bio: <p>Angel M. Matos Lugo is a Puerto Rican Physician and Educator; passionate about Humanitarian Health and compelled to diminishing health disparities and inequalities across the globe. Dr. Matos served as an attending physician and guided over 100 UMHS students on medical mission trips to Guatemala, Dominican Republic, Costa Rica, and Peru, showcasing his commitment to help low and middle-income communities. Dr. Matos is a member of the Consortium of Universities for Global Health, American Public Health Association, Mexican Society of Public Health, Association of Governing Boards of Universities and Colleges, and the International Association of Medical Science Educators. He serves the Board of Trustees of Albizu University in Miami and Puerto Rico. <a href="https://www.umhs-sk.org/angel-m-matos-lugo" style={{color: Colors.WLF_YELLOW}}>Learn more about Dr. Angel Matos.</a></p>,
    image: matoslugo
  }
]

const edData = [
  {
    name: "Benjamin Owens - Silicon Valley Youth, Co-Founder and CEO",
    bio: <p>Ben is a senior at Harvard University, studying computer science, statistics, and economics. Knowing the importance of quality education, Ben co-founded Silicon Valley Youth to help students in underserved communities in the San Francisco Bay Area. <a href="https://www.siliconvalleyyouth.com/team.html" style={{color: Colors.WLF_YELLOW}}>Learn more about Benjamin Owens.</a></p>,
    image: owens
  },
  {
    name: "Oliver Ye - Silicon Valley Youth, President",
    bio: <p>Oliver is a senior at Saratoga High school, with an interest in business and technology. Oliver joined Silicon Valley Youth at the time of its founding, and has been the President of the organization for the past two years; as President, Oliver has led multiple project collaborations with local school districts like the Ravenswood, Franklin McKinley, and Cupertino districts, planning leadership conferences, donating supplies, and sponsoring writing competitions. <a href="https://www.siliconvalleyyouth.com/index.html" style={{color: Colors.WLF_YELLOW}}>Learn more about Oliver Ye.</a></p>,
    image: ye
  },
  {
    name: "Karly Hou - Wave Learning Festival, Founder and Chair",
    bio: <p>Karly Hou is a sophomore at Harvard studying some combination of CS, math, economics, and government. Prior to Wave, she started the initiative Healthy Kids International, which taught health and leadership workshops to 2000+ elementary schoolers in China. With her future work, she hopes to advance education, public health, ethical technology, and women’s rights. In her spare time, Karly loves painting, photography, learning new languages, singing, powerlifting, and exploring the great outdoors. <a href="https://www.karlyhou.com" style={{color: Colors.WLF_YELLOW}}>Learn more about Karly Hou.</a></p>,
    image: hou
  }
]

const techData = [
  {
    name: "Omar Farooqui - Coded Minds, Founder and President",
    bio: <p>Omar Farooqui is an entrepreneur, investor, and startup enthusiast. He is the Founder & President of Coded Minds. Wanting to disrupt the education industry from the ground up, not just through pedagogy but also price, through his vision of merging public and private education as one. With this mission, he created Coded Minds in 2017. Omar is a careered finance professional in a previous life spanning two decades. His two previous ventures were Green Sands Equity out of San Francisco and previously CapInvest (latterly CI Holdings). He was also on the Mutual Funds Board of Saudi Fransi Capital for several years. His corporate life was split between Algebra Capital, Deutsche Bank & NCB Capital out of Saudi Arabia. <a href="https://www.coded-minds.org/about-us/the-team/" style={{color: Colors.WLF_YELLOW}}>Learn more about Omar Farooqui.</a></p>,
    image: farooqui
  },
  {
    name: "Carlos Pereira - Livox, Founder and CEO",
    bio: <p>Carlos Pereira is the CEO and Founder of Livox. Carlos is the father of a thirteen-year-old girl that has Cerebral Palsy due to a medical mistake. Since he found out about her daughter's impairment, empowering people with disabilities became a passion for him. Out of this passion, he created several initiatives to improve the lives of disabled people. One of them is a software named Livox that enables non-verbal people to communicate. Carlos has been awarded several times by his achievements, among which we can mention: Google's Disabilities Challenge, Innovation with the Greatest Impact of 2014 by the IDB and Social Entrepreneur of 2017 by Schwab Foundation/World Economic Forum. <a href="https://www.baybrazil.org/carlos-pereira-ceo-founder-livox" style={{color: Colors.WLF_YELLOW}}>Learn more about Carlos Pereira.</a></p>,
    image: pereira
  },
  {
    name: "Marissa Sumathipala - Theraplexus, Founder",
    bio: <p>Marissa Sumathipala is a biotechnology entrepreneur, researcher, and junior at Harvard University. She’s the founder and lead developer of Theraplexus, a biotechnology startup transforming rapid, low-cost drug discovery with artificial intelligence and network science analytics. She's a Davidson Fellow, We are Family Foundation Global Teen Leader, and a recipient of Glamour Magazine's 2020 College Women of the Year. She is a 2018 Presidential Scholar and a 2018 Coca Cola Scholar, honored as one of the country’s most outstanding leaders for exceptional academics, exemplary leadership, and community service. Outside of her studies, she runs the Harvard Figure Skating Club, is an ambassador for the US Figure Skating Association, and runs a digital science publication on campus. <a href="https://www.davidsongifted.org/fellows-scholarship/2018-davidson-fellows/marissa-sumathipala" style={{color: Colors.WLF_YELLOW}}>Learn more about Marissa Sumathipala.</a></p>,
    image: sumathipala
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
    <Typography.Header color={Colors.WLF_YELLOW} style={{marginTop: 20, lineHeight:"60px"}}>
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
      <b>MEDLIFE</b>, which stands for Medicine, Education, and Development for Low Income Families Everywhere, is an international non-profit aimed at empowering people in their fight for equal access to healthcare, education, and a safe home. <a href="https://www.medlifemovement.org/" style={{color: Colors.WLF_YELLOW}}>Learn more about MEDLIFE.</a>
      <br/>
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
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={waveXmedlife} style={{maxWidth: 700, margin: 'auto', marginBottom: -50}}/>
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
