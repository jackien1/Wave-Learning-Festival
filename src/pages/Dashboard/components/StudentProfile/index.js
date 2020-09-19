import React, { useState } from 'react'
import { ImageContainer, Cancel, Purple, Input, InputActive, Green2, EditDescription, Container, ContainerInner1, ContainerInner, ProfileImage, Description, Button } from './styles'
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

  console.log(school);

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

          Student First Name: <InputActive placeholder="Student First Name" value={first_name} onChange = {e => profileDispatch({ type: 'FIRSTNAME', content: e.target.value })}/> <br/>
          Student Last Name: <InputActive placeholder="Student Last Name" value={last_name} onChange = {e => profileDispatch({ type: 'LASTNAME', content: e.target.value })}/> <br/>
          Student E-mail: <InputActive placeholder="Student E-mail" value={email} onChange = {e => profileDispatch({ type: 'EMAIL', content: e.target.value })}/> <br/>
          Parent First Name: <InputActive placeholder="Parent First Name" value={parent_first_name} onChange = {e => profileDispatch({ type: 'PARENTFIRSTNAME', content: e.target.value })}/> <br/>
          Parent Last Name: <InputActive placeholder="Parent Last Name" value={parent_last_name} onChange = {e => profileDispatch({ type: 'PARENTLASTNAME', content: e.target.value })}/> <br/>
          Parent E-mail: <InputActive placeholder="Parent E-mail" value={parentEmail} onChange = {e => profileDispatch({ type: 'PARENTEMAIL', content: e.target.value })}/> <br/>
          Grade: <InputActive placeholder="Grade" value={grade} onChange = {e => profileDispatch({ type: 'GRADE', content: e.target.value })}/> <br/>
          School: <InputActive placeholder="School" value={school} onChange = {e => profileDispatch({ type: 'SCHOOL', content: e.target.value })}/> <br/>
          Country: <InputActive placeholder="Country" value={country} onChange = {e => profileDispatch({ type: 'COUNTRY', content: e.target.value })}/> <br/>
          State: <InputActive placeholder="State" value={state} onChange = {e => profileDispatch({ type: 'STATE', content: e.target.value })}/> <br/>
          City: <InputActive placeholder="City" value={city} onChange = {e => profileDispatch({ type: 'CITY', content: e.target.value })}/> <br/>
          How You Hear: <InputActive placeholder="How You Hear" value={howYouHear} onChange = {e => profileDispatch({ type: 'HOWYOUHEAR', content: e.target.value })}/> <br/>
          {/* orgs != "" && <p>Orgs: <Input value={orgs} onChange = {e => profileDispatch({ type: 'ORGS', content: e.target.value })}/></p> */}
          <Button onClick={() => submit()}>Save Changes</Button>
          <Cancel onClick={() => cancel()} style ={{ }}>Cancel</Cancel>

        </ContainerInner1>}

      {!edit && <div>
        <ContainerInner>
          Student First Name: <Input value={first_name} disabled={true}/> <br/>
          Student Last Name: <Input value={last_name} disabled={true}/> <br/>
          Student E-mail: <Input value={email} disabled={true}/> <br/>
          Parent First Name: <Input value={parent_first_name} disabled={true}/> <br/>
          Parent Last Name: <Input value={parent_last_name} disabled={true}/> <br/>
          Parent E-mail: <Input value={parentEmail} disabled={true}/> <br/>
          Grade: <Input value={grade} disabled={true}/> <br/>
          School: <Input value={school} disabled={true}/> <br/>
          Country: <Input value={country} disabled={true}/> <br/>
          State: <Input value={state} disabled={true}/> <br/>
          City: <Input value={city} disabled={true}/> <br/>
          How You Hear: <Input value={howYouHear} disabled={true}/> {/* <br/> */}
          {/* Orgs: <Input value={orgs} disabled={true}/> */}
        </ContainerInner>
        <ContainerInner1>
          <Button onClick={() => toggleEdit(!edit)}>{edit ? 'Save Changes' : 'Edit'}</Button>
        </ContainerInner1></div>}

    </Container>
  )
}

export default StudentProfile
