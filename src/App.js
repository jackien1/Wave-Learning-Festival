import React, { useEffect } from 'react'
import logo from './logo.svg'
import firebase from 'firebase'
import './App.css'
import About from './pages/About'
import Blog from './pages/Blog'
import Students from './pages/Students'
import Speakers from './pages/Speakers'
import TeacherApplications from './pages/TeacherApplications'
import Seminars from './pages/Seminars'
import Instructors from './pages/Instructors'
import Tutors from './pages/Tutors'
import EventRegistrations from './pages/Events'

import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import { FirebaseProvider } from './firebaseContext'
function App () {
  return (
    <FirebaseProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/students">
              <Students />
            </Route>
            <Route path="/instructor-apps">
              <TeacherApplications />
            </Route>
            <Route path="/seminars">
              <Seminars />
            </Route>
            <Route path="/event-registrations">
              <EventRegistrations />
            </Route>
            <Route path="/instructors">
              <Instructors />
            </Route>
            <Route path="/tutors">
              <Tutors />
            </Route>
            <Route path="/speakers">
              <Speakers />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </FirebaseProvider>
  )
}

export default App
