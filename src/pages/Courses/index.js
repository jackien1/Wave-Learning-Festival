import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography } from '../../styles'
import { FirebaseContext } from '../../firebaseContext'
import { Button, Header, Title, Heading } from './styles'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { listSeminars, getTeacher } from '@/graphql/queries.js'
import 'firebase/firestore'

import WaveLogo from '../Blog/wave-learning-logo.png'
import ProgressBar from './ProgressBars/wlf_progressbar-04.png'

import Filter from '../../components/Filter'
import CourseCard from '../../components/CourseCard'

const Courses = () => {
  const { db, storage } = useContext(FirebaseContext)
  const [loading, setLoading] = useState(true)
  const [courses, updateCourses] = useState([])
  const [filteredCourses, setFilteredCourses] = useState([])
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
    if (e.length === 0 && filteredItems.length === 0) {
      setFilteredCourses(courses)
    } else if (e.length === 0 && (filteredItems.length !== 0)) {
      setFilteredCourses(courses.filter(course => {
        for (let i = 0; i < filteredItems.length; i++) {
          if (!isNaN(filteredItems[i].text)) {
            if (!course.targetAudience.includes(filteredItems[i].text)) return false
          } else if (!course.courseCategory.includes(filteredItems[i].text)) {
            return false
          }
        }
        return true
      }))
    } else if (filteredItems.length === 0) {
      setFilteredCourses(courses.filter(course => {
        return course.courseTitle.toLowerCase().includes(e.toLowerCase())
      }))
    } else {
      setFilteredCourses(courses.filter(course => {
        for (let i = 0; i < filteredItems.length; i++) {
          if (!isNaN(filteredItems[i].text)) {
            if (!course.targetAudience.includes(filteredItems[i].text)) return false
          } else if (!course.courseCategory.includes(filteredItems[i].text)) {
            return false
          }
        }
        if (course.courseTitle.toLowerCase().includes(e.toLowerCase())) {
          return true
        }
        return false
      }))
    }
  }

  const getTeacherData = async (username) => {
    try {
      const teacherData = await API.graphql(graphqlOperation(getTeacher, { id: username }))
      return teacherData.data.getTeacher
    } catch (error) {
      console.log('error on fetching data', error)
    }
  }

  const getSeminars = async () => {
    try {
      const seminars = await API.graphql(graphqlOperation(listSeminars))
      updateCourses(seminars.data.listSeminars.items)
      setFilteredCourses(seminars.data.listSeminars.items)
    } catch (e) {
      console.log('error on fetching data', e)
    }
  }

  /* Set Current Wave */
  const WAVE = '5'

  useEffect(() => {
    getSeminars()
  }, [])

  useEffect(() => {
    console.log(courses.length)
    if (filteredItems.length === 0) {
      setFilteredCourses(courses)
    } else {
      setFilteredCourses(courses.filter(course => {
        for (let i = 0; i < filteredItems.length; i++) {
          if (!isNaN(filteredItems[i].text)) {
            if (!course.targetAudience.includes(filteredItems[i].text)) return false
          } else if (!course.courseCategory.includes(filteredItems[i].text)) {
            return false
          }
        }
        return true
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredItems])

  useEffect(() => {
    if (courses.length >= 80) {
      setLoading(true)
    }
  }, [courses])

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
        <Footer/>
      </>
    )
  }
  return (
    <div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <div className="progressbar">
            <img src= {ProgressBar} alt = "centered image" />
          </div>

          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            We are excited to offer <strong>{courses.length} courses</strong> across a variety of subjects for Wave Five running from <strong>August 17th to August 30th</strong>. Our
            volunteer educators have worked hard to prepare engaging and
            thoughtful curricula and can't wait to share their passions with
            you. Feel free to send any
            questions to{' '}
            <a href="mailto:wavelf.logistics@gmail.com">
              wavelf.logistics@gmail.com
            </a><p></p>Click each course for more info –– note the target audience range, course times, and class maxes.<br /><br /><br />
          </Typography.BodyText>
          <a href="/course-sign-up" className="sign-up-link">
            <Button>
              <p>Register Now!</p>
            </Button>
          </a>
          <div className = "row">
            <Filter
              addFilter={addFilter}
              removeFilter={removeFilter}
              searchItems={onSearch}
              filteredItems={filteredItems}
            />
          </div>
          <Header>
            <Title><p>Course Title</p></Title>
            <Heading><p>Dates</p></Heading>
          </Header>
          {filteredCourses.map((course, index) => {
            const { courseTitle, teachers, image, courseDescription, classDates, time, targetAudience, classDays, id } = course
            const teacherData = []
            teachers.forEach(async teacher => {
              teacherData.push(await getTeacherData(teacher))
            })
            return (
              <CourseCard
                key = {index}
                title = {courseTitle}
                teachers = {teacherData}
                image = {image}
                color = {colors[index % 4]}
                description = {courseDescription}
                classDates = {classDates}
                time = {time}
                targetAudience = {targetAudience}
                classDays = {classDays}
                courseId = {id}
              />)
          }
          )}
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>Course Schedule</Typography.Header>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8tk6cntof4tuog58lv572ikcp4%40group.calendar.google.com&ctz=America%2FBoston"
            style={{ border: '0px', width: '100%', height: '600px', frameborder: '0px', scrolling: 'no' }}>
          </iframe>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default Courses
