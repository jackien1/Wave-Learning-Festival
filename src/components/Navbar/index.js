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
  const [tutorShow, setTutorShow] = useState(false)
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
          <NavItem onMouseEnter={() => setAboutShow(true)}
            onMouseLeave={() => setAboutShow(false)}>
            <Link>About Us</Link>
            {aboutShow && (<NavbarDropdown>
              <Link to="/mission">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaChalkboardTeacher /></div>
                  </IconContext.Provider>
                    Mission and Values
                </DropdownItem>
              </Link>
              <Link to="/team">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaUserFriends /></div>
                  </IconContext.Provider>
                    Meet the Team
                </DropdownItem>
              </Link>
              <Link to="/partners">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaUserFriends /></div>
                  </IconContext.Provider>
                    Community Partners
                </DropdownItem>
              </Link>
              {/*
              <Link to="/join">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaUserFriends /></div>
                  </IconContext.Provider>
                    Join the Team
                </DropdownItem>
              </Link>
              */}
            </NavbarDropdown>
            )}
          </NavItem>
          <NavItem onMouseEnter={() => setCoursesShow(true)}
            onMouseLeave={() => setCoursesShow(false)}>
            <Link>Seminars</Link>
            {coursesShow && (<NavbarDropdown>
              {/*
              <Link to="/courses">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaChalkboardTeacher /></div>
                  </IconContext.Provider>
                    New
                </DropdownItem>
              </Link>
              */}
              <Link to="/seminars">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaUserFriends /></div>
                  </IconContext.Provider>
                    Tide 1
                </DropdownItem>
              </Link>
              <Link to="/courses-archive">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaUserFriends /></div>
                  </IconContext.Provider>
                    Past Waves
                </DropdownItem>
              </Link>
              <Link to="/instructors">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaChalkboardTeacher /></div>
                  </IconContext.Provider>
                    Apply to Teach
                </DropdownItem>
              </Link>
            </NavbarDropdown>
            )}
          </NavItem>
          <NavItem onMouseEnter={() => setTutorShow(true)}
            onMouseLeave={() => setTutorShow(false)}>
            <Link>Tutoring</Link>
            {tutorShow && (<NavbarDropdown>
              <Link to="/tutoring">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaUserFriends /></div>
                  </IconContext.Provider>
                    Tutoring
                </DropdownItem>
              </Link>
              <Link to="/tutors">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaChalkboardTeacher /></div>
                  </IconContext.Provider>
                    Apply to Tutor
                </DropdownItem>
              </Link>
            </NavbarDropdown>
            )}
          </NavItem>
          <NavItem onMouseEnter={() => setSpeakersShow(true)}
            onMouseLeave={() => setSpeakersShow(false)}>
            <Link>Events</Link>
            {speakersShow && (<NavbarDropdown>
	            <Link to="/events">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaMicrophoneAlt /></div>
                  </IconContext.Provider>
                    Upcoming
                </DropdownItem>
              </Link>

              <Link to="/past-speakers">
                <DropdownItem>
                  <IconContext.Provider
                    value={{
                      color: WLF_PURPLE,
                      style: {
                        verticalAlign: 'middle',
                        marginRight: '10px'
                      }
                    }}
                  >
                    <div><FaMicrophoneAlt/></div>
                  </IconContext.Provider>
                    Past
                </DropdownItem>
              </Link>
            </NavbarDropdown>
            )}
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem
            onMouseEnter={() => setFaqShow(true)}
            onMouseLeave={() => setFaqShow(false)}
          >
            <Link>FAQ</Link>
            {faqShow && (
              <>
                <NavbarDropdown>
                  <Link to="/faq-students">
                    <DropdownItem>
                      <IconContext.Provider
                        value={{
                          color: WLF_PURPLE,
                          style: {
                            verticalAlign: 'middle',
                            marginRight: '10px'
                          }
                        }}
                      >
                        <div>
                          <FaUserAlt />
                        </div>
                      </IconContext.Provider>
                      Students
                    </DropdownItem>
                  </Link>
                  <Link to="/faq-parents">
                    <DropdownItem>
                      <IconContext.Provider
                        value={{
                          color: WLF_PURPLE,
                          style: {
                            verticalAlign: 'middle',
                            marginRight: '10px'
                          }
                        }}
                      >
                        <div>
                          <FaUserFriends />
                        </div>
                      </IconContext.Provider>
                      Parents
                    </DropdownItem>
                  </Link>
                  <Link to="/faq-instructors">
                    <DropdownItem>
                      <IconContext.Provider
                        value={{
                          color: WLF_PURPLE,
                          style: {
                            verticalAlign: 'middle',
                            marginRight: '10px'
                          }
                        }}
                      >
                        <div>
                          <FaChalkboardTeacher />
                        </div>
                      </IconContext.Provider>
                      Instructors
                    </DropdownItem>
                  </Link>
                  <Link to="/faq-tutors">
                    <DropdownItem>
                      <IconContext.Provider
                        value={{
                          color: WLF_PURPLE,
                          style: {
                            verticalAlign: 'middle',
                            marginRight: '10px'
                          }
                        }}
                      >
                        <div>
                          <FaChalkboardTeacher />
                        </div>
                      </IconContext.Provider>
                      Tutors
                    </DropdownItem>
                  </Link>
                </NavbarDropdown>
              </>
            )}
          </NavItem>
          <NavItem>
            <Link to="/donate">Donate</Link>
          </NavItem>
          {/*
                    <Link to='/login'>
                        <Button>
                            Login
                        </Button>
                    </Link>
                    */}
          <NavItem style={{ border: 'none' }}>
            {accountStatus}
          </NavItem>
          {/* <NavItem>
            <Link><Button onClick = {() => logOut()}>Signout</Button></Link>
          </NavItem> */}
        </Links>
        <Hamburger slide={slide} onClick={() => toggleSlide(!slide)}>
          <div style={{ backgroundColor: 'rgb(240,240,240)', width: 40, height: 40, borderRadius: 20, marginLeft: -5, marginTop: -4, position: 'absolute', zIndex: 1 }}></div>
          <Bar num={0} rotate1={slide && true} slide={slide} style={{ position: 'relative', zIndex: 2 }}/>
          <Bar num={2} rotate2={slide && true} slide={slide} style={{ position: 'relative', zIndex: 3 }}/>
          <Bar num={1} rotate3={slide && true} slide={slide} style={{ position: 'relative', zIndex: 2 }}/>
        </Hamburger>

        <SideBar show={slide}>
          {/* <Brand
            style={{ marginLeft: "15px", marginBottom: "20px", width: "9em" }}
            src={LogoText}
          /> */}
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/mission">Mission and Values</Link>
          </NavItem>
          <NavItem>
            <Link to="/team">Team</Link>
          </NavItem>
          <NavItem>
            <Link to="/partners">Community Partners</Link>
          </NavItem>
          {/*
          <NavItem>
            <Link to="/join">Join the Team</Link>
          </NavItem>
          */}
          <NavItem>
            <Link to="/seminars-upcoming">Seminars</Link>
          </NavItem>
          <NavItem>
            <Link to="/tutoring">Tutoring</Link>
          </NavItem>
          <NavItem>
            <Link to="/events">Upcoming Events</Link>
          </NavItem>
          <NavItem>
            <Link to="/past-speakers">Past Speakers</Link>
          </NavItem>
          <NavItem>
            <Link to="/blog">Blog</Link>
          </NavItem>
          <NavItem>
            <Link to="/faq-students">Students FAQ</Link>
          </NavItem>
          <NavItem>
            <Link to="/faq-parents">Parents FAQ</Link>
          </NavItem>
          <NavItem>
            <Link to="/donate">Donate</Link>
          </NavItem>
          <NavItem>
            <Link to="/sign-in">Dashboard</Link>
          </NavItem>
        </SideBar>
      </NavbarInner>
    </NavbarContainer>
  )
}

export default Navbar
