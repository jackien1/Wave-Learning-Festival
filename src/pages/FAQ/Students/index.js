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
  },
  {
    question: "Do I need to have any previous experience in the seminar topic to enroll in a seminar?",
    answer: "Not at all. Anyone can take any seminar they are interested in. It may be helpful to have some background in certain subjects before taking certain seminars, but there is no formal requirement. If there is a suggested prerequisite, it will be listed in the seminar description."
  }
]
const tutoringFAQ = [
  {
    question: "Does it cost anything to take a seminar?",
    answer: "All seminars are completely free — our goal is to make education as equitable as possible. All you need is a device that connects to the internet, and you’re good to go!"
  },
  {
    question: "Do I need to have any previous experience in the seminar topic to enroll in a seminar?",
    answer: "Not at all. Anyone can take any seminar they are interested in. It may be helpful to have some background in certain subjects before taking certain seminars, but there is no formal requirement. If there is a suggested prerequisite, it will be listed in the seminar description."
  }
]

const Home = ({ setPage }) => (<>
  <Typography.Header2 color="black" fontSize="24px">
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
  }
  </>
)

const Seminars = ({ setPage }) => (<>
  <Typography.Header2 color="black" fontSize="24px">
    Seminars
  </Typography.Header2>
  {
    seminarsFAQ.map(faq => {
    return <FAQCard question={faq.question} answer={faq.answer}/>
    })
  }
  </>
)

const Tutoring = ({ setPage }) => (<>
  <Typography.Header2 color="black" fontSize="24px">
    Tutoring
  </Typography.Header2>
  {
    tutoringFAQ.map(faq => {
    return <FAQCard question={faq.question} answer={faq.answer}/>
    })
  }
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
