import React from 'react'
import { Container, Left, Right, Details } from './styles'

const CourseInfo = ({ title, teachers, description, classDates, time, targetAudience, classDays, courseId }) => {
  return (
    <Container>
      <Left>
        <h1>{title}</h1>
        <p>{classDates}</p>
        <p>{time}</p>
        <p>{classDays}</p>
      </Left>
      <Right>
        <p style={{ marginTop: '1rem' }}>Links</p>
        <Details>zoom</Details>
        <Details>ed</Details>
      </Right>
    </Container>
  )
}

export default CourseInfo
