import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'
import { TableContainer } from './styles.js'


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listEventRegistrations } from '../../graphql/queries';
import { updateEventRegistration, deleteEventRegistration, createEventRegistration } from '../../graphql/mutations';

import Table from '../../components/Table'

const Events = () => {
  const [loading, setLoading] = useState(false)
  const [registrations, updateRegistrations] = useState([])

  const fetchRegistrations = async () => {
    try {
      const teacherData = await API.graphql(graphqlOperation(listEventRegistrations));
      const teacherList = teacherData.data.listEventRegistrations.items;
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
    title: 'Student Email', 
    field: 'email' 
    },{
    title: 'eventID',
    field: 'eventID'
    },{
    title: 'School',
    field: 'school'
    },{
    title: 'City', 
    field: 'city' 
    },{ 
    title: 'State', 
    field: 'state' 
    },{ 
    title: 'Country', 
    field: 'country' 
    },{ 
    title: 'notes',
    field: 'notes'
    },{
    title: 'extra',
    field: 'extra'
    },{
    title: 'questions',
    field: 'questions'
    },{
    title: 'howYouHear',
    field: 'howYouHear'
    }]

  const saveData = (teacherData, fullData) => {
    console.log(teacherData)
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(updateEventRegistration, {
      input: {id: teacherData.id,
        first_name: teacherData.first_name,
          last_name: teacherData.last_name,
          email: teacherData.email,
          eventID: "SilenceIsViolence",
          school: teacherData.school,
          country: teacherData.country,
          city: teacherData.city,
          state: teacherData.state,
          notes: teacherData.notes,
          extra: teacherData.extra,
          questions: teacherData.questions, 
          howYouHear: teacherData.howYouHear}
      }))
  }

  const delData = (data, fullData) => {
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(deleteEventRegistration, {
      input: {id: data[0].id}
      }))
  }

  const addData = (teacherData) => {
    updateRegistrations([...registrations, teacherData]);
    API.graphql(graphqlOperation(createEventRegistration, {
      input: {id: teacherData.id,
        first_name: teacherData.first_name,
          last_name: teacherData.last_name,
          email: teacherData.email,
          eventID: "SilenceIsViolence",
          school: teacherData.school,
          country: teacherData.country,
          city: teacherData.city,
          state: teacherData.state,
          notes: teacherData.notes,
          extra: teacherData.extra,
          questions: teacherData.questions, 
          howYouHear: teacherData.howYouHear}
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
        <TableContainer>
          <Typography.Header>Seminars</Typography.Header>
          {loading &&
            <Table title="" data={registrations} columns={columns}
            saveData={saveData} addData={addData} delData={delData}/>}
        </TableContainer>
      </Container>
    </div>
  )
}

export default Events
