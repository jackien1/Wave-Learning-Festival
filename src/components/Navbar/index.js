import React, { useState, useContext, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  NavbarContainer,
  NavbarInner,
  BrandText,
  Links,
  Button,
  NavItem,
  Hamburger,
  Bar,
  SideBar,
  Brand,
  NavbarDropdown,
  DropdownItem
} from './styles'
import { WLF_PURPLE } from '@/styles/Colors'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FaUserAlt, FaChalkboardTeacher, FaUserFriends, FaMicrophone, FaMicrophoneAlt, FaMicrophoneAltSlash } from 'react-icons/fa'
import Logo from './logo.svg'
import LogoText from './logoText.png'
import LogoTextFull from './logo with type (1).svg'
import { FirebaseContext } from '@/firebaseContext'

const Navbar = () => {
  const [applyShow, setApplyShow] = useState(false)
  const [speakersShow, setSpeakersShow] = useState(false)
  const [coursesShow, setCoursesShow] = useState(false)
  const [aboutShow, setAboutShow] = useState(false)
  const [faqShow, setFaqShow] = useState(false)
  const [slide, toggleSlide] = useState(false)
  const [accountStatus, setAccountStatus] = useState(null)
  const [calledOnce, setCalledOnce] = useState(false)
  const { auth } = useContext(FirebaseContext)

  const logOut = () => {
    auth.signOut().then(function () {

    })
  }

  useEffect(() => {
    if (auth) {
      auth.onAuthStateChanged(function (user) {
        if (user) {
          setAccountStatus(<Link to="/dashboard"><Button>Dashboard</Button></Link>)
        } else {
          setAccountStatus(<Link to="/sign-in"><Button>Login</Button></Link>)
        }
      })
    }
  }, [auth])

  return (
    <NavbarContainer>
      <NavbarInner>
        <BrandText onClick={() => window.location.href = '/'}src={LogoTextFull} />
        <Brand onClick={() => window.location.href = '/'} src={Logo} />
        <Links>
          {/*
          <NavItem>
            <Link to="/courses">Courses</Link>
          </NavItem>
          <NavItem>
            <Link to="/speakers">Speakers</Link>
          </NavItem>
          */}
          <NavItem>
            <Link to="/seminars">Seminars</Link>
          </NavItem>
          <NavItem>
            <Link to="/instructors">Instructors</Link>
          </NavItem>
          <NavItem>
            <Link to="/instructor-apps">Instructor Apps</Link>
          </NavItem>
          <NavItem>
            <Link to="/tutors">Tutor Apps</Link>
          </NavItem>
          <NavItem>
            <Link to="/students">Students</Link>
          </NavItem>
          {/* <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem> */}
          {/* <NavItem style={{ border: 'none' }}>
            {accountStatus}
          </NavItem> */}
        </Links>
        <Hamburger slide={slide} onClick={() => toggleSlide(!slide)}>
          <div style={{ backgroundColor: 'rgb(240,240,240)', width: 40, height: 40, borderRadius: 20, marginLeft: -5, marginTop: -4, position: 'absolute', zIndex: 1 }}></div>
          <Bar num={0} rotate1={slide && true} slide={slide} style={{ position: 'relative', zIndex: 2 }}/>
          <Bar num={2} rotate2={slide && true} slide={slide} style={{ position: 'relative', zIndex: 3 }}/>
          <Bar num={1} rotate3={slide && true} slide={slide} style={{ position: 'relative', zIndex: 2 }}/>
        </Hamburger>

        <SideBar show={slide}>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          {/*
          <NavItem>
            <Link to="/courses">Courses</Link>
          </NavItem>
          <NavItem>
            <Link to="/speakers">Speakers</Link>
          </NavItem>
          */} 
          <NavItem>
            <Link to="/instructors">Instructors</Link>
          </NavItem>
          <NavItem>
            <Link to="/seminars">Seminars</Link>
          </NavItem>
          <NavItem>
            <Link to="/instructor-apps">Instructor Apps</Link>
          </NavItem>
          <NavItem>
            <Link to="/tutors">Tutor Apps</Link>
          </NavItem>
          <NavItem>
            <Link to="/students">Students</Link>
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          {/*}
          <NavItem>
            <Link to="/sign-in">Dashboard</Link>
          </NavItem>
          */}
        </SideBar>
      </NavbarInner>
    </NavbarContainer>
  )
}

export default Navbar
