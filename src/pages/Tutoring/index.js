import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { Colors, Typography } from '@/styles'

const Tutoring = () => {

    return (<div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <Typography.Header color={Colors.WLF_PURPLE}>
            Wave Tutoring
          </Typography.Header>
          <Typography.BodyText color="black" fontSize="20px" style={{marginBottom: 20}}>
            In homes across the world, students are having to balance their already demanding coursework with the difficulties of online learning. In-person discussions with teachers and their assistants have been put on hold as a result of the COVID-19 pandemic, yet students are still in need of academic support wherever it can be found.           
          </Typography.BodyText>
          <Typography.BodyText color="black" fontSize="20px" style={{marginBottom: 20}}>
            Wave Learning Festival is excited to announce the start of Wave Tutoring, a free online tutoring service for children anywhere! Taught by high-achieving high school and college students from around the globe, this program will aid middle and high school learners in understanding subjects in math, science, humanities, and a variety of languages. With hours available every day of the week, students will have ready access to a tutor if they find themselves needing an explanation in any of our available subjects. 
          </Typography.BodyText>
          <Typography.BodyText color="black" fontSize="20px" style={{marginBottom: 20}}>
            Each drop-in tutoring session will last an hour and holds up to 5 students at a time in order to provide a personal and focused educational experience. If their tutor is currently occupied with others, students will be able to enter a queue and join the moment a new spot becomes available. All this will be accessible through the student dashboard starting <b>Monday, October 5th</b>, after a student signs up for a Wave Learning Festival account.
          </Typography.BodyText>
          <Typography.BodyText color="black" fontSize="20px" style={{marginBottom: 20}}>
            Whether it’s understanding derivatives, learning how to greet someone in French, or figuring out the charge of chlorine ion, our tutors are excited to be right there with your student and walk them through these educational challenges. All of us here at Wave Learning Festival are thrilled to help your child in whatever ways we can!
          </Typography.BodyText>
          <Typography.BodyText color="black" fontSize="20px">
            Have any questions? Email us at <a href = "mailto: wavelearningfestival@gmail.com" style={{color: Colors.WLF_PURPLE}}>wavelearningfestival@gmail.com</a> or take a look at our tutoring FAQs page for <a href="/faq-students" color={Colors.WLF_PURPLE}>students</a> or for <a href="/faq-parents" color={Colors.WLF_PURPLE}>parents</a>!
          </Typography.BodyText>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>)
}

export default Tutoring
