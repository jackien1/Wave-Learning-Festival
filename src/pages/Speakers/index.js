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
    {
      name: 'Ruta Sepetys: History in Hiding: The Elusive Power of Historical Fiction',
      img: Ruta,
      title: '#1 NYT Bestselling Author of Historical Fiction',
      date: "Tuesday 8/25 7:00-8:00pm EDT",
      desc: <p><b>Seminar 2: History in Hiding: The Elusive Power of Historical Fiction </b><br/>What determines how history is preserved and recalled? Why do some parts of history penetrate our collective consciousness while others remain hidden? This seminar will explore unearthing buried history and creative research! Topics will include the power of historical fiction to facilitate progress, create pathways for global dialogue, and give voice to the voiceless. Presentation will be followed by discussion and Q & A. Stay tuned for Ruta's third seminar: Meet the Author!</p>,
      bio: 'Ruta Sepetys is a #1 New York Times bestselling author of historical fiction published in over sixty countries and forty languages. Sepetys is considered a “crossover” novelist as her books are read by both students and adults worldwide. Winner of the Carnegie Medal, Ruta is renowned for giving voice to underrepresented history and those who experienced it.  Her books have won or been shortlisted for over forty book prizes, are included on over thirty state reading lists, and are currently in development for film and television. www.rutasepetys.com',
      hasTime: false,
      age: "6th - 12th Grade",
      signup: "/speaker-sign-up-ruta2"
    },
    {
      name: 'Ruta Sepetys: Meet the Author: Ruta Sepetys Discusses Her Novels',
      img: Ruta,
      title: '#1 NYT Bestselling Author of Historical Fiction',
      date: "Tuesday 9/1 7:00-8:00pm EDT",
      desc: <p><b>Seminar 3: Meet the Author: Ruta Sepetys Discusses Her Novels </b><br/>Prior to becoming a bestselling novelist, Ruta Sepetys spent over twenty years in the entertainment industry helping artists and musicians tell stories through song. In this seminar, Ruta will discuss her path to publication and answer questions about two of her New York Times bestselling novels—Salt to the Sea and Between Shades of Gray. </p>,
      bio: 'Ruta Sepetys is a #1 New York Times bestselling author of historical fiction published in over sixty countries and forty languages. Sepetys is considered a “crossover” novelist as her books are read by both students and adults worldwide. Winner of the Carnegie Medal, Ruta is renowned for giving voice to underrepresented history and those who experienced it.  Her books have won or been shortlisted for over forty book prizes, are included on over thirty state reading lists, and are currently in development for film and television. www.rutasepetys.com',
      hasTime: true,
      age: "6th - 12th Grade",
      signup: "/speaker-sign-up-ruta3"
    },
  ]

  const speakers = [
    
    {
      name: 'Jasmine Shao: Become an iNfLuEnCeR: How to Grow & Monetize Your Platform!',
      img: Jasmine,
      title: "AKA studyquill! UCLA '24",
      date: 'Tuesday 9/1 8:30pm EDT',
      desc: <p>How do people become famous? Specifically, how do people talking to themselves in their bedrooms blow up into Internet stars? I don't have all the answers to the age-old puzzle of popularity, but here's what I can tell you: <br/><br/> How to start creating or improve your own content! I'll share the top tips I've learned from my four years of video and photo experience, and my insider reflections on the 'influencer industry' as a whole. <br/><br/> How people seem to make an income out of thin air! I'll show you how monetization, sponsorships, affiliate marketing, and other methods work, so you can be an informed consumer or get started on your Internet career. <br/><br/> And maybe, just maybe... how to become famous.</p>,
      bio: "Hello! My name is Jasmine. I'm the creator behind the YouTube channel and Instagram account @studyquill, where I share tips on studying and bullet journaling. In my four years on social media, I've gained 550,000+ subscribers and 300,000+ Instagram followers. I've collaborated with brands like Google Chromebooks, Texas Instruments, and Grammarly, and have been profiled in the Wall Street Journal and National Geographic textbooks. I also published a book about bullet journaling and interned with the marketing team of my favorite stationery company! Proud Ravenclaw and lover of string crafts.",
      hasTime: false, 
      age: "9th - 12th Grade",
      signup: ""
    },
    {
      name: 'Cliff Hsia: How to Negotiate Your Salary to Get Paid More',
      img: Cliff,
      title: 'Writer, Marketer, Teacher',
      date: 'Wednesday 9/2 7:00-8:00pm EDT',
      desc: <p><b>Seminar 3: How to Negotiate Your Salary to Get Paid More</b>
      <br/>So, the recruiter asks you what your salary expectations are. Now what? Stop right there. First person to say a number loses.
      <br/>In this seminar, you'll learn the time-tested techniques to get recruiters or managers to say their numbers or ranges first, so you'll be in better control of the salary negotiation. Find out which questions to ask and how to specifically ask them, so that you can get paid what you're worth. And it doesn't stop there. With these negotiation techniques, you'll learn how to negotiate nearly anything, whether it's working remotely, pay raises, benefits, and more.
      <br/>Come with your questions as there will be plenty of time for Q&A with Cliff.</p>,
      bio: <p>Cliff Hsia is a Hawaii-raised, California-based writer, marketer, teacher, traveler, husband, and father. Over the course of his 15+ years marketing career in technology, he has worked for various companies in the Bay Area, including Alibaba, Cisco, Box, and Palo Alto Networks. He's also worked for dozens of companies as a freelance copywriter and editor for startups and big tech giants like Google, Yahoo, and Lyft. Throughout his career, he's learned how to efficiently get more jobs and clients—many at the same time—with a clear and well-written resume, solid interviewing skills, and savvy negotiating techniques. 
        <br/>Check out his writing about family travel and lifestyle design at LiveFamilyTravel.com, HuffPost, TODAY, The Good Men Project, and other media publications. Cliff also works as a private writing and English tutor, a Gates Millennium/APIA Scholar mentor, and a YouTube creator. 
        <br/>Connect with Cliff here: <a href="https://www.facebook.com/clifftutoring">Facebook</a> and <a href="https://youtu.be/tHFGwMGJDIc">YouTube – 6 Years of Travel Around the World</a></p>,
      hasTime: false,
      age: "9th Grade and up",
      signup: "/speaker-sign-up-cliff"
    },
    {
      name: 'Iris Fu: How to Self-Publish a Book in a Month',
      img: Iris,
      title: "Economics Author, Youtuber, Stanford '24",
      date: 'Thursday 9/3 5:30-6:30pm EDT',
      desc: "Have you always had an interest that you'd want to showcase through a book? Does publishing a book seem like a daunting task? Well, it doesn't have to be! In this seminar, you'll learn how you can go from writing, editing, and self-publishing your book in as short of a time frame as a month. We'll focus on using the publishing platform Amazon KDP, and leave ample of time for questions to cater to your needs! ",
      bio: 'Iris Fu is a rising freshman at Stanford University, where she plans to study computer science and economics. In high school, she self-published an introductory economics book, created an international video pal program, and had the opportunity to perform flute at Carnegie Hall. This summer, she is working at a blockchain identity startup, running a college admissions Youtube channel (Iris Fu), and seeking cool opportunities like speaking at Wave LF!',
      hasTime: false, 
      age: "7th - 12th Grade",
      signup: ""
    },
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
      <Footer/>
    </div>
  )
}

export default Speakers
