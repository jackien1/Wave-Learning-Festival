import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import { Featured, Row } from './styles'
import EventCard from './EventCard'
import { Typography, Colors } from '@/styles'

const Speakers = () => {
  const speakers = [
    {
      name: 'STEMtober',
      date: 'Saturday, September 19, 10:00am-5:00pm EDT, 7:00am-2:00pm PST',
      desc: 'We have recently partnered with STEMEY to host a virtual series of speaker seminars every Saturday of October, which we are calling STEMtober. We are hoping to inspire students who have limited contact with STEM to explore the field further, as well as provide guidance to passionate students seeking to become more involved in STEM. We are looking for experienced STEM professionals to speak.',
      signup: "/event-stemey"
    },
    {
      name: 'Silence is Violence Conference',
      date: 'Saturday, September 19, 10:00am-5:00pm EDT, 7:00am-2:00pm PST',
      desc: 'The ‘Silence is Violence’ Conference features influential leaders making an impact in gender-based violence and public policy in the US. The event will consist of stories from White House recognized activists, shelter workers, Pulitzer Prize winner and former United States Poet Laureate, Natasha Tretheway, and more. Learn more and register now by clicking the button below!',
      signup: "/event-violence"
    },
    {
      name: 'Education, Medicine, Technology: Living the MEDLife',
      date: 'Saturday, September 26, 1:00-4:00pm EDT, 10:00-1:00pm PST, 6:00-9:00pm GMT',
      desc: "A collaboration with MEDLIFE Ontario, this event will consist of a keynote speaker, and then concurrent breakout rooms of interactive panel discussions with nine influential leaders making an impact through education, medicine, and technology in vulnerable communities all around the world. To learn more about how these pioneers are pushing the forefront of development in their fields today and RSVP, click the button below!",
      signup: "/event-medlife"
    },
  ]

  const colors1 = [Colors.WLF_TURQOUISE, Colors.WLF_YELLOW, Colors.WLF_ORANGE, Colors.WLF_PURPLE]
  const colors2 = [Colors.WLF_TURQOUISE, Colors.WLF_YELLOW, Colors.WLF_ORANGE, Colors.WLF_PURPLE]

  return (
    <div>
      <Navbar/>
      <Container style={{ minHeight: '0vh' }}>
        <ContainerInner>
          <Typography.Header>Upcoming Events </Typography.Header>
          <Typography.BodyText color="black" style={{marginBottom: "15px"}}> In addition to these events, we will also be featuring college and career panels and exciting new speakers. Stay tuned!!<br/></Typography.BodyText>
          {
            speakers.map((speaker, index) => {
              return <Row key={index}
              >
                <EventCard
                  name={speaker.name}
                  desc={speaker.desc}
                  date={speaker.date}
                  color={colors1[index % 4]}
                  signup={speaker.signup}/>
              </Row>
            })
          }
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default Speakers
