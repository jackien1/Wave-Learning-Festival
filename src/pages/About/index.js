import React, { useContext, useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  HeaderImage,
  AboutDescription,
  Highlight,
  HighlightStyle1,
  Button,
  MediumImage,
  MetaContainer,
  MediumContainer,
  SubHeaderContainer,
  DescItem,
  Input,
  NewsLetter,
  Error,
  Popup,
  FeaturedImage,
  FeaturedLink,
  ContainerInner,
  Announcements,
  Card,
} from './styles'
import { Colors, Typography, Form } from '@/styles'
import './styles.css'
import * as Assets from './assets'
import { FirebaseContext } from '@/firebaseContext'
import { MdFormatAlignCenter } from 'react-icons/md'
import { TiSortAlphabeticallyOutline } from 'react-icons/ti'

const About = () => {
  const [name, updateName] = useState('')
  const [email, updateEmail] = useState('')
  const [nameError, toggleName] = useState(false)
  const [emailError, toggleEmail] = useState(false)
  const [subscribed, toggleSubscribed] = useState(false)
  const { db } = useContext(FirebaseContext)
  const [courses, totalCourses] = useState(60)
  const [registrations, totalRegs] = useState(9510)
  const [countries, totalCountries] = useState(5)

  const subscribe = () => {
    toggleEmail(false)
    toggleName(false)
    let valid = true

    if (name.length === 0) {
      toggleName(true)
      valid = false
    }
    if (email.length === 0) {
      toggleEmail(true)
      valid = false
    }

    if (db && valid) {
      const name_split = name.split(' ')
      db.collection('Newsletter')
        .add({
          name,
          email
        })
        .then(toggleSubscribed(true))
    }
  }

    useEffect(() => {
      const intervalId = setInterval(() => {
        totalCourses(count => {
          // NEEDS UPDATE: for dynamic courses count, needs to sync with database.  Manually entered 123 now.
          if (count === 300) {
            clearInterval(intervalId)
            return count
          }
          else
            return count + 10
        })
      }, 215)
      return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
      const intervalId = setInterval(() => {
        totalRegs(count => {
          // NEEDS UPDATE: for dynamic registrations count, needs to sync with database.  Manually entered 8765 now.
          if (count === 10000) {
            clearInterval(intervalId)
            return count
          }
          else
            return count + 10
        })
      }, 125)
      return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
      const intervalId = setInterval(() => {
        totalCountries(count => {
          // NEEDS UPDATE: for dynamic countries count, needs to sync with database.  Manually entered 36 now.
          if (count === 60) {
            clearInterval(intervalId)
            return count
          }
          else
            return count + 5
        })
      }, 415)
      return () => clearInterval(intervalId)
    }, [])


  return (
    <MetaContainer>
      <Navbar />
      <div style={{ width: '100%', minHeight: '65vh', maxWidth: '1024px' }}>
        <AboutDescription>
          <div>
            <HighlightStyle1 src={Assets.Highlight1} />
            <Typography.Header style={{ position: 'relative', zIndex: 2 }}>
              Make Waves With Us!
            </Typography.Header>
            <SubHeaderContainer>
              <Typography.BodyText>
                Join the Wave Learning Festival for a summer of
                not-at-all-ordinary programming, hosted by student leaders
                across the nation.
              </Typography.BodyText>
            </SubHeaderContainer>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '20px',
                flexWrap: 'wrap'
              }}
            >
              <a href="/courses" className="sign-up-link">
                <Button>
                  <p>Courses</p>
                </Button>
              </a>
              <a href="/instructors" className="sign-up-link">
                <Button>
                  <p>Instructors</p>
                </Button>
              </a>
              <a href="/course-sign-up" className="sign-up-link">
                <Button>
                  <p>Register!</p>
                </Button>
              </a>
            </div>
            <Announcements>
              <Typography.Header
                style={{
                  position: 'relative',
                  zIndex: 2,
                  color: Colors.WLF_YELLOW,
                  fontSize: 23
                }}
              >
                Announcements:
                <Typography.BodyText style={{ color: 'white', fontSize: 16, fontWeight: '100' }}>
                  <ul style={{ marginTop: -10, marginLeft: -25, lineHeight: 1.5 }}>
                    <li>Instructor applications for Tide 1 are now open! <a href="/instructors" style={{ color: Colors.WLF_YELLOW }}>Learn More</a></li>
                    <li>Learn how to negotiate your salary to get paid more with Cliff Hsia on Wednesday 9/2! <a href="/speakers" style={{ color: Colors.WLF_YELLOW }}>Learn More</a></li>
                    <li>Learn how to self-publish a book in a month with Iris Fu on Thursday 9/3! <a href="/speakers" style={{ color: Colors.WLF_YELLOW }}>Learn More</a></li>
                  </ul>
                </Typography.BodyText>
              </Typography.Header>
            </Announcements>
          </div>
          <HeaderImage src={Assets.Swing} />
        </AboutDescription>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          minHeight: '85vh',
          backgroundImage: `url(${Assets.WavyPurple})`,
          backgroundSize: 'cover',
          paddingBottom: 100
        }}
      >
        <MediumContainer>
          <MediumImage src={Assets.WhyWave} />
          <div style={{ gridColumn: 'span 2', alignSelf: 'center' }}>
            <Highlight
              src={Assets.Highlight4}
              style={{
                width: 205,
                height: 35,
                marginTop: 10
              }}
            />
            <Typography.Header
              style={{
                position: 'relative',
                zIndex: 2,
                color: 'white',
                fontSize: 28,
                marginBottom: 30
              }}
            >
              Why Wave?
            </Typography.Header>
            <Typography.BodyText
              style={{ color: 'white', fontSize: 18, fontWeight: '100' }}
            >
              The global COVID-19 pandemic has disrupted education worldwide,
              and in many cases, resulted in the loss of many critical learning
              opportunities. We hope that providing these fun and diverse
              classes can help students stay engaged and interact with fellow
              students when they're stuck at home. For a few hours every day,
              students can take a break with a project they love.
            </Typography.BodyText>
          </div>
        </MediumContainer>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'relative',
          width: '100%',
          minHeight: '90vh',
          backgroundImage: `url(${Assets.WavyWhite})`,
          backgroundSize: 'cover',
          marginTop: -100,
          paddingBottom: 100
        }}
      >
        <br />
        <br />
        <MediumContainer>
          <Card>
            <DescItem>
            <Highlight
                src={Assets.Blob1}
                style={{width: 250, height: 128, marginTop: 20}}
            />
            <Typography.Header
                style={{position: 'relative', zIndex: 2,color: 'white', fontSize: 68, marginBottom: 20, marginTop: 30 }}
              >
                {registrations}+
            </Typography.Header>
            <Typography.Header
                style={{ fontSize: 22, color: Colors.WLF_BLACK }}
              >
                Registrations
            </Typography.Header>
            <Typography.BodyText
                style={{ fontSize: 16, color: Colors.WLF_BLACK }}
              >
                Wave has served over 10000 students from all over the world.
            </Typography.BodyText>
            </DescItem>
          </Card>
          <Card>
            <DescItem>
            <Highlight
                src={Assets.Blob2}
                style={{width: 250, height: 118, marginBottom: 10, marginTop: 20}}
            />
            <Typography.Header
                style={{position: 'relative', zIndex: 2,color: 'white', fontSize: 80, marginBottom: 10, marginTop: 20 }}
              >
              {courses}+
            </Typography.Header>
            <Typography.Header
                style={{ fontSize: 22, color: Colors.WLF_BLACK }}
              >
              Courses
            </Typography.Header>
            <Typography.BodyText
                style={{ fontSize: 16, color: Colors.WLF_BLACK }}
              >
                We've provided over 300 different classes and seminars covering everything from math and physics
                to art history and public transportation systems.
            </Typography.BodyText>
            </DescItem>
          </Card>
          <Card>
            <DescItem>
            <Highlight
                src={Assets.Blob3}
                style={{width: 250, height: 118, marginTop: 20}}
            />
            <Typography.Header
                style={{position: 'relative', zIndex: 2,color: 'white', fontSize: 80, marginBottom: 10, marginTop: 20}}
              >
                {countries}
            </Typography.Header>
            <Typography.Header
                style={{ fontSize: 22, color: Colors.WLF_BLACK }}
              >
                Countries
            </Typography.Header>
            <Typography.BodyText
                style={{ fontSize: 16, color: Colors.WLF_BLACK }}
              >
                We have students from 60 countries, including the United Arab Emirates, China, India, and Antarctica.
            </Typography.BodyText>
            </DescItem>
          </Card>
        </MediumContainer>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
          minHeight: '85vh',
          backgroundImage: `url(${Assets.WavyOrange})`,
          backgroundSize: 'cover',
          marginTop: -100,
          paddingBottom: 100
        }}
      >
        <MediumContainer>
          <div style={{ gridColumn: 'span 2', alignSelf: 'center' }}>
            <Highlight
              src={Assets.Highlight3}
              style={{
                width: 160,
                height: 35,
                marginTop: 10
              }}
            />
            <Typography.Header
              style={{
                position: 'relative',
                zIndex: 2,
                color: 'white',
                fontSize: 28,
                marginBottom: 30
              }}
            >
              A Festival Unlike Any Other
            </Typography.Header>
            <Typography.BodyText
              style={{ color: 'white', fontSize: 18, fontWeight: '100' }}
            >
              During the Wave Learning Festival, tune into seminars designed for
              middle schoolers and high schoolers covering every topic
              imaginable, especially on those not found in a classroom. Learn how
              to code your own games, cook up some French Cuisine, or pick up
              some digital painting skills. The possibilities are endless!
              <br></br> <br></br>
              WLF is run by students from Harvard, Stanford, UPenn, and other peer
              institutions, divided into seven different teams. "Waves" of seminars
              and classes run for 2-3 weeks. Course registration opens a few weeks
              before classes start and students are notified of their enrollment
              a few days before classes! All students will be placed in at least
              one course of their choice.
            </Typography.BodyText>
          </div>
          <MediumImage src={Assets.FerrisWheel} />
        </MediumContainer>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: Colors.WLF_TURQOUISE,
          width: '100%'
        }}
        id="updates"
      >
        <MediumContainer>
          <Typography.Header
            style={{ color: 'white', fontSize: 28, marginBottom: 30 }}
          >
            {' '}
            Sign up here to receive email alerts and be the first to get involved with our fall initiatives!
            {/*<Popup subscribed = {true}><p>Registration for our fall iniatives will begin around September!</p></Popup>
            {subscribed && <Popup subscribed={subscribed}><p>Thank you for subscribing! Please follow the directions sent to your email to ensure you receive our updates. Furthermore, click on "Courses" at the top of our webpage to check out the courses we'll be offering!</p>
            </Popup>} */}
          </Typography.Header>
          <NewsLetter>
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => updateName(e.target.value)}
            />
            {nameError && <Error>Please enter a name</Error>}
            <p></p>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
            />
            {emailError && <Error>Please enter an email</Error>}
            <Button
              disabled={subscribed}
              onClick={() => subscribe()}
              style={{ marginTop: 40 }}
            >
              <p>{subscribed ? 'Submitted!' : 'Submit'}</p>
            </Button>
          </NewsLetter>
        </MediumContainer>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Typography.Header
          style={{ color: Colors.WLF_PURPLE, fontSize: 36, marginTop: 50 }}
        >
            As Featured In:
        </Typography.Header>
        <ContainerInner>
          <FeaturedImage onClick={() => window.open('https://www.nbcbayarea.com/news/coronavirus/local-college-student-creates-online-learning-center-for-kids-people-from-31-countries-sign-on/2324327/', '_blank')} width={25} src={Assets.NBC}/>
          <FeaturedImage onClick={() => window.open('https://www.today.com/parents/19-online-activities-keep-kids-entertained-all-summer-t187359', '_blank')} width={30} src={Assets.TodayShow}/>
          <FeaturedImage onClick={() => window.open('https://www.ktvu.com/news/harvard-student-develops-wave-learning-festival-offers-free-online-courses', '_blank')} width={23} src={Assets.KTVU}/>
          <FeaturedImage onClick={() => window.open('https://www.thedp.com/article/2020/06/penn-students-create-online-learning-platforms-cornavirus-wave-festival-inventxyz', '_blank')} width={35} src={Assets.DailyPenn}/>
          <FeaturedImage onClick={() => window.open('https://www.thecrimson.com/article/2020/5/21/harvard-coronavirus-altered-summer-plans/', '_blank')} width={13} src={Assets.HarvardCrimson}/>
          <FeaturedImage onClick={() => window.open('https://www.pasadenaindependent.com/education/wave-learning-festival-teaches-kids-globally/', '_blank')} width={27} src={Assets.Pasdena}/>
          <FeaturedImage onClick={() => window.open('https://www.monroviaweekly.com/education/wave-learning-festival-teaches-kids-globally/', '_blank')} width={27} src={Assets.Monrovia}/>
          <FeaturedImage onClick={() => window.open('https://www.arcadiaweekly.com/education/wave-learning-festival-teaches-kids-globally/', '_blank')} width={27} src={Assets.Arcadia}/>
        </ContainerInner>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: Colors.WLF_ORANGE,
        width: '100%'
      }}
      id="updates"
      >
        <Typography.Header
          style={{ color: 'white', fontSize: 28, marginBottom: 20, marginTop: 20 }}
        >
            We are accepting donations!
        </Typography.Header>
        <a href="/donate" className="sign-up-link">
          <Button
            style={{
              marginTop: 40,
              backgroundColor: Colors.WLF_YELLOW,
              marginTop: '20px',
              marginBottom: '20px',
              marginLeft: '30px'
            }}>
            <p>Donate</p>
          </Button>
        </a>
      </div>
      <Footer />
    </MetaContainer>
  )
}

export default About
