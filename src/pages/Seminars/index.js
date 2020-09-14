import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listSeminars } from '../../graphql/queries';
import { updateSeminar, deleteSeminar, createSeminar } from '../../graphql/mutations';

import Table from '../../components/Table'

const Teachers = () => {
  const tideDates = ["1970-08-29T06:19:27.193Z", "2020-09-10T10:00:00.000Z", "2050-01-01T00:00:00.000Z"];

  const [loading, setLoading] = useState(false)
  const [registrations, updateRegistrations] = useState([])

  const fetchRegistrations = async () => {
    try {
      const teacherData = await API.graphql(graphqlOperation(listSeminars));
      const teacherList = teacherData.data.listSeminars.items;
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
    title: 'Course Title',
    field: 'courseTitle'
    },{
    title: 'Class Dates',
    field: 'classDates'
    },{
    title: 'Class Days',
    field: 'classDays'
    },{
    title: 'Class Times',
    field: 'classTimes'
    },{
    title: 'Course Description',
    field: 'courseDescription'
    },{
    title: 'maxClassSize',
    field: 'maxClassSize'
    },{
    title: 'prereqs',
    field: 'prereqs'
    },{
    title: 'targetAudience',
    field: 'targetAudience'
    },{
    title: 'edLink',
    field: 'edLink'
    },{
    title: 'zoomLink',
    field: 'zoomLink'
    },{
    title: 'Course Category',
    field: 'courseCategory'
    },{
    title: 'syllabus',
    field: 'syllabus'
    },{
    title: 'picture',
    field: 'picture'
    },{
    title: 'teachers',
    field: 'teachers'
    }]

  const saveData = (teacherData, fullData) => {
    console.log(teacherData)
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(updateSeminar, {
      input: {id: teacherData.id,
        classTimes: teacherData.classTimes,
        classDays: teacherData.classDays,
        classDates: teacherData.classDates,
        courseCategory: teacherData.courseCategory,
        courseDescription: teacherData.courseDescription,
        courseTitle: teacherData.courseTitle,
        edLink: teacherData.edLink,
        maxClassSize: teacherData.maxClassSize,
        picture: teacherData.picture,
        prereqs: teacherData.prereqs,
        syllabus: teacherData.syllabus,
        targetAudience: teacherData.targetAudience,
        teachers: teacherData.teachers,
        zoomLink: teacherData.zoomLink}
      }))
  }

  const delData = (data, fullData) => {
    updateRegistrations(fullData);
    API.graphql(graphqlOperation(deleteSeminar, {
      input: {id: data[0].id}
      }))
  }

  const addData = (teacherData) => {
    updateRegistrations([...registrations, teacherData]);
    API.graphql(graphqlOperation(createSeminar, {
      input: {id: teacherData.id,
        classTimes: teacherData.classTimes,
        classDays: teacherData.classDays,
        classDates: teacherData.classDates,
        courseCategory: teacherData.courseCategory,
        courseDescription: teacherData.courseDescription,
        courseTitle: teacherData.courseTitle,
        edLink: teacherData.edLink,
        maxClassSize: teacherData.maxClassSize,
        picture: teacherData.picture,
        prereqs: teacherData.prereqs,
        syllabus: teacherData.syllabus,
        targetAudience: teacherData.targetAudience,
        teachers: teacherData.teachers,
        zoomLink: teacherData.zoomLink}
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

          <Typography.Header>Seminars</Typography.Header>
          {loading &&
            <Table title="" data={registrations} columns={columns}
            saveData={saveData} addData={addData} delData={delData}/>}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Teachers
