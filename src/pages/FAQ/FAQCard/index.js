import React, { useState } from 'react'
import {
  Card, Speaker, Question, Header, Details, Button,
  QuestionContainer,
  AnswerContainer,
  Answer,
  ContainerInner,
  Heading,
  Triangle,
  ImageContainer
} from './styles'
import { Colors, Typography } from "@/styles";
import { IconContext } from 'react-icons'
import { FaAngleDown } from 'react-icons/fa'
import AnimateHeight from 'react-animate-height'

const FAQCard = ({ question, answer}) => {
  const [show, toggleShow] = useState(false)
  return (
    <div>
      <QuestionContainer onClick={() => toggleShow(!show)}>
        <ContainerInner>
          <Question>
            <Typography.Header2 color="black" fontSize="18px">{question}</Typography.Header2>
          </Question>
          <IconContext.Provider 
            value={{ style: { verticalAlign: 'middle', marginRight: '10px'}, size: '1.5em'}}
          >
            <div><FaAngleDown /></div>
          </IconContext.Provider>
        </ContainerInner>
      </QuestionContainer>
      <AnimateHeight height={show ? 'auto' : 0} duration={200}>
        <AnswerContainer>
          <ContainerInner style={{ display: 'block' }}>
            <Typography.BodyText color="black" fontSize="16px"> {answer} </Typography.BodyText>
          </ContainerInner>
        </AnswerContainer>
      </AnimateHeight>
    </div>
  )
}

export default FAQCard
