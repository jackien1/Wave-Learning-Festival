import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'
import { FirebaseContext } from '../../firebaseContext'
import { Button, Header, Title, Heading } from './styles'
import 'firebase/firestore'

import Filter from '../../components/Filter'
import CourseCard from '../../components/CourseCard'
import Table from '../../components/Table'

const Students = () => {
  const { db, storage } = useContext(FirebaseContext)
  const [loading, setLoading] = useState(false)
  const [students, updateStudents] = useState([])
  const [filteredStudents, setFilteredStudents] = useState([])
  const [filteredItems, updateFiltered] = useState([])
  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]

  const addFilter = (text, color, age) => {
    updateFiltered(filteredItems => [...filteredItems, { text, color }])
  }

  const removeFilter = (text, color, age) => {
    updateFiltered(filteredItems.filter(item => item.text !== text))
  }
  const categories = {
    tech: 'Science and Tech',
    aesthetics: 'Aesthetics and Culture',
    history: 'History, Society, and Individuals'
  }

  const onSearch = (e) => {
    /*if (e.length === 0 && filteredItems.length === 0) {
      setFilteredStudents(students)
    } else if (e.length === 0 && (filteredItems.length !== 0)) {
      setFilteredStudents(students.filter(course => {
        for (let i = 0; i < filteredItems.length; i++) {
          if (!isNaN(filteredItems[i].text)) {
            if (!course.targetGrades.includes(filteredItems[i].text)) return false
          } else if (!course.category.includes(filteredItems[i].text)) {
            return false
          }
        }
        return true
      }))
    } else if (filteredItems.length === 0) {
      setFilteredStudents(students.filter(course => {
        return course.title.toLowerCase().includes(e.toLowerCase())
      }))
    } else {
      setFilteredStudents(students.filter(course => {
        for (let i = 0; i < filteredItems.length; i++) {
          if (!isNaN(filteredItems[i].text)) {
            if (!course.targetGrades.includes(filteredItems[i].text)) return false
          } else if (!course.category.includes(filteredItems[i].text)) {
            return false
          }
        }
        if (course.title.toLowerCase().includes(e.toLowerCase())) {
          return true
        }
        return false
      }))
    }*/
  }
  
  useEffect(() => {
    console.log("Updating Students")
    if (db) {
      db.collection('StudentRegistrations').limit(200).onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            const student = {
              id: doc.data().id,
              name: doc.data().name_first + " " + doc.data().name_last,
              email: doc.data().email,
              pastCourses: doc.data().pastCourses,
              age: doc.data().age,
              futureWaves: doc.data().futureWaves,
              parentName: doc.data().parentName,
              parentEmail: doc.data().parentEmail,
              country: doc.data().country,
              city: doc.data().city,
              state: doc.data().state,
              school: doc.data().school,
              numCourses: doc.data().numCourses,
              firstCourse: doc.data().firstCourse,
              secondCourse: doc.data().secondCourse,
              thirdCourse: doc.data().thirdCourse,
              fourthCourse: doc.data().fourthCourse,
              fifthCourse: doc.data().fifthCourse,
              sixthCourse: doc.data().sixthCourse,
              seventhCourse: doc.data().seventhCourse,
              eigthCourse: doc.data().eigthCourse,
              howYouHear: doc.data().howYouHear,
              questions: doc.data().questions,
              wave4: doc.data().wave4,
              wave5: doc.data().wave5
            }
            updateStudents(students => [...students, student])
            setFilteredStudents(filteredStudents => [...filteredStudents, student])
        })
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  console.log(filteredStudents.length)
  }, [db, storage])

  /*useEffect(() => {
    console.log(students.length)
    if (filteredStudents.length === 0) {
      setFilteredStudents(students)
    } else {
      setFilteredStudents(students.filter(course => {
        for (let i = 0; i < filteredItems.length; i++) {
          if (!isNaN(filteredItems[i].text)) {
            if (!course.targetGrades.includes(filteredItems[i].text)) return false
          } else if (!course.category.includes(filteredItems[i].text)) {
            return false
          }
        }
        return true
      }))
    }
  }, [students])*/

  useEffect(() => {
    console.log(students.length)
    if (students.length >= 80) {
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
          <Typography.BodyText>Total Number Displayed: {filteredStudents.length}</Typography.BodyText>
          {loading && 
            <Table objs={filteredStudents}/>}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Students
