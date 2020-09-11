import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";
import FAQCard from '../FAQCard'


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

const FAQStudents = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header color={Colors.WLF_PURPLE}>
            FAQ - Students
          </Typography.Header>
          <Typography.Header2 color="black" fontSize="24px">
            Seminars
          </Typography.Header2>
          {
            seminarsFAQ.map(faq => {
              return <FAQCard question={faq.question} answer={faq.answer}/>
            })
          }
          {
            tutoringFAQ.map(faq => {
              return <FAQCard question={faq.question} answer={faq.answer}/>
            })
          }
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default FAQStudents;
