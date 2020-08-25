import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'
import { FirebaseContext } from '../../firebaseContext'
import { Button, Header, Title, Heading } from './styles'


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listTeacherRegistrations } from '../../graphql/queries';
import { updateTeacherRegistration } from '../../graphql/mutations';

import Filter from '../../components/Filter'
import CourseCard from '../../components/CourseCard'
import Table from '../../components/Table'

const Teachers = () => {
  const { db, storage } = useContext(FirebaseContext)
  const [loading, setLoading] = useState(false)
  const [students, updateStudents] = useState([])
  const [filteredItems, updateFiltered] = useState([])
  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]

  const fetchStudents = async () => {
    try { 
      const studentData = await API.graphql(graphqlOperation(listTeacherRegistrations));
      const studentList = studentData.data.listTeacherRegistrations.items;
      console.log('student list', studentList);
      updateStudents(studentList);
    } catch (error) {
        console.log('error on fetching songs', error);
    }
  }

  useEffect(() => {
    fetchStudents();
}, []);

  useEffect(() => {
    console.log(students.length)
    if (students.length >= 2) {
      setLoading(true)
    }
  }, [students])

  const columns = React.useMemo(
    () => [{ 
    Header: 'TimeStamp', 
    accessor: 'createdAt' 
    },{ 
    Header: 'First Name', 
    accessor: 'first_name' 
    },{ 
    Header: 'Last Name', 
    accessor: 'last_name' 
    },{ 
    Header: 'Email', 
    accessor: 'email' 
    },{ 
    Header: 'GradYear', 
    accessor: 'gradYear' 
    },{ 
    Header: 'School', 
    accessor: 'school' 
    },{ 
    Header: 'Prior Teaching', 
    accessor: 'priorTeaching' 
    },{ 
    Header: 'Qualifications', 
    accessor: 'qualifications' 
    },{ 
    Header: 'Engagement', 
    accessor: 'engagement' 
    },{ 
    Header: 'Co-Teacher First Name', 
    accessor: 'coFirst' 
    },{ 
    Header: 'Co-Teacher Last Name', 
    accessor: 'coLast' 
    },{ 
    Header: 'Co-Teacher School', 
    accessor: 'coSchool' 
    },{ 
    Header: 'Co-Teacher GradYear', 
    accessor: 'coYear' 
    },{ 
    Header: 'Previous Waves', 
    accessor: 'previousWaves' 
    },{ 
    Header: 'Number of Sessions', 
    accessor: 'numSessions' 
    },{ 
    Header: 'Seminar Description', 
    accessor: 'seminarDesc' 
    }    
  ],[])

  const saveData = (teacherData) => {
    console.log(teacherData)
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
          <Typography.BodyText>Total Number Displayed: {students.length}</Typography.BodyText>
          {loading && 
            <Table objs={students} columns={columns} update={saveData}/>}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Teachers
