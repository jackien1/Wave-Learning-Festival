import React, { useState, useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, ContainerInner } from "@/globalStyles";
import { Form, Colors, Typography } from "@/styles";
import FAQCard from '../FAQCard'

const instructorsFAQ = [
  {
    question: "When will Tide 1 seminars start?",
    answer: "Tide 1 will start on Monday, October 5th and end on Friday, November 6th!"
  },{
    question: "How long will my teaching session be?",
    answer: "That will be up to you, as the instructor. Seminars can range from meeting every two weeks (3 sessions total) to twice a week (10 sessions total) for five weeks. The long-form structure will give you more time to build on a topic that excites you and allows your students to learn a greater depth of information."
  },{
    question: "Will I be getting any support when planning my seminar curriculum?",
    answer: "Yes! You will be planning your seminar with the help of Wave Learning Festival’s Engaged Seminars team. Together, you will build and structure your seminar programming to make sure your seminar is a success. Our team will also be in contact throughout the duration of your seminar, should you have any questions or request any additional support."
  },{
    question: "Do I have to know what I’m teaching before I apply?",
    answer: <p>Yes, you will apply with a topic and description for your seminar. However, you do not need to have your full seminar curriculum finalized before you apply. If you are having a hard time deciding between seminars you’d like to teach or would like some inspiration, contact <a href = "mailto: wavelearningfestival@gmail.com" style={{color: Colors.WLF_PURPLE}}>wavelearningfestival@gmail.com</a> with questions.</p>
  },{
    question: "Is it possible to co-teach with another person?",
    answer: "Yes! In fact, we encourage it—double the ideas and half the work is awesome for everyone involved. When filling out the Instructor Application form, make sure you add your co-teacher’s name and contact information. You only need to submit one form per pair."
  },{
    question: "What should I teach?",
    answer: "All topics are valid, whether traditional or a bit eccentric! Whatever you choose to teach, our priority is to keep seminars fun and engaging—think discussions, collaborative work, and hands-on projects."
  },{
    question: "What are some examples of seminars that might be taught?",
    answer: "The Art of Writing Poetry: a Workshop, Debate Anything, US Foreign Involvement, Is It Inevitable? Combating Climate Change, Introduction to Cryptography, Scripting for Data Analysis, Interactive Game Theory, Analyzing Contemporary Art, Discussing Faulkner’s Works, and on and on and on… (hint: Stanford Splash/MIT Splash have some pretty cool ideas!)"
  },{
    question: "Do I have to assign homework? Do I have to proctor exams?",
    answer: "Absolutely not! As an instructor, you will have control over the amount of interactive work you would like to assign. There won’t be any official system in which to assign feedback for student work. However, if you would like to have a platform on which to give feedback to students, you will have the chance to coordinate with WLF’s Engaged Seminars team and come up with a solution that works with the structure of your seminar."
  },{
    question: "Who can I contact if I have more questions?",
    answer: <p>Feel free to email any other questions to <a href = "mailto: wavelearningfestival@gmail.com" style={{color: Colors.WLF_PURPLE}}>wavelearningfestival@gmail.com</a>!</p>
  }
]

const FAQInstructors = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header color={Colors.WLF_PURPLE} style={{marginTop: '-45px'}}>
            FAQ - Instructors
          </Typography.Header>
          {
            instructorsFAQ.map(faq => {
            return <FAQCard question={faq.question} answer={faq.answer}/>
            })
          }
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default FAQInstructors;
