import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import PopUpHTML from '../../../components/PopUp/PopUpHTML.js'
import { Container, ContainerInner } from '../../../globalStyles.js'
import { Colors, Typography } from '../../../styles'
import { Button } from '../styles'
import { Icon, Property } from './styles'
import { FaBookOpen } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getSeminar } from '@/graphql/queries.js'

import TeachersComponent from './teachers-component.js'

const CoursePage = ({ match }) => {
  const slug = match.params.slug
  const [loading, setLoading] = useState(true)
  const [showSyllabus, setShowSyllabus] = useState(false)

  // Course Objects
  const [syllabus, setSyllabus] = useState('')
  const [teachersObj, setTeachersObj] = useState('')
  const [seminar, setSeminar] = useState({})

  const getCourse = async () => {
    try {
      const course = await API.graphql(graphqlOperation(getSeminar, { id: slug }))
      setSeminar(course.data.getSeminar)
    } catch (error) {
      console.log('error on fetching data', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getCourse()
  }, [])

  if (loading) {
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

  const toggleSyllabus = () => {
    console.log('SYLLABUS CLICKED')
    setShowSyllabus(!showSyllabus)
  }

  const noSeconds = (time) => {
    var timeSplit = time.toLocaleTimeString('en-US').split(':')
    return timeSplit[0] + ':' + timeSplit[1] + timeSplit[2].substr(2)
  }

  const convertHoursToLocalTime = (timeString) => {
    // calculate offset between local time and EDT
    const date = new Date()
    const invdate = new Date(date.toLocaleString('en-US', {
      timeZone: 'America/New_York' // test with Pacific/Honolulu
    }))
    const timezoneOffset = date.getTime() - invdate.getTime()

    // use timezone offset to calculate hour change
    const [hourString, remaining] = timeString.split(':')
    const minutes = parseInt(remaining.substr(0, 2))

    const dateTimeInLocal = new Date()
    dateTimeInLocal.setHours(0, 0, 0, 0)

    let hours = parseInt(hourString)
    if (remaining.includes('pm')) {
      hours %= 12
      hours += 12
    }
    const totalMillis = ((hours * 60) + minutes) * 60 * 1000

    return new Date(dateTimeInLocal.getTime() + totalMillis + timezoneOffset)
  }

  const timezoneCode = "Eastern Time"; // new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]
  console.log(seminar)
  return (
    <div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>{seminar.courseTitle}</Typography.Header>
          {seminar.courseDescription}
          {seminar.prereqs &&
                  <><br/><b>Prerequisites: </b>{seminar.prereqs}</>}
          {syllabus &&
                  <Property>
                    <br/><b>Syllabus: </b>
                    <Icon onClick={toggleSyllabus}>
                      <IconContext.Provider
                        value={{
                          color: 'black',
                          size: '1em',
                          style: { verticalAlign: 'middle' }
                        }}>
                        <div> <FaBookOpen /> </div>
                      </IconContext.Provider>
                    </Icon>
                  </Property>}
          {showSyllabus &&
                  <PopUpHTML title={'Syllabus'} content={syllabus} onClose={toggleSyllabus}/>}
          {seminar.maxClassSize &&
                <><br/><b>Max Class Size: </b>{seminar.maxClassSize}</>}
          {seminar.targetAudience &&
                  <><br/><b>Target Audience: </b>{seminar.targetAudience.toString()} grades</>}
          <p style={{ clear: 'right' }}>
            {seminar.classDates && seminar.classDays && seminar.classTime &&
                  <>
                    <b>Class Dates: </b>{seminar.classDates}
                    <b><br/>Class Days: </b>{seminar.classDays}
                    <b><br/>Time ({seminar.classTime.includes('EDT') ? 'EDT' : timezoneCode}): </b>{seminar.classTime}
                  </>}
          </p>

          {seminar.teachers && <TeachersComponent teachersProp={seminar.teachers}/>}

          <a target="_blank" href="/seminar-sign-up" className="sign-up-link">
            <Button>
              <p>Register Now!</p>
            </Button>
          </a>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default CoursePage
