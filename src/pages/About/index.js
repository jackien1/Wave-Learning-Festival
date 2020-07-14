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
  DescImage,
  Input,
  NewsLetter,
  Error,
  Popup,
  FeaturedImage,
  FeaturedLink
} from './styles'
import { Colors, Typography } from '@/styles'
import './styles.css'
import * as Assets from './assets'
import { FirebaseContext } from '@/firebaseContext'

const About = () => {
  const [name, updateName] = useState('')
  const [email, updateEmail] = useState('')
  const [nameError, toggleName] = useState(false)
  const [emailError, toggleEmail] = useState(false)
  const [subscribed, toggleSubscribed] = useState(false)
  const { db } = useContext(FirebaseContext)

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
      db.collection('Newsletter')
        .add({
          name,
          email
        })
        .then(toggleSubscribed(true))
    }
  }

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
                marginTop: '50px',
                flexWrap: 'wrap'
              }}
            >
              <a href="/courses" className="sign-up-link">
                <Button>
                  <p>Courses</p>
                </Button>
              </a>
              <a href="/teachers" className="sign-up-link">
                <Button>
                  <p>Teachers</p>
                </Button>
              </a>
              <a href="/course-sign-up" className="sign-up-link">
                <Button>
                  <p>Register Now!</p>
                </Button>
              </a>
            </div>
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
          <MediumImage src={Assets.Beach} />
          <div style={{ gridColumn: 'span 2', alignSelf: 'center' }}>
            <Highlight
              src={Assets.Highlight2}
              style={{
                width: 160,
                height: 60
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
              Our Mission: Smash Summer Boredom
            </Typography.Header>
            <Typography.BodyText
              style={{ color: 'white', fontSize: 18, fontWeight: '100' }}
            >
              We believe that summer should be a time for creativity,
              exploration, and academic excitement outside the classroom. So
              while traditional summer programs are on halt, Wave Learning
              Festival is bringing all the magic and engagement of a summer camp
              right to your home. We hope to provide students resources that
              help make this time as productive and engaging as possible.
            </Typography.BodyText>
          </div>
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
              imaginable, especially those not found in a classroom. Learn how
              to code your own games, cook up some French Cuisine, or pick up
              some digital painting skills. The possibilities are endless!
            </Typography.BodyText>
          </div>
          <MediumImage src={Assets.FerrisWheel} />
        </MediumContainer>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
          minHeight: '85vh',
          backgroundImage: `url(${Assets.WavyWhite})`,
          backgroundSize: 'cover',
          marginTop: -100,
          paddingBottom: 100
        }}
      >
        <br />
        <br />
        <MediumContainer>
          <DescItem>
            <DescImage src={Assets.Icon1} />
            <Typography.Header
              style={{ fontSize: 20, color: Colors.WLF_BLACK }}
            >
              Never the Same
            </Typography.Header>
            <Typography.BodyText
              style={{ fontSize: 16, color: Colors.WLF_BLACK }}
            >
              Choose from over <b>100</b> different seminars covering everything from
              STEM to performing arts. Love trying new things? New waves of
              classes and seminar leaders get released every 3 weeks.
            </Typography.BodyText>
          </DescItem>
          <DescItem>
            <DescImage src={Assets.Icon2} />
            <Typography.Header
              style={{ fontSize: 20, color: Colors.WLF_BLACK }}
            >
              Exclusive Seminar Leaders
            </Typography.Header>
            <Typography.BodyText
              style={{ fontSize: 16, color: Colors.WLF_BLACK }}
            >
              Seminars are hosted by talented college students across campuses
              such as Harvard, Stanford, MIT, and so many more. Our seminar
              leaders love teaching and want to introduce you to their favorite
              passion projects and subjects!
            </Typography.BodyText>
          </DescItem>
          <DescItem>
            <DescImage src={Assets.Icon3} />
            <Typography.Header
              style={{ fontSize: 20, color: Colors.WLF_BLACK }}
            >
              Have a Great Summer
            </Typography.Header>
            <Typography.BodyText
              style={{ fontSize: 16, color: Colors.WLF_BLACK }}
            >
              Stay connected with peers who share your intellectual interests,
              and participate in an open, welcoming environment -- all while
              doing this remotely and free of charge.
            </Typography.BodyText>
          </DescItem>
        </MediumContainer>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
          minHeight: '65vh',
          backgroundImage: `url(${Assets.WavyTurquoise})`,
          backgroundSize: 'cover',
          marginTop: -100
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
          backgroundColor: Colors.WLF_PURPLE,
          width: '100%'
        }}
        id="updates"
      >
        <MediumContainer>
          <Typography.Header
            style={{ color: 'white', fontSize: 28, marginBottom: 30 }}
          >
            {' '}
            Sign up here to get alerted and be the first to register for Wave 4!
            <Popup subscribed = {true}><p>Registration is currently open from July 10 - July 20 --enter your email and we will alert you as soon as courses open! Once you've subscribed, click <a href="http://www.wavelf.org/courses">here</a> to see the courses we plan to offer!</p></Popup>
            {subscribed && <Popup subscribed={subscribed}><p>Thank you for subscribing! Please follow the directions sent to your email to ensure you receive our updates. Furthermore, click on "Courses" at the top of our webpage to check out the courses we'll be offering!</p>
            </Popup>}
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
              <p>{subscribed ? 'Subscribed!' : 'Subscribe'}</p>
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
        <MediumContainer>
          <FeaturedLink href="https://www.nbcbayarea.com/news/coronavirus/local-college-student-creates-online-learning-center-for-kids-people-from-31-countries-sign-on/2324327/"><FeaturedImage style={{ width: '60%' }} src={Assets.NBC}/></FeaturedLink>
          <FeaturedLink href="https://www.thecrimson.com/article/2020/5/21/harvard-coronavirus-altered-summer-plans/"><FeaturedImage style={{ width: '40%' }} src={Assets.HarvardCrimson}/></FeaturedLink>
          <FeaturedLink href="https://www.thedp.com/article/2020/06/penn-students-create-online-learning-platforms-cornavirus-wave-festival-inventxyz"><FeaturedImage style={{ width: '80%' }} src={Assets.DailyPenn}/></FeaturedLink>
          <FeaturedLink href="https://www.pasadenaindependent.com/education/wave-learning-festival-teaches-kids-globally/"><FeaturedImage style={{ width: '80%' }} src={Assets.Pasdena}/></FeaturedLink>
          <FeaturedLink href="https://www.monroviaweekly.com/education/wave-learning-festival-teaches-kids-globally/"><FeaturedImage style={{ width: '80%' }} src={Assets.Monrovia}/></FeaturedLink>
          <FeaturedLink href="https://www.arcadiaweekly.com/education/wave-learning-festival-teaches-kids-globally/"><FeaturedImage style={{ width: '80%' }} src={Assets.Arcadia}/></FeaturedLink>
        </MediumContainer>
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
            We are accepting Donations!
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
