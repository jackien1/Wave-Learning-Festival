import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listTutorRegistrations } from '../../graphql/queries';
import { updateTutorRegistration, deleteTutorRegistration, createTutorRegistration } from '../../graphql/mutations';

import Table from '../../components/Table'
import { WLF_BLACK } from '@/styles/Colors'

const Tutors = () => {
  const [loading, setLoading] = useState(false)
  const [registrations, updateRegistrations] = useState([])

  const fetchRegistrations = async () => {
    try { 
      const tutorData = await API.graphql(graphqlOperation(listTutorRegistrations));
      const tutorList = tutorData.data.listTutorRegistrations.items;
      console.log(tutorList);
      updateRegistrations(tutorList);
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
    title: 'Subjects', 
    field: 'subjects'
    },{ 
    title: 'Other Subjects', 
    field: 'othersubjects' 
    },{ 
    title: 'Age Ranges', 
    field: 'ageRanges'
    },{ 
    title: 'Qualifications', 
    field: 'qualifications' 
    },{ 
    title: 'Why tutor?', 
    field: 'why' 
    },{ 
    title: 'Experience', 
    field: 'experience' 
    },{ 
    title: 'Hours', 
    field: 'hours' 
    },{ 
    title: 'Questions?', 
    field: 'questions' 
    }]

  const saveData = (tutorData, fullData) => {
    console.log(tutorData)
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(updateTutorRegistration, {
      input: {id: tutorData.id,
        first_name: tutorData.first_name,
        last_name: tutorData.last_name,
        school: tutorData.school,
        email: tutorData.email,
        gradYear: tutorData.gradYear,
        othersubjects: tutorData.othersubjects,
        previousWaves: tutorData.previousWaves,
        ageRanges: tutorData.ageRanges,
        qualifications: tutorData.qualifications,
        why: tutorData.why,
        experience: tutorData.experience,
        hours: tutorData.hours,
        questions: tutorData.questions}
      }))
  }

  const delData = (data, fullData) => {
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(deleteTutorRegistration, {
      input: {id: data[0].id}
      }))
  }

  const addData = (tutorData) => {
    updateRegistrations([...registrations, tutorData]);
    API.graphql(graphqlOperation(createTutorRegistration, {
      input: {id: tutorData.id,
        first_name: tutorData.first_name,
        last_name: tutorData.last_name,
        school: tutorData.school,
        email: tutorData.email,
        gradYear: tutorData.gradYear,
        othersubjects: tutorData.othersubjects,
        previousWaves: tutorData.previousWaves,
        ageRanges: tutorData.ageRanges,
        qualifications: tutorData.qualifications,
        why: tutorData.why,
        experience: tutorData.experience,
        hours: tutorData.hours,
        questions: tutorData.questions}
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
          <Typography.Header>Tutor Applications</Typography.Header>
          <Typography.BodyText style={{color: Colors.WLF_ORANGE}}><b>**Currently Debugging :( Please do not edit any entries!!**</b></Typography.BodyText>
          {loading && 
            <Table title="" data={registrations} columns={columns} 
            saveData={saveData} addData={addData} delData={delData}/>}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Tutors
