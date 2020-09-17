/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Teacher from './teacher.js'
import WaveLogo from '../../Blog/wave-learning-logo.png'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { getTeacher } from '@/graphql/queries.js'
import Logo from '../logo.png'

const Teachers = ({ teachersProp }) => {
  const [loading, setLoading] = useState(true)
  const [teachers, setTeachers] = useState([])
  console.log(teachersProp)

  const getTeachers = async () => {
    const teachersList = [];
    await teachersProp.forEach(async (teacher) => {
      try {
        const temp = await API.graphql(graphqlOperation(getTeacher, { id: teacher }))
        teachersList.push(temp.data.getTeacher)
      } catch (error) {
        console.log('error on fetching data', error)
      }
      setTeachers(teachersList)
      setLoading(false)
    })
  }

  useEffect(() => {
    getTeachers()
  }, [])

  return (
    <div>
      {teachers.map((teacher, index) => (
        <div className="teacher-container" key={teacher.name}>
          <p>
            <img src={Logo} className="img-left"/>
            <b>Taught by: </b>{teacher.first_name} {teacher._last_name}<br/>
            <b>Teacher Bio: </b>{teacher.bio}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Teachers
