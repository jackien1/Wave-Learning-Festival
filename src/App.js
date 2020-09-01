import React, { useEffect } from 'react'
import logo from './logo.svg'
import firebase from 'firebase'
import './App.css'
import About from './pages/About'
import Courses from './pages/Courses'
import CoursePage from './pages/Courses/CoursePages'
import Blog from './pages/Blog'
import Students from './pages/Students'
import Speakers from './pages/Speakers'
import Teachers from './pages/Teachers'
import Tutors from './pages/Tutors'


import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import { FirebaseProvider } from './firebaseContext'
function App () {
  return (
    <FirebaseProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/courses">
              <Courses />
            </Route>
           
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/students">
              <Students />
            </Route>
            <Route path="/instructors">
              <Teachers />
            </Route>
            <Route path="/tutors">
              <Tutors />
            </Route>
            <Route path="/speakers">
              <Speakers />
            </Route>
            <Route path="/:slug" component={CoursePage} />
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
