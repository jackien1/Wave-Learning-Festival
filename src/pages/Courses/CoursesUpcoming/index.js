import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { FirebaseContext } from '../../../firebaseContext'
import { Colors, Typography } from '@/styles'

const CoursesUpcoming = () => {

    return (<div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <Typography.Header color={Colors.WLF_PURPLE}>
            Stay tuned for 50 engaging new seminars!
          </Typography.Header>
          <Typography.BodyText color="black" fontSize="20px" style={{marginBottom: 20}}>
            Are you a motivated student looking for free engaging education amidst the pandemic? Are you looking to extend beyond what you cover in school? Did you love a course over the summer and want to take more in the fall?
          </Typography.BodyText>
          <Typography.BodyText color="black" fontSize="20px" style={{marginBottom: 20}}>
            Wave is excited to offer brand new seminars in Tide 1, taught by passionate instructors on the topics they love. In the past, Wave instructors have taught everything from “Counting Infinities” to “Hip-Hop and Social Activism”. And, as always, our seminars are 100% free to anyone who would like to register.
          </Typography.BodyText>
          <Typography.BodyText color="black" fontSize="20px" style={{marginBottom: 20}}>
            These seminars provide a comprehensive introduction to topics that students may be simply interested in or want to learn in depth. They run for five weeks, ranging from 3 to 10 sessions total, allowing students to cover a greater depth of information over that time. Wave students are free to pursue these for the love of learning - not for grades.
          </Typography.BodyText>
          <Typography.BodyText color="black" fontSize="20px" style={{marginBottom: 20}}>
            Now more than ever, Wave values the importance of providing free, equitable learning resources to everyone. <b>Tide 1 will run from October 5th to November 6th. Student registration will open on September 17th!</b> In the meantime, click <a href="/subscribe">here</a> to subscribe to our newsletter. We hope to see you here with Wave Learning Festival!
          </Typography.BodyText>
          <Typography.BodyText color="black" fontSize="20px">
            Have any questions? Email us at <a href = "mailto: wavelearningfestival@gmail.com" style={{color: Colors.WLF_PURPLE}}>wavelearningfestival@gmail.com</a> or check out our FAQs page for <a href="/faq-students" color={Colors.WLF_PURPLE}>students</a> or for <a href="/faq-parents" color={Colors.WLF_PURPLE}>parents</a>!
          </Typography.BodyText>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>)
}

export default CoursesUpcoming
