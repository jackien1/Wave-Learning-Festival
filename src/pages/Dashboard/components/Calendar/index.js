import React, { useState, useContext, useEffect, useReducer } from 'react'
import { Colors, Typography, Form } from '@/styles'
import { CalendarButton, CalendarContainer, ArrowButton, Arrow, ButtonDot } from './styles'

const Calendar = () => {
  const [selDate, setSelDate] = useState(new Date(Date.now()))
  const [date, setThisDate] = useState(addDays(selDate, -selDate.getDay()))
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  function addDays(inDate, days) {
    var copy = new Date(inDate)
    copy.setDate(inDate.getDate() + days)
    return copy
  }
  return (
    <CalendarContainer>
      <header>
        <h2>Upcoming Events</h2>
        <div>
          <h4>{selDate.toDateString()}
          <ArrowButton>
            <Arrow style={{
              transform: "rotate(135deg)",
              webkitTransform: "rotate(135deg)"
            }}
            onClick={() => setThisDate(addDays(date, -7))} />
          </ArrowButton>
            <ArrowButton>
              <Arrow style={{
                transform: "rotate(-45deg)",
                webkitTransform: "rotate(-45deg)"
              }}
              onClick={() => setThisDate(addDays(date, 7))}/>
            </ArrowButton>
          </h4>
        </div>
      </header>
      <div>
        <CalendarButton onClick={() => setSelDate(date)} active={selDate.toDateString() === date.toDateString()}>
          <p style={{lineHeight: "30%"}}>{date.toDateString().substring(0,3)}</p>
          <p style={{fontSize:"12px", lineHeight: "30%"}}>{months[date.getMonth()]}</p>
          <h3 style={{lineHeight: "30%"}}>{date.getDate()}</h3>
          <ButtonDot style={{
            backgroundColor: Colors.WLF_ORANGE,
            lineHeight: "30%"
          }} />
          <ButtonDot style={{
            backgroundColor: Colors.WLF_YELLOW,
            lineHeight: "30%"
          }} />
        </CalendarButton>
        <CalendarButton onClick={() => setSelDate(addDays(date, 1))} active={addDays(date, 1).toDateString() === selDate.toDateString()}>
          <p style={{lineHeight: "30%"}}>{addDays(date, 1).toDateString().substring(0,3)}</p>
          <p style={{fontSize:"12px", lineHeight: "30%"}}>{months[addDays(date, 1).getMonth()]}</p>
          <h3 style={{lineHeight: "30%"}}>{addDays(date, 1).getDate()}</h3>
          <ButtonDot style={{
            backgroundColor: Colors.WLF_ORANGE,
            lineHeight: "30%"
          }} />
          <ButtonDot style={{
            backgroundColor: Colors.WLF_YELLOW,
            lineHeight: "30%"
          }} />
          <ButtonDot style={{
            backgroundColor: Colors.WLF_TURQOUISE
          }} />
        </CalendarButton>
        <CalendarButton onClick={() => setSelDate(addDays(date, 2))} active={addDays(date, 2).toDateString() === selDate.toDateString()}>
          <p style={{lineHeight: "30%"}}>{addDays(date, 2).toDateString().substring(0,3)}</p>
          <p style={{fontSize:"12px", lineHeight: "30%"}}>{months[addDays(date, 2).getMonth()]}</p>
          <h3 style={{lineHeight: "30%"}}>{addDays(date, 2).getDate()}</h3>
          <ButtonDot style={{
            backgroundColor: Colors.WLF_ORANGE,
            lineHeight: "30%"
          }} />
          <ButtonDot style={{
            backgroundColor: Colors.WLF_YELLOW,
            lineHeight: "30%"
          }} />
        </CalendarButton>
        <CalendarButton onClick={() => setSelDate(addDays(date, 3))} active={addDays(date, 3).toDateString() === selDate.toDateString()}>
          <p style={{lineHeight: "30%"}}>{addDays(date, 3).toDateString().substring(0,3)}</p>
          <p style={{fontSize:"12px", lineHeight: "30%"}}>{months[addDays(date, 3).getMonth()]}</p>
          <h3 style={{lineHeight: "30%"}}>{addDays(date, 3).getDate()}</h3>
          <ButtonDot style={{
            backgroundColor: Colors.WLF_ORANGE,
            lineHeight: "30%"
          }} />
          <ButtonDot style={{
            backgroundColor: Colors.WLF_YELLOW,
            lineHeight: "30%"
          }} />
        </CalendarButton>
        <CalendarButton onClick={() => setSelDate(addDays(date, 4))} active={addDays(date, 4).toDateString() === selDate.toDateString()}>
          <p style={{lineHeight: "30%"}}>{addDays(date, 4).toDateString().substring(0,3)}</p>
          <p style={{fontSize:"12px", lineHeight: "30%"}}>{months[addDays(date, 4).getMonth()]}</p>
          <h3 style={{lineHeight: "30%"}}>{addDays(date, 4).getDate()}</h3>
          <ButtonDot style={{
            backgroundColor: Colors.WLF_ORANGE,
            lineHeight: "30%"
          }} />
          <ButtonDot style={{
            backgroundColor: Colors.WLF_YELLOW,
            lineHeight: "30%"
          }} />
        </CalendarButton>
        <CalendarButton onClick={() => setSelDate(addDays(date, 5))} active={addDays(date, 5).toDateString() === selDate.toDateString()}>
          <p style={{lineHeight: "30%"}}>{addDays(date, 5).toDateString().substring(0,3)}</p>
          <p style={{fontSize:"12px", lineHeight: "30%"}}>{months[addDays(date, 5).getMonth()]}</p>
          <h3 style={{lineHeight: "30%"}}>{addDays(date, 5).getDate()}</h3>
          <ButtonDot style={{
            backgroundColor: Colors.WLF_ORANGE,
            lineHeight: "30%"
          }} />
          <ButtonDot style={{
            backgroundColor: Colors.WLF_YELLOW,
            lineHeight: "30%"
          }} />
        </CalendarButton>
        <CalendarButton onClick={() => setSelDate(addDays(date, 6))} active={addDays(date, 6).toDateString() === selDate.toDateString()}>
          <p style={{lineHeight: "30%"}}>{addDays(date, 6).toDateString().substring(0,3)}</p>
          <p style={{fontSize:"12px", lineHeight: "30%"}}>{months[addDays(date, 6).getMonth()]}</p>
          <h3 style={{lineHeight: "30%"}}>{addDays(date, 6).getDate()}</h3>
          <ButtonDot style={{
            backgroundColor: Colors.WLF_ORANGE,
            lineHeight: "30%"
          }} />
          <ButtonDot style={{
            backgroundColor: Colors.WLF_YELLOW,
            lineHeight: "30%"
          }} />
        </CalendarButton>
      </div>
      <br />
      <div style={{width: "100%"}}>
        <div style={{width: "50%", height: "75px", float: "left", margin: "auto"}}>
          <shape style={{
            borderRadius: "25px",
            background: Colors.WLF_ORANGE,
            width: "100px",
            margin: "auto",
            opacity: "50%",
            display: "inline-block",
            lineHeight: "25px",
            textAlign: "center"
          }}>
            <div style={{color: "#FFFFFF", display: "inline-block"}}>
              <h2>
                5:00
              </h2>
            </div>
          </shape>
        </div>
        <div style={{margin: "auto", height: "75px"}}>
          <p style={{marginTop: "0px"}}><b>Beep Bop</b></p>
          <p style={{marginBottom: "0px"}}>Seminar</p>
        </div>
      </div>
      <hr style={{opacity: "33%"}}/>
      <div style={{width: "100%"}}>
        <div style={{width: "50%", height: "75px", float: "left", margin: "auto"}}>
          <shape style={{
            borderRadius: "25px",
            background: Colors.WLF_YELLOW,
            width: "100px",
            margin: "auto",
            opacity: "50%",
            display: "inline-block",
            lineHeight: "25px",
            textAlign: "center"
          }}>
            <div style={{color: "#FFFFFF", display: "inline-block"}}>
              <h2>
                6:00
              </h2>
            </div>
          </shape>
        </div>
        <div style={{marginLeft: "50%", height: "75px"}}>
          <p style={{marginTop: "0px"}}><b> Intro to Due Process </b></p>
          <p style={{marginBottom: "0px"}}>Class</p>
        </div>
      </div>
      <hr style={{opacity: "33%"}}/>
      <div style={{width: "100%"}}>
        <div style={{width: "50%", height: "75px", float: "left", margin: "auto"}}>
          <shape style={{
            borderRadius: "25px",
            background: Colors.WLF_TURQOUISE,
            width: "100px",
            margin: "auto",
            opacity: "50%",
            display: "inline-block",
            lineHeight: "25px",
            textAlign: "center"
          }}>
            <div style={{color: "#FFFFFF", display: "inline-block"}}>
              <h2>
                7:00
              </h2>
            </div>
          </shape>
        </div>
        <div style={{marginLeft: "50%", height: "75px"}}>
          <p style={{marginTop: "0px"}}><b> To Hand and Back </b></p>
          <p style={{marginBottom: "0px"}}>Class</p>
        </div>
      </div>
      <hr style={{opacity: "33%"}}/>
    </CalendarContainer>
  )
}

export default Calendar
