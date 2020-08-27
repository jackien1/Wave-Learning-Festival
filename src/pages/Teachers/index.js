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
      const studentData = await API.graphql(graphqlOperation(listTeacherRegistrations));
      const studentList = studentData.data.listTeacherRegistrations.items;
      updateRegistrations(studentList);
    } catch (error) {
        console.log('error on fetching songs', error);
    }
  }

  useEffect(() => {
    fetchRegistrations();
}, []);

  useEffect(() => {
    console.log(registrations.length)
    if (registrations.length >= 2) {
      setLoading(true)
    }
  }, [registrations])

  const columns = React.useMemo(
    () => [{ title: 'id', 
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
    title: 'GradYear', 
    field: 'gradYear' 
    },{ 
    title: 'School', 
    field: 'school' 
    },{ 
    title: 'Prior Teaching', 
    field: 'priorTeaching' 
    },{ 
    title: 'Qualifications', 
    field: 'qualifications' 
    },{ 
    title: 'Engagement', 
    field: 'engagement' 
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
    },{ 
    title: 'Previous Waves', 
    field: 'previousWaves' 
    },{ 
    title: 'Number of Sessions', 
    field: 'numSessions' 
    },{ 
    title: 'Seminar Description', 
    field: 'seminarDesc' 
    }    
  ],[])

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
    updateRegistrations(fullData)
    API.graphql(graphqlOperation(deleteTeacherRegistration, {
      input: {id: data.id}
      }))
  }

  const addData = (registrationData) => {
    updateRegistrations([...registrations, registrationData]);
    API.graphql(graphqlOperation(createTeacherRegistration, {
      input: {
        id: registrationData.id,
        city: registrationData.city,
        state: registrationData.state,
        country: registrationData.country,
        school: registrationData.school,
        first_name: registrationData.first_name,
        last_name: registrationData.last_name,
        grade: registrationData.grade,
        howYouHear: registrationData.howYouHear,
        numCourses: registrationData.numCourses,
        parentName: registrationData.parentName,
        parentEmail: registrationData.parentEmail,
        registeredEvents: registrationData.registeredEvents,
        registeredSeminars: registrationData.registeredSeminars,
      }
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
          <Typography.BodyText>Total Number Displayed: {registrations.length}</Typography.BodyText>
          {loading && 
            <Table title="Teacher Registration Information" data={registrations} columns={columns} 
            saveData={saveData} addData={addData} deleteData={delData}/>}}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Teachers
