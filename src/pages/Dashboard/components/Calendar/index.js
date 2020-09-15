import React, { useState, useContext, useEffect, useReducer } from 'react'
import { Colors, Typography, Form } from '@/styles'
import { CalendarButton, CalendarContainer, ArrowButton, Arrow, ButtonDot } from './styles'
import { FirebaseContext } from '../../../firebaseContext'
import { Auth } from 'aws-amplify'

const Calendar = () => {
  const [selDate, setSelDate] = useState(new Date(Date.now()))
  const [date, setThisDate] = useState(addDays(selDate, -selDate.getDay()))
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  function addDays(inDate, days) {
    var copy = new Date(inDate)
    copy.setDate(inDate.getDate() + days)
    return copy
  }
  Auth.currentAuthenticatedUser().then(user => {
	console.log(user)
  });
  var range = [0, 1, 2, 3, 4, 5, 6];
  const { db, storage } = useContext(FirebaseContext)
  const [events, updateEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]
{
  // useEffect(() => {
  //   if (db) {
  //     db.collection('fl_content').get().then(function (querySnapshot) {
  //       querySnapshot.forEach(async function (doc) {
  //         if (doc.data().schema == 'coursePage') {
  //           db.doc(doc.data().picture[0].path).get().then(async function (picture) {
  //             if (picture.exists) {
  //               storage.child('flamelink/media/' + picture.data().file).getDownloadURL()
  //                 .then(function (url) {
  //                   const teachers = []
  //                   if (doc.data().teachers.teacher1Name) {
  //                     teachers.push({
  //                       name: doc.data().teachers.teacher1Name,
  //                       school: doc.data().teachers.teacher1School
  //                     })
  //                   }
  //                   if (doc.data().teachers.teacher2Name) {
  //                     teachers.push({
  //                       name: doc.data().teachers.teacher2Name,
  //                       school: doc.data().teachers.teacher2School
  //                     })
  //                   }
  //                   if (doc.data().teachers.teacher3Name) {
  //                     teachers.push({
  //                       name: doc.data().teachers.teacher3Name,
  //                       school: doc.data().teachers.teacher3School
  //                     })
  //                   }
  //                   if (doc.data().teachers.teacher4Name) {
  //                     teachers.push({
  //                       name: doc.data().teachers.teacher4Name,
  //                       school: doc.data().teachers.teacher4School
  //                     })
  //                   }
  //                   if (doc.data().teachers.teacher5Name) {
  //                     teachers.push({
  //                       name: doc.data().teachers.teacher5Name,
  //                       school: doc.data().teachers.teacher5School
  //                     })
  //                   }
  //                   if (doc.data().teachers.teacher6Name) {
  //                     teachers.push({
  //                       name: doc.data().teachers.teacher6Name,
  //                       school: doc.data().teachers.teacher6School
  //                     })
  //                   }
  //                   if (doc.data().teachers.teacher7Name) {
  //                     teachers.push({
  //                       name: doc.data().teachers.teacher7Name,
  //                       school: doc.data().teachers.teacher7School
  //                     })
  //                   }
  //                   const course = {
  //                     title: doc.data().courseTitle,
  //                     category: categories[doc.data().courseCategory],
  //                     image: url,
  //                     description: doc.data().courseDescription,
  //                     teachers,
  //                     wave: doc.data().wave
  //                   }
  //                   updateCourses(courses => [...courses, course])
  //                 })
  //             }
  //           })
  //         }
  //       })
  //       setLoading(true)
  //     })
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [db, storage])
}
  if (!loading) {
    return (<div>
      <CalendarContainer>
          <p>Loading...</p>
          </CalendarContainer>
    </div>)
  }
  return (
    <CalendarContainer>
      <header>
        <h2>Upcoming Events</h2>
        <div>
          <h4>{selDate.toDateString()}
          <ArrowButton onClick={() => setThisDate(addDays(date, -7))}>
            <Arrow style={{
              transform: "rotate(135deg)",
              webkitTransform: "rotate(135deg)"
            }} />
          </ArrowButton>
            <ArrowButton onClick={() => setThisDate(addDays(date, 7))}>
              <Arrow style={{
                transform: "rotate(-45deg)",
                webkitTransform: "rotate(-45deg)"
              }}/>
            </ArrowButton>
          </h4>
        </div>
      </header>
      <div>
        {range.map((i) => {
          return (
            <CalendarButton onClick={() => setSelDate(addDays(date, i))} active={addDays(date, i).toDateString() === selDate.toDateString()}>
              <p style={{lineHeight: "30%"}}>{addDays(date, i).toDateString().substring(0,3)}</p>
              <p style={{fontSize:"12px", lineHeight: "30%"}}>{months[addDays(date, i).getMonth()]}</p>
              <h3 style={{lineHeight: "30%"}}>{addDays(date, i).getDate()}</h3>
              {events.map((event, index) => {
                const { color, time, name, description, dates } = event
                if (dates.includes(addDays(date, i))) {
                  return (
                    <ButtonDot style={{
                      backgroundColor: colors[index % 4],
                      lineHeight: "30%",
                    }} />
                  )
                }
              })}
            </CalendarButton>
          )
        })
        }
      </div>
      <br />
      {events.map((event, index) => {
        const { color, time, name, type, dates } = event
        if (dates.includes(date)) {
          return (
            <div style={{width: "100%"}}>
              <div style={{width: "50%", height: "75px", float: "left", margin: "auto"}}>
                <shape style={{
                  borderRadius: "25px",
                  background: {color},
                  width: "100px",
                  margin: "auto",
                  opacity: "50%",
                  display: "inline-block",
                  lineHeight: "25px",
                  textAlign: "center"
                }}>
                  <div style={{color: "#FFFFFF", display: "inline-block"}}>
                    <h2>
                      {time}
                    </h2>
                  </div>
                </shape>
              </div>
              <div style={{margin: "auto", height: "75px"}}>
                <p style={{marginTop: "0px"}}><b>{name}</b></p>
                <p style={{marginBottom: "0px"}}>{type}</p>
              </div>
            </div>
            <hr style={{opacity: "33%"}}/>
          )
        }
      })}
    </CalendarContainer>
  )
}

export default Calendar
