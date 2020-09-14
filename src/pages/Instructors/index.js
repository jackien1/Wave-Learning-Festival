import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listTeachers } from '../../graphql/queries';
import { updateTeacher, deleteTeacher, createTeacher } from '../../graphql/mutations';

import Table from '../../components/Table'

const Instructors = () => {
  const [loading, setLoading] = useState(false)
  const [registrations, updateRegistrations] = useState([])

  const fetchRegistrations = async () => {
    try {
      const teacherData = await API.graphql(graphqlOperation(listTeachers));
      const teacherList = teacherData.data.listTeachers.items;
      var actualTeacherList = [];
      for (var i = 0; i < teacherList.length; i++) {
        actualTeacherList.push(teacherList[i]);
      }
      console.log("actual: " + actualTeacherList);
      updateRegistrations(actualTeacherList);
    } catch (error) {
        console.log('error on fetching songs', error);
    }
  }

  useEffect(() => {
    fetchRegistrations();
  }, []);

  useEffect(() => {
    console.log(registrations.length)
    if (registrations.length >= 1) {
      setLoading(true)
    }
  }, [registrations])


  const columns = [{
    title: 'Teacher ID',
    field: 'id',
    type: 'ID'
    },{
    title: 'TimeStamp',
    field: 'createdAt'
    },{
    title: 'Seminar ID',
    field: 'seminarId'
    },{
    title: 'First Name',
    field: 'first_name'
    },{
    title: 'Last Name',
    field: 'last_name'
    },{
    title: 'Email',
    field: 'email'
    },{
    title: 'School',
    field: 'school'
    },{
    title: 'Graduation Year',
    field: 'gradYear'
    },{
    title: 'Bio',
    field: 'bio'
    }]

  const saveData = (teacherData, fullData) => {
    console.log(teacherData)
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(updateTeacher, {
      input: {id: teacherData.id,
        first_name: teacherData.first_name,
        last_name: teacherData.last_name,
        email: teacherData.email,
        school: teacherData.school,
        gradYear: teacherData.gradYear,
        bio: teacherData.bio,
        seminarId: teacherData.seminarId}
      }))
  }

  const delData = (data, fullData) => {
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(deleteTeacher, {
      input: {id: data[0].id}
      }))
  }

  const addData = (teacherData) => {
    updateRegistrations([...registrations, teacherData]);
    API.graphql(graphqlOperation(createTeacher, {
      input: {id: teacherData.id,
        first_name: teacherData.first_name,
        last_name: teacherData.last_name,
        email: teacherData.email,
        school: teacherData.school,
        gradYear: teacherData.gradYear,
        bio: teacherData.bio,
        seminarId: teacherData.seminarId}
    }))
  }

  if (!loading) {
    return (
      <>
        <Navbar/>
        <Container>
          <ContainerInner>
            <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
          Loading...
            </Typography.BodyText>
          </ContainerInner>
        </Container>
      </>
    )
  }

  if (!loading) {
    return (
      <>
        <Navbar/>
        <Container>
          <ContainerInner>
            <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
          Loading...
            </Typography.BodyText>
          </ContainerInner>
        </Container>
      </>
    )
  }
  return (
    <div>
      <Navbar/>
      <Container>
        <ContainerInner>

          <Typography.Header>Instructor Info</Typography.Header>
          {loading &&
            <Table title="" data={registrations} columns={columns}
            saveData={saveData} addData={addData} delData={delData}/>}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Instructors
