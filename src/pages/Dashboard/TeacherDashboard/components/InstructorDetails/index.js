import React, { useState } from 'react'
import { ImageContainer, Cancel, Purple, Input, Green2, EditDescription, Container, ContainerInner1, ContainerInner, ProfileImage, Description, Button } from './styles'
import Image from './placeholder.png'
const InstructorDetails = ({ school, first, last, profileDispatch, cancelTeacher, submitTeacher, bio }) => {
  const [edit, toggleEdit] = useState(false)
  const cancel = () => {
    toggleEdit(false)
    cancelTeacher()
  }

  const submit = () => {
    toggleEdit(!edit)
    submitTeacher()
  }

  return (
    <Container>
      {edit &&
        <ContainerInner1>
          <Input placeholder="Instructor First Name" value={first} onChange = {e => profileDispatch({ type: 'FIRSTNAME', content: e.target.value })}/>
          <Input placeholder="Instructor Last Name" value={last} onChange = {e => profileDispatch({ type: 'LASTNAME', content: e.target.value })}/>
          <Green2>Add a profile picture</Green2>
          <Input placeholder="Education (i.e. Harvard '23)" value={school} onChange = {e => profileDispatch({ type: 'SCHOOL', content: e.target.value })}/>
          <EditDescription placeholder="Bio" value={bio} onChange = {e => profileDispatch({ type: 'BIO', content: e.target.value })}/>
          <Purple>Add another teacher</Purple>
          <Button onClick={() => submit()}>Save Changes</Button>
          <Cancel onClick={() => cancel()} style ={{ }}>Cancel</Cancel>

        </ContainerInner1>}
      {!edit && <div>
        <ContainerInner>
          <ImageContainer>
            <ProfileImage src={Image}/>
            <p style={{ fontWeight: 600 }}>{first} {last}</p>
            <p>{school}</p>
          </ImageContainer>
          <Description>
            {bio}
          </Description>
        </ContainerInner>
        <ContainerInner1>
          <Button onClick={() => toggleEdit(!edit)}>{edit ? 'Save Changes' : 'Edit'}</Button>        </ContainerInner1></div>}

    </Container>
  )
}

export default InstructorDetails
