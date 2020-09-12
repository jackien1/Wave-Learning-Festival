import React, { useState, useContext } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@/globalStyles";
import { Sidebar, ListItem, Highlight, ContainerInner } from "../styles";
import { Form, Colors, Typography } from "@/styles";
import FAQCard from '../FAQCard'
import highlight from '../BLOB_YELLOW.svg';

const seminarsFAQ = [
  {
    question: "Does it cost anything to take a seminar?",
    answer: "All seminars are completely free — our goal is to make education as equitable as possible. All you need is a device that connects to the internet, and you’re good to go!"
  },{
    question: "When will seminars start for this upcoming session?",
    answer: "Tide 1 will start on Monday, October 5th and end on Friday, November 6th!"
  },{
    question: "What happens during a normal seminar session in Tide?",
    answer: "This varies a lot depending on the seminar! Some seminars will be heavily discussion-based, while others are lecture-based. Your instructor will be contacting you through Ed and hosting seminars through Zoom. Ed is the online communication platform Wave Learning Festival will be using. Here, instructors can post announcements, inspire discussion, and upload their resources, and students can participate in outside-the-seminar room discussions and meet other like-minded students!"
  },{
    question: "Do I need to have any previous experience in the seminar topic to enroll in a seminar?",
    answer: "Not at all. Anyone can take any seminar they are interested in. It may be helpful to have some background in certain subjects before taking certain seminars, but there is no formal requirement. If there is a suggested prerequisite, it will be listed in the seminar description."
  },{
    question: "How is Tide different from Wave summer sessions?",
    answer: "Tides will meet over a longer period of time (5 weeks) but less frequently than our summer Waves, allowing students to build on a topic and explore it in greater depth."
  },{
    question: "How many seminars can I be enrolled in?",
    answer: "For our upcoming Tide sessions, you can indicate whether you want to be enrolled in 1 or 2 seminars on the registration form. You can rank up to 5 different seminars, and we will try our best to accommodate your preferences. If you are enrolled in a seminar off the waitlist, you may end up enrolled in more than 2 courses."
  },{
    question: "Can I be waitlisted in a seminar?",
    answer: "There are multiple reasons you could be waitlisted in a seminar: (1) the seminar has reached its maximum seminar size, (2) you have been enrolled in other seminars higher in priority on your registration form, (3) the seminar has a strict grade level restriction, and you are outside that grade range, and (4) the waitlisted seminar conflicts in seminar time with a higher priority seminar that you are already enrolled in. "
  },{
    question: "What do I need in order to take a seminar?",
    answer: "Seminars will be held live over Zoom. We are also working to expand our platform to accommodate students who live in inconvenient time zones or lack access to stable Wi-Fi. Wave will be posting recordings to our YouTube channel for students with time conflicts."
  },{
    question: "I'm outside the target grade range. Can I still register for the seminar?",
    answer: <p>Yes! Each seminar has a target grade range that reflects the seminar’s difficulty. You are welcome to register for any seminar you’d like; however, it’s important to consider the difficulty of a seminar as you select your favorite options. Additionally, some seminars have <i>restricted grade ranges</i>, meaning you may not register for the seminar if you are outside of the range.</p>
  },{
    question: "Will there be homework?",
    answer: "It depends on the seminar! Instructors decide whether or not they’d like to assign homework, but any assigned homework will be optional."
  },{
    question: "Can I start a seminar in the middle of a session?",
    answer: "Unfortunately no, but you can learn about the seminars we are offering during the current session to start planning which topics you’re interested in exploring for future sessions!"
  },{
    question: "Will my instructor be able to help me if I am struggling with the coursework?",
    answer: "Yes! We use a platform called Ed that allows you to discuss topics with your Tidemates and instructors, either publicly or privately."
  },{
    question: "How do I drop a seminar?",
    answer: "On your student dashboard, you should see a list of seminars you registered for. Underneath each seminar is an option to withdraw your registration."
  },{
    question: "Can I request a seminar?",
    answer: "Send any requests or suggestions to wavelearningfestival@gmail.com!"
  },{
    question: "What resources will Wave be providing, other than Tides?",
    answer: <p> We will be offering the following additional resources to all students, free of charge:
    <ul>
      <li>providing small-group tutoring for students who may need assistance in any school subject (visit <a href="/tutoring" color={Colors.WLF_PURPLE}>Tutoring</a> to learn more)</li>
      <li>continue featuring speaker events that help students learn about topics from the perspective of a professional (visit <a href="/events" color={Colors.WLF_PURPLE}>Events</a> to learn more)</li>
      <li>offer events facilitating career development and college preparation (visit <a href="/events" color={Colors.WLF_PURPLE}>Events</a> to learn more)</li>
    </ul></p>
  },{
    question: "Who can I contact if I have more questions?",
    answer: <p>Feel free to email any other questions to <a href = "mailto: wavelearningfestival@gmail.com" style={{color: Colors.WLF_PURPLE}}>wavelearningfestival@gmail.com</a>!</p>
  }
]
const tutoringFAQ = [
  {
    question: "Who are Wave tutors?",
    answer: "Wave Tutors are talented students with a desire to help others improve their academic skills. They come from high schools and colleges all around the world and are here to help you out in whatever way they can. Wave Tutors are from 10th grade and above, reside all over the world, and showcase the diversity in academic excellence. They go through a vetting process involving a written application, one-on-one interviews with Wave’s Curricular Support team, and submit documentation of their relevant past experience."
  },{
    question: "What subjects can I get help with?",
    answer: <p>Wave Tutoring provides support for both middle school and high school students in the following subjects:
    <ul>
      <li>Math: Pre-Algebra/Algebra 1, Geometry, Algebra2/Precalculus, Calculus, Statistics </li>
      <li>Science: Biology, Chemistry, Physics, Computer Science</li>
      <li>Language: Spanish, French, Chinese</li>
      <li>Humanities: English, US History, World History, Economics, Psychology</li>
    </ul></p>
  },{
    question: "How can I sign up?",
    answer: "Starting October 5th, students will be able to create their own Wave accounts. After logging in to their account, students join tutoring sessions from their student dashboard. Students will be able to filter tutors through by subject and the specific times they will be hosting their tutoring sessions, and view tutors’ bios."
  },{
    question: "How will tutoring work?",
    answer: "All tutoring is done online through Zoom and is accessed through the Wave student dashboard. A single tutoring session will accommodate up to 5 students in order to ensure a more personal and focused session. Students may join the tutoring session until the 5 student cap has been filled. At that point, those not in the session will be able to join a queue."
  },{
    question: "When are tutoring hours?",
    answer: "Tutoring sessions will be held between 3pm EDT and 9pm EDT on weekdays and from noon EDT to 9pm EDT weekends."
  },{
    question: "How long will tutoring sessions be?",
    answer: "Tutoring sessions are scheduled for one hour—students are free to drop-in anytime."
  },{
    question: "Do I need to stay for the entire tutoring session?",
    answer: "No, students are free to leave anytime during the session, once their questions have been answered."
  },{
    question: "Can I contact my tutor outside of a session?",
    answer: "Wave Learning Festival will not give out a tutor’s contact information to be contacted outside of their scheduled tutoring session. Tutors may choose to provide their contact information to students on an individual basis, but any information given out will be the tutor’s decision."
  },{
    question: "When does tutoring start?",
    answer: "Tutoring services begin on Monday, October 5th!"
  },{
    question: "Who can I contact if I have more questions?",
    answer: <p>Feel free to email any other questions to <a href = "mailto: wavelearningfestival@gmail.com" style={{color: Colors.WLF_PURPLE}}>wavelearningfestival@gmail.com</a>!</p>
  },
]

const Seminars = () => (<>
  <Typography.Header2 color="black" fontSize="28px">
    Seminars
  </Typography.Header2>
  {
    seminarsFAQ.map(faq => {
    return <FAQCard question={faq.question} answer={faq.answer}/>
    })
  }
  </>
)

const Tutoring = () => (<>
  <Typography.Header2 color="black" fontSize="28px">
    Tutoring
  </Typography.Header2>
  {
    tutoringFAQ.map(faq => {
    return <FAQCard question={faq.question} answer={faq.answer}/>
    })
  }
  </>
)

const Home = () => (<>
  <div style={{display: 'inline-flex', marginTop: '-20px'}}>
    <ContainerInner width='50%'> { Seminars()} </ContainerInner>
    <ContainerInner width='50%'> { Tutoring()} </ContainerInner>
  </div>
  </>
)

const FAQStudents = () => {
  const [page, setPage] = useState('home')
  const [showAll, toggleShowAll] = useState(true)
  const [showSeminars, toggleShowSeminars] = useState(false)
  const [showTutoring, toggleShowTutoring] = useState(false)
  
  return (
    <div>
      <Navbar />
      <Container>
        <Sidebar>
          <ListItem onClick={() => {
            toggleShowAll(true); 
            toggleShowSeminars(false); 
            toggleShowTutoring(false); 
            setPage('home');
          }}>
            All Student FAQs
          </ListItem>
          {showAll ? <Highlight src={highlight} style={{width: '205px', height: '50px', marginLeft:'-1em', opacity:1}}/> : <Highlight src={highlight} style={{opacity:0}}/>}
          <ListItem onClick={() => {
            toggleShowAll(false); 
            toggleShowSeminars(true); 
            toggleShowTutoring(false); 
            setPage('seminars');
          }}>            
            Seminars
          </ListItem>
          {showSeminars ? <Highlight src={highlight} style={{width: '110px', height: '50px', opacity:1}}/> : <Highlight src={highlight} style={{opacity:0}}/>}
          <ListItem onClick={() => {
            toggleShowAll(false); 
            toggleShowSeminars(false); 
            toggleShowTutoring(true); 
            setPage('tutoring');
          }}>                   
            Tutoring
          </ListItem>
          {showTutoring ? <Highlight src={highlight} style={{width: '105px', height: '50px', opacity:1}}/> : <Highlight src={highlight} style={{opacity:0}}/>}
        </Sidebar>
        <ContainerInner>
          <Typography.Header color={Colors.WLF_PURPLE} style={{marginTop: '-45px'}}>
            FAQ - Students
          </Typography.Header>
          {page === 'home' && Home({ setPage })}
          {page === 'seminars' && Seminars({ setPage })}
          {page === 'tutoring' && Tutoring({ setPage })}
          {/* <Typography.Header2 color="black" fontSize="24px">
            Seminars
          </Typography.Header2>
          {
            seminarsFAQ.map(faq => {
              return <FAQCard question={faq.question} answer={faq.answer}/>
            })
          }
          <Typography.Header2 color="black" fontSize="24px">
            Tutoring
          </Typography.Header2>
          {
            tutoringFAQ.map(faq => {
              return <FAQCard question={faq.question} answer={faq.answer}/>
            })
          } */}
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default FAQStudents;
