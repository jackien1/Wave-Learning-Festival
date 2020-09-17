import React, { useState, useEffect } from 'react'
import Checkbox from '@/components/Checkbox'
import { Colors } from '@/styles'
import { CheckboxContainer, CheckboxColumn, Cancel, EditDescription, Input, Green, Red, Green2, Container, ContainerInner, ContainerInner1, CourseImage, Information, Description, Heading, Button } from './styles'
import Logo from '../../../logo.png'
const ClassDetails = ({ cancelSeminar, submitSeminar, seminarProfileDispatch, img, prereqs, title, maxClassSize, teachers, color, description, classDates, time, targetAudience, classDays, courseId }) => {
  const grades = [6, 7, 8, 9, 10, 11, 12]
  const [edit, toggleEdit] = useState(false)

  const addFilter = (value, color) => {
    const copy = targetAudience
    copy.push(value)
    seminarProfileDispatch({ type: 'COUTARGAUD', content: copy })
  }

  const removeFilter = (value, color) => {
    const copy = targetAudience
    const filtered = copy.filter(e => e !== value)
    seminarProfileDispatch({ type: 'COUTARGAUD', content: filtered })
  }

  useEffect(() => {
    console.log(targetAudience)
  }, [targetAudience])

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
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ textAlign: 'left' }}>Grade Filters:</p>
            <CheckboxContainer>
              <CheckboxColumn>
                <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "Grade 6" value = {6} isFilled = {targetAudience.includes(6)}/>
                <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Grade 7" value = {7} isFilled = {targetAudience.includes(7)}/>
                <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "Grade 8" value = {8} isFilled = {targetAudience.includes(8)}/>
              </CheckboxColumn>
              <CheckboxColumn>
                <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_YELLOW} text = "Grade 9" value = {9} isFilled = {targetAudience.includes(9)}/>
                <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "Grade 10" value = {10} isFilled = {targetAudience.includes(10)}/>
              </CheckboxColumn>
              <CheckboxColumn>
                <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Grade 11" value = {11} isFilled = {targetAudience.includes(11)}/>
                <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "Grade 12" value = {12} isFilled = {targetAudience.includes(12)}/>
              </CheckboxColumn>
            </CheckboxContainer>
          </div>
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
            {targetAudience && <p>Grades {targetAudience.map((e, index) => (<span key={index}>{e} </span>))}</p>}
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
