import React, { useState } from 'react'
import { Cancel, EditDescription, Input, Green, Red, Green2, Container, ContainerInner, ContainerInner1, CourseImage, Information, Description, Heading, Button } from './styles'
import Logo from '../../../logo.png'
const ClassDetails = ({ cancelSeminar, submitSeminar, seminarProfileDispatch, img, prereqs, title, maxClassSize, teachers, color, description, classDates, time, targgetAudience, classDays, courseId }) => {
  const [edit, toggleEdit] = useState(false)
  const cancel = () => {
    toggleEdit(false)
    cancelSeminar()
  }

  const submit = () => {
    toggleEdit(!edit)
    submitSeminar()
  }
  return (
    <Container>
      {edit &&
        <ContainerInner1>
          <p>Course Title</p>
          <Input placeholder="Course Title" value={title} onChange = {e => seminarProfileDispatch({ type: 'COUTITLE', content: e.target.value })}/>
          <p>Prerequisites</p>
          <Input placeholder="Prerequisites" value={prereqs} onChange = {e => seminarProfileDispatch({ type: 'COUPREREQS', content: e.target.value })}/>
          <p>Max Class Size</p>
          <Input placeholder="Max Class Size" value={maxClassSize} onChange = {e => seminarProfileDispatch({ type: 'COUMAXSIZE', content: e.target.value })}/>
          <Red>Attach Course Picture</Red>
          <Green2>Attach Course Syllabus</Green2>
          <p>Class Description</p>
          <EditDescription placeholder="Class Description" value={description} onChange = {e => seminarProfileDispatch({ type: 'COUDESCRIP', content: e.target.value })}/>
          <Button onClick={() => submit()}>Save Changes</Button>
          <Cancel onClick={() => cancel()} style ={{ }}>Cancel</Cancel>
        </ContainerInner1>}
      {!edit && <div>
        <ContainerInner>
          {img && <CourseImage src={img}/>}
          {!img && <CourseImage src={Logo}/>}

          <Information>
            <Heading>
                Target Audience
            </Heading>
            <p>{targgetAudience}</p>
            <Heading>
            Prerequisites
            </Heading>
            <p>{prereqs}</p>
            <Heading>
            Enrollment
            </Heading>
            <p></p>
            <Green>View course syllabus</Green>
          </Information>
        </ContainerInner>
        <ContainerInner1>
          <Heading>
            Class Description
          </Heading>
          <Description>
            {description}
          </Description>
          <Button onClick={() => toggleEdit(!edit)}>{edit ? 'Save Changes' : 'Edit'}</Button>

        </ContainerInner1></div>}

    </Container>
  )
}

export default ClassDetails
