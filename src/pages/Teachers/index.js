import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'
import { FirebaseContext } from '../../firebaseContext'
import { Button, Header, Title, Heading } from './styles'


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listStudents } from '../../graphql/queries';

import Filter from '../../components/Filter'
import CourseCard from '../../components/CourseCard'
import Table from '../../components/Table'

const Students = () => {
  const { db, storage } = useContext(FirebaseContext)
  const [loading, setLoading] = useState(false)
  const [students, updateStudents] = useState([])
  const [filteredItems, updateFiltered] = useState([])
  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]

  const fetchStudents = async () => {
    try { 
      const studentData = await API.graphql(graphqlOperation(listStudents));
      const studentList = studentData.data.listStudents.items;
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
            <Table objs={students}/>}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Students
