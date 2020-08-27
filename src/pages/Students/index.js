import React, { useState, useContext, useEffect, forwardRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'
import { FirebaseContext } from '../../firebaseContext'
import { Button, Header, Title, Heading } from './styles'


import { API, graphqlOperation } from 'aws-amplify';
import { listStudents } from '../../graphql/queries';
import { updateStudent, deleteStudent, createStudent } from '../../graphql/mutations';

import Table from '../../components/Table'

const Students = () => {
  const [loading, setLoading] = useState(false)
  const [students, updateStudents] = useState([])

  const fetchStudents = async () => {
    try { 
      const studentData = await API.graphql(graphqlOperation(listStudents));
      const studentList = studentData.data.listStudents.items;
      updateStudents(studentList);
    } catch (error) {
        console.log('error on fetching students', error);
    }
  }

  useEffect(() => {
    fetchStudents();
}, []);

  useEffect(() => {
    console.log(students.length)
    if (students.length >= 1) {
      setLoading(true)
    }
  }, [students])

  const columns = [{
      title: 'id', 
      field: 'id',
      type: 'ID'
    },{ 
    title: 'First Name', 
    field: 'first_name' 
    },{ 
    title: 'Last Name', 
    field: 'last_name' 
    },{ 
    title: 'Grade', 
    field: 'grade' 
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
    title: 'School', 
    field: 'school' 
    },{ 
    title: 'Parent Name', 
    field: 'parentName'
    },{ 
    title: 'Parent Email', 
    field: 'parentEmail'
    },{ 
    title: 'Parent Email', 
    field: 'parentEmail'
    },{ 
    title: 'Num Courses', 
    field: 'numCourses',
    },{ 
      title: 'How You Hear', 
      field: 'howYouHear',
    },{ 
      title: 'Seminars', 
      field: 'registeredSeminars',
    },{ 
      title: 'Events', 
      field: 'registeredEvents',
    }
  ]

  const saveData = (studentData, fullData) => {
    console.log(studentData)
    updateStudents(fullData);
    API.graphql(graphqlOperation(updateStudent, {
      input: {
        id: studentData.id,
        city: studentData.city,
        state: studentData.state,
        country: studentData.country,
        school: studentData.school,
        first_name: studentData.first_name,
        last_name: studentData.last_name,
        grade: studentData.grade,
        howYouHear: studentData.howYouHear,
        numCourses: studentData.numCourses,
        parentName: studentData.parentName,
        parentEmail: studentData.parentEmail,
        registeredEvents: studentData.registeredEvents,
        registeredSeminars: studentData.registeredSeminars,
      }
      }))
  }

  const delData = (studentData, fullData) => {
    console.log(studentData)
    updateStudents(fullData)
    API.graphql(graphqlOperation(deleteStudent, {
      input: {id: studentData.id}
      }))
  }

  const addData = (studentData) => {
    updateStudents([...students, studentData]);
    API.graphql(graphqlOperation(createStudent, {
      input: {
        id: studentData.id,
        city: studentData.city,
        state: studentData.state,
        country: studentData.country,
        school: studentData.school,
        first_name: studentData.first_name,
        last_name: studentData.last_name,
        grade: studentData.grade,
        howYouHear: studentData.howYouHear,
        numCourses: studentData.numCourses,
        parentName: studentData.parentName,
        parentEmail: studentData.parentEmail,
        registeredEvents: studentData.registeredEvents,
        registeredSeminars: studentData.registeredSeminars,
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
  
  return (
    <div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <Typography.Header>Student Profiles</Typography.Header>
          <Typography.BodyText style={{color: Colors.WLF_BLACK}}>Total Number Displayed: {students.length}</Typography.BodyText>
          {loading && 
            <Table title="" data={students} columns={columns} 
            saveData={saveData} addData={addData} deleteData={delData}/>}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Students
