import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listTeacherRegistrations } from '../../graphql/queries';
import { updateTeacherRegistration, deleteTeacherRegistration, createTeacherRegistration } from '../../graphql/mutations';

import Table from '../../components/Table'

const Teachers = () => {
  const [loading, setLoading] = useState(false)
  const [registrations, updateRegistrations] = useState([])

  const fetchRegistrations = async () => {
    try {
      const teacherData = await API.graphql(graphqlOperation(listTeacherRegistrations));
      const teacherList = teacherData.data.listTeacherRegistrations.items;
      updateRegistrations(teacherList);
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
    title: 'id',
    field: 'id',
    type: 'ID'
    },{
    title: 'TimeStamp',
    field: 'createdAt'
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
    title: 'GradYear',
    field: 'gradYear'
    },{
    title: 'Seminar Title',
    field: 'seminarTitle'
    },{
    title: 'Seminar Description',
    field: 'seminarDesc'
    },{
    title: 'Number of Sessions',
    field: 'numSessions'
    },{
    title: 'Qualifications',
    field: 'qualifications'
    },{
    title: 'Prior Teaching',
    field: 'priorTeaching'
    },{
    title: 'Engagement',
    field: 'engagement'
    },{
    title: 'Course Learning Outcomes',
    field: 'skills'
    },{
    title: 'Previous Waves',
    field: 'previousWaves'
    },{
    title: 'Questions?',
    field: 'questions'
    },{
    title: 'Co-Teacher First Name',
    field: 'coFirst'
    },{
    title: 'Co-Teacher Last Name',
    field: 'coLast'
    },{
    title: 'Co-Teacher School',
    field: 'coSchool'
    },{
    title: 'Co-Teacher GradYear',
    field: 'coYear'
    }]

  const saveData = (teacherData, fullData) => {
    console.log(teacherData)
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(updateTeacherRegistration, {
      input: {id: teacherData.id,
        first_name: teacherData.first_name,
        last_name: teacherData.last_name,
        school: teacherData.school,
        email: teacherData.email,
        gradYear: teacherData.gradYear,
        coFirst: teacherData.coFirst,
        coLast: teacherData.coLast,
        coEmail: teacherData.coEmail,
        coSchool: teacherData.coSchool,
        coYear: teacherData.coYear,
        seminarTitle: teacherData.seminarTitle,
        seminarDesc: teacherData.seminarDesc,
        numSessions: teacherData.numSessions,
        qualifications: teacherData.qualifications,
        priorTeaching: teacherData.priorTeaching,
        engagement: teacherData.engagement,
        skills: teacherData.skills,
        previousWaves: teacherData.previousWaves,
        questions: teacherData.questions}
      }))
  }

  const delData = (data, fullData) => {
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(deleteTeacherRegistration, {
      input: {id: data[0].id}
      }))
  }

  const addData = (teacherData) => {
    updateRegistrations([...registrations, teacherData]);
    API.graphql(graphqlOperation(createTeacherRegistration, {
      input: {id: teacherData.id,
        first_name: teacherData.first_name,
        last_name: teacherData.last_name,
        school: teacherData.school,
        email: teacherData.email,
        gradYear: teacherData.gradYear,
        coFirst: teacherData.coFirst,
        coLast: teacherData.coLast,
        coEmail: teacherData.coEmail,
        coSchool: teacherData.coSchool,
        coYear: teacherData.coYear,
        seminarTitle: teacherData.seminarTitle,
        seminarDesc: teacherData.seminarDesc,
        numSessions: teacherData.numSessions,
        qualifications: teacherData.qualifications,
        priorTeaching: teacherData.priorTeaching,
        engagement: teacherData.engagement,
        skills: teacherData.skills,
        previousWaves: teacherData.previousWaves,
        questions: teacherData.questions}
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
          <select onchange={(e) => {
            console.log(e.target.value);
          }}>
            <option value="1">Tide 1</option>
            <option value="2">Tide 2</option>
          </select>
          <Typography.Header>Instructor Applications</Typography.Header>
          {loading &&
            <Table title="" data={registrations} columns={columns}
            saveData={saveData} addData={addData} delData={delData}/>}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Teachers
