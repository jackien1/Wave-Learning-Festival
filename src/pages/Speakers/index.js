import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import FeaturedSpeaker from './FeaturedSpeaker'
import { Featured, Row } from './styles'
import AnimateHeight from 'react-animate-height'
import SpeakerCard from './SpeakerCard'

import Jameela from './jameela-jamil.jpg'
import Nate from './nate_saal.jpg'
import Iris from './iris_fu.jpg'
import Jasmine from './jasmine_shao.jpeg'
import Lisa from './lisa_baldwin.jpeg'
import Nicole from './nicole_chung.jpg'
import Ruta from './ruta_sepetys.jpg'
import Andrew from './andrew_cramer.jpg'
import Cliff from './cliff_hsia.jpg'
import { Typography, Colors } from '@/styles'

const Speakers = () => {
  const upcomingSpeakers = [
    
  ]

  const speakers = [
  ]

  const colors1 = [Colors.WLF_TURQOUISE, Colors.WLF_YELLOW, Colors.WLF_ORANGE, Colors.WLF_PURPLE]
  const colors2 = [Colors.WLF_TURQOUISE, Colors.WLF_YELLOW, Colors.WLF_ORANGE, Colors.WLF_PURPLE]

  return (
    <div>
      <Navbar/>
      <Container style={{ minHeight: '0vh' }}>
        <ContainerInner>
          <Featured>Upcoming Speakers: </Featured>
          <Typography.BodyText style={{marginBottom: "15px"}}>Check out our Past Speakers <a href="/past-speakers">here</a>!<br/></Typography.BodyText>
          {
            upcomingSpeakers.map((speaker, index) => {
              return <Row key={index}
              >
                <SpeakerCard
                  name={speaker.name}
                  img={speaker.img}
                  title={speaker.title}
                  date={speaker.date}
                  desc={speaker.desc}
                  bio={speaker.bio}
                  color={colors1[index % 4]}
                  hasTime={speaker.hasTime}
                  age={speaker.age}
                  signup={speaker.signup}/>          </Row>
            })
          }
        </ContainerInner>
      </Container>
      {/*
      <Container>
        <ContainerInner>
          <Featured>Next Up: </Featured>
          {
            speakers.map((speaker, index) => {
              return <Row key={index}>
                <SpeakerCard
                  key={index}
                  name={speaker.name}
                  img={speaker.img}
                  title={speaker.title}
                  date={speaker.date}
                  desc={speaker.desc}
                  bio={speaker.bio}
                  color={colors2[index % 4]}
                  hasTime={speaker.hasTime}
                  age={speaker.age}
                  signup={speaker.signup}/>          </Row>
            })
          }
        </ContainerInner>
      </Container>
      */}
      <Footer/>
    </div>
  )
}

export default Speakers
