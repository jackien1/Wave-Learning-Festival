import React, { useState, useEffect } from 'react'
import { ImageContainer, Cancel, Purple, Input, Green2, EditDescription, Container, ContainerInner1, ContainerInner, ProfileImage, Description, Button } from './styles'
// import Image from './placeholder.png'
import { API, graphqlOperation } from 'aws-amplify'
import { getSeminar } from '@/graphql/queries'
import { Typography } from '@/styles'

const SeminarProfile = ({ numSeminars, sem1, sem2, sem3, sem4, sem5, reason1,  reason2, reason3, reason4, reason5, seminarInfo, seminarDispatch, cancelSeminar, submitSeminar}) => {
  
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
      {edit && <div>
      <ContainerInner>
        numSeminars: <Input placeholder="placeholder" value={numSeminars} onChange = {e => seminarDispatch({ type: 'NUMSEMINARS', content: e.target.value })}/> <br/>
        sem1: <Input placeholder="placeholder" value={sem1} onChange = {e => seminarDispatch({ type: 'SEM1', content: e.target.value })}/> <br/>
        sem2: <Input placeholder="placeholder" value={sem2} onChange = {e => seminarDispatch({ type: 'SEM2', content: e.target.value })}/> <br/>
      </ContainerInner>
        <ContainerInner1>
          <Button onClick={() => submit()}>Save Changes</Button>
          <Cancel onClick={() => cancel()} style ={{ }}>Cancel</Cancel> 
        </ContainerInner1></div>}
        
      {!edit && <div>
        <ContainerInner>
          Num Seminars: {numSeminars} <br/>
          Sem 1: {sem1} <br/>
          Sem 2: {sem2} <br/>
          Sem 3: {sem3} <br/>
          Sem 4: {sem4} <br/>
          Sem 5: {sem5} <br/>
          Reason 1: {reason1} <br/>
          Reason 2: {reason2} <br/>
          Reason 3: {reason3} <br/>
          Reason 4: {reason4} <br/>
          Reason 5: {reason5} <br/>
          test title: {seminarInfo[0].courseTitle}<br/>
        </ContainerInner>
        <ContainerInner1>
          <Button onClick={() => toggleEdit(!edit)}>{edit ? 'Save Changes' : 'Edit'}</Button>
        </ContainerInner1></div>}

    </Container>
  )
}

export default SeminarProfile