import React, { useState, useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, ContainerInner } from "@/globalStyles";
import { Form, Colors, Typography } from "@/styles";
import FAQCard from '../FAQCard'

const tutorsFAQ = [
  {
    question: "Who are Wave tutors?",
    answer: "Wave Tutors are talented students with a desire to help others improve their academic skills. They come from high schools and colleges all around the world and are here to help you out in whatever way they can. Wave Tutors are from 10th grade and above, reside all over the world, and showcase the diversity in academic excellence. They go through a vetting process involving a written application, one-on-one interviews with Wave’s Curricular Support team, and submit documentation of their relevant past experience."
  },{
    question: "What subjects can I tutor?",
    answer: <p>Wave Tutoring provides support for both middle school and high school students in the following subjects:
    <ul>
      <li>Math: Pre-Algebra/Algebra 1, Geometry, Algebra2/Precalculus, Calculus, Statistics </li>
      <li>Science: Biology, Chemistry, Physics, Computer Science</li>
      <li>Language: Spanish, French, Chinese</li>
      <li>Humanities: English, US History, World History, Economics, Psychology</li>
    </ul></p>
  },{
    question: "How does tutoring work?",
    answer: "Tutors will be provided with Wave Tutor accounts. After logging in, tutors will be able to view the subjects and times they will be tutoring every week, and cancel sessions if necessary. Tutors will also be able to access the Zoom links for their tutoring sessions, and edit their bios."
  },{
    question: "What will the format of tutoring sessions look like?",
    answer: "All tutoring is done online through Zoom and is accessed through the Wave tutor dashboard. A single tutoring session will hold up to 5 students in order to ensure a more personal and focused session. Students may join the tutoring session until the 5 student cap has been filled. At that point, those not in the session will be able to join the queue."
  },{
    question: "What does the schedule look like?",
    answer: "You make your schedule! Tutor for only one hour a week or three, the choice is yours. All you need to do is provide us with the times that work best for you, and we will do our best to accommodate your preferences. However, tutoring sessions will only be held between 3pm EDT and 9pm EDT on weekdays and from noon EDT to 9pm EDT weekends."
  },{
    question: "How long will tutoring sessions be?",
    answer: "Each tutoring session will be one hour long, though you can host multiple sessions a week (or even in a day)."
  },{
    question: "Will students or parents contact me outside of a session?",
    answer: "Wave Learning Festival will not give out a tutor’s contact information to be contacted outside of their scheduled tutoring session. You may choose to provide your contact information to students during a tutoring session, but any information given out will be your decision."
  },{
    question: "When does tutoring start?",
    answer: "Tutoring services begin on Monday, October 5th!"
  },{
    question: "When is the application deadline?",
    answer: "Applications to be a tutor have a priority deadline of Tuesday, September 15th, but tutors will continue to be accepted and onboarded on a rolling basis throughout the semester."
  },{
    question: "Who can I contact if I have more questions?",
    answer: <p>Feel free to email any other questions to <a href = "mailto: wavelearningfestival@gmail.com" style={{color: Colors.WLF_PURPLE}}>wavelearningfestival@gmail.com</a>!</p>
  }
]

const FAQTutors = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header color={Colors.WLF_PURPLE} style={{marginTop: '-45px'}}>
            FAQ - Tutors
          </Typography.Header>
          {
            tutorsFAQ.map(faq => {
            return <FAQCard question={faq.question} answer={faq.answer}/>
            })
          }
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default FAQTutors;
