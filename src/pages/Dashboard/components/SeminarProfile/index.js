import React, { useState } from 'react'
import { ImageContainer, Cancel, Purple, Input, Green2, EditDescription, Container, ContainerInner1, ContainerInner, ProfileImage, Description, Button } from './styles'
// import Image from './placeholder.png'
import { API, graphqlOperation } from 'aws-amplify'
import { updateStudent } from '@/graphql/mutations'

const StudentProfile = ({ first_name, last_name, email, parent_first_name, parent_last_name, parentEmail, 
  grade, school, country, state, city, howYouHear, orgs, 
  profileDispatch, cancelProfile, submitProfile}) => {
  const [edit, toggleEdit] = useState(false)
  const cancel = () => {
    toggleEdit(false)
    cancelProfile()
  }

  const submit = () => {
    toggleEdit(!edit)
    submitProfile()
  }

  return (
    <Container>
      {edit &&
        <ContainerInner1>
          {/* <p>Student First Name</p>
          <Input placeholder="placeholder" value={first_name} onChange = {e => profileDispatch({ type: 'FIRSTNAME', content: e.target.value })}/>
          <p>Student Last Name</p>
          <Input placeholder="Instructor Last Name" value={last_name} onChange = {e => profileDispatch({ type: 'LASTNAME', content: e.target.value })}/>
          <Green2>Add a profile picture</Green2>
          <p>Education</p>
          <Input placeholder="Education (i.e. Harvard '23)" value={school} onChange = {e => profileDispatch({ type: 'SCHOOL', content: e.target.value })}/> */}

          numSeminars: <Input placeholder="placeholder" value={numReg} onChange = {e => semProfileDispatch({ type: 'NUMSEMREG', content: e.target.value })}/> <br/>
          {/* Student Last Name: <Input placeholder="placeholder" value={last_name} onChange = {e => profileDispatch({ type: 'LASTNAME', content: e.target.value })}/> <br/>
          Student Email: <Input placeholder="placeholder" value={email} onChange = {e => profileDispatch({ type: 'EMAIL', content: e.target.value })}/> <br/>
          Parent First Name: <Input placeholder="placeholder" value={parent_first_name} onChange = {e => profileDispatch({ type: 'PARENTFIRSTNAME', content: e.target.value })}/> <br/>
          Parent Last Name: <Input placeholder="placeholder" value={parent_last_name} onChange = {e => profileDispatch({ type: 'PARENTLASTNAME', content: e.target.value })}/> <br/>
          Parent Email: <Input placeholder="placeholder" value={parentEmail} onChange = {e => profileDispatch({ type: 'PARENTEMAIL', content: e.target.value })}/> <br/>
          Grade: <Input placeholder="placeholder" value={grade} onChange = {e => profileDispatch({ type: 'GRADE', content: e.target.value })}/> <br/>
          School: <Input placeholder="placeholder" value={school} onChange = {e => profileDispatch({ type: 'SCHOOL', content: e.target.value })}/> <br/>
          Country: <Input placeholder="placeholder" value={country} onChange = {e => profileDispatch({ type: 'COUNTRY', content: e.target.value })}/> <br/>
          State: <Input placeholder="placeholder" value={state} onChange = {e => profileDispatch({ type: 'STATE', content: e.target.value })}/> <br/>
          City: <Input placeholder="placeholder" value={city} onChange = {e => profileDispatch({ type: 'CITY', content: e.target.value })}/> <br/>
          How You Hear: <Input placeholder="placeholder" value={howYouHear} onChange = {e => profileDispatch({ type: 'HOWYOUHEAR', content: e.target.value })}/> <br/>
          {orgs != "" && <p>Orgs: <Input value={orgs} onChange = {e => profileDispatch({ type: 'ORGS', content: e.target.value })}/></p>} */}
          <Button onClick={() => submit()}>Save Changes</Button>
          <Cancel onClick={() => cancel()} style ={{ }}>Cancel</Cancel> 

        </ContainerInner1>}
        
      {!edit && <div>
        <ContainerInner>
          {/* Student First Name: {first_name} <br/>
          Student Last Name: {last_name} <br/>
          Student Email: {email} <br/>
          Parent First Name: {parent_first_name} <br/>
          Parent Last Name: {parent_last_name} <br/>
          Parent Email: {parentEmail} <br/>
          Grade: {grade} <br/>
          School: {school} <br/>
          Country: {country} <br/>
          State: {state} <br/>
          City: {city} <br/>
          How You Hear: {howYouHear} <br/>
          Orgs: {orgs} */}
        </ContainerInner>
        <ContainerInner1>
          <Button onClick={() => toggleEdit(!edit)}>{edit ? 'Save Changes' : 'Edit'}</Button>        </ContainerInner1></div>}

    </Container>
  )
}

export default StudentProfile