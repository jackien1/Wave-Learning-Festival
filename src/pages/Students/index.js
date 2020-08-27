import React, { useState, useContext, useEffect, forwardRef } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import './styles.css'
import { Colors, Typography, } from '../../styles'
import { FirebaseContext } from '../../firebaseContext'
import { Button, Header, Title, Heading } from './styles'


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listStudents } from '../../graphql/queries';
import { updateStudent, deleteStudent, createStudent } from '../../graphql/mutations';

import Filter from '../../components/Filter'
import CourseCard from '../../components/CourseCard'
import Table from '../../components/Table'
import MaterialTable from 'material-table';

import { AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, 
  FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn} from '@material-ui/icons';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

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
    title: 'Age', 
    field: 'age' 
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

  const saveData = (studentData) => {
    console.log(studentData)
    API.graphql(graphqlOperation(updateStudent, {
      input: {
        id: studentData.id,
        city: studentData.city,
        state: studentData.state,
        country: studentData.country,
        school: studentData.school,
        first_name: studentData.first_name,
        last_name: studentData.last_name,
        age: studentData.age,
        howYouHear: studentData.howYouHear,
        numCourses: studentData.numCourses,
        parentName: studentData.parentName,
        parentEmail: studentData.parentEmail,
        registeredEvents: studentData.registeredEvents,
        registeredSeminars: studentData.registeredSeminars,
      }
      }))
  }

  const delData = (studentData) => {
    console.log(studentData)
    API.graphql(graphqlOperation(deleteStudent, {
      input: {id: studentData.id}
      }))
  }

  const addData = (studentData) => {
    console.log(studentData)
    API.graphql(graphqlOperation(createStudent, {
      input: {
        id: studentData.id,
        city: studentData.city,
        state: studentData.state,
        country: studentData.country,
        school: studentData.school,
        first_name: studentData.first_name,
        last_name: studentData.last_name,
        age: studentData.age,
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
          <Typography.BodyText>Total Number Displayed: {students.length}</Typography.BodyText>
          {loading && 
            <MaterialTable
              title="Student Information"
              icons={tableIcons}
              columns={columns}
              data={students}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      console.log([...students, newData]);
                      addData(newData);
                      updateStudents([...students, newData]);
                      resolve();
                    }, 2000);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataUpdate = [...students];
                      const index = students.indexOf(oldData);
                      dataUpdate[index] = newData;
                      console.log("dataUpdate: ", dataUpdate);
                      saveData(dataUpdate[index]);
                      updateStudents(dataUpdate);
                      resolve();
                    }, 2000);
                  }),

                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      const dataUpdate = [...students];
                      delData(dataUpdate[students.indexOf(oldData)]);
                      dataUpdate.splice(students.indexOf(oldData), 1);
                      updateStudents(dataUpdate);
                    }, 2000);
                  }),
              }}
            />}
        </ContainerInner>
      </Container>
    </div>
  )
}

export default Students
