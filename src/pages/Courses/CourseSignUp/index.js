import React, { useState, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as Styles from './styles'
import { Colors, Typography, Form } from '@/styles'
import Logo from './logo.png'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createStudent, createStudentRegistration } from "../../graphql/mutations.js"
import { listSeminars } from "../../graphql/mutations.js"
import { COUNTRIES, UNITED_STATES, STATES } from "./countries";


const renderOption = ({option}) => (
  <option value={option}>{option}</option>
)

const renderSingleOption = ({other, key, option, data, setData}) => (
  <Form.RadioInputBackground onClick={() => {
    setData(prevData => {
      var result = {
      ...prevData,
      };
      result[key] = option;
      return result;
    }
  );
  }}>
    <Form.RadioInputButton many={true} selected={data[key] == option}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" &&
          <Form.Input
            value={data["other" + key]}
            onChange={event => {
              const value = event.target.value;
              setData(prevData => {
                var result = {
                  ...prevData
                };
                result["other" + key] = value;
                return result;
            });
            }}
          />
        }
      </div>
    </div>
  </Form.RadioInputBackground>
);

const renderMultiOption = ({key, option, data, setData}) => (
  <Form.RadioInputBackground onClick={() => {
    const newData = data[key];
    const ix = newData.indexOf(option);
    if (ix >= 0) {
      newData.splice(ix,1);
    } else {
      newData.push(option);
    }
    setData(prevData => {
      var result = {...prevData};
      result[key] = newData;
      return result;
  });
  }}>
    <Form.RadioInputButton many={true} selected={data[key].indexOf(option) >= 0}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" &&
          <Form.Input
            value={data["other" + key]}
            onChange={event => {
              const value = event.target.value;
              setData(prevData => {
                var result = {
                  ...prevData
                };
                result["other" + key] = value;
                return result;
              });
            }}
          />
        }
      </div>
    </div>
  </Form.RadioInputBackground>
);

// NEED TO UPDATE THIS!! (checks if student alrdy has account)
var isEmailDuplicated = function(db, email) {
  //Is in our database already for current wave?
  var ls = [];
  db.collection("StudentRegistrations").where("email", "==", email).where("wave5", "==", true).get().then(function(snapshot) {
    snapshot.forEach(function(snap) {
      ls.push(snap)
    })
  })
  if (ls.length > 0) {
    return true;
  }
  return false;
}

// NEED TO UPDATE THIS!! (check if student has already registered for Tide 1)
var checkDuplicationSubmit = function(db, email, target, studentData, setErrorMessage, setPage, setWrongSubmission) {
  db.collection("StudentRegistrations").where("email", "==", email).where("wave5", "==", true).get().then(function(snapshot) {
    var ls = [];
    snapshot.forEach(function(snap) {
      ls.push(snap.data());
    });
    if (ls.length > 0) {
      setWrongSubmission("You have already registered for Wave 5 courses based on your student email. If you want to change your response, please email wavelearningfestival@gmail.com.")
    }
    else {
      target.parentNode.removeChild(target);
      submit(db, studentData, setErrorMessage, setPage);
    }
  })
}

var emailValidated = function(email) {
  //Based on thouroughly tested regex
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(String(email.replace(" ", "")));
}

var GRADE_OPTIONS = ['< 6', '6', '7', '8', '9', '10', '11', '12', '> 12'];

var YES = ["Yes"];

var NUM_SEMINARS = ["", "1", "2"];

var WAYS_TO_HEAR = [
  "From my school (teacher/principal/superintendent)",
  "From my company (please enter in \"Other\")",
  "From a news outlet",
  "From Facebook",
  "From Instagram",
  "From another social media (please enter in \"Other\")",
  "From a family member",
  "From a friend",
  "Other"
];

const StudentDataInput = ({ setPage, studentData, setStudentData, submit, wrongSubmission }) => {
  return (<div style={{ width: '100%' }}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Student Information
    </Typography.Header>

    <Typography.Header2 color="white" fontSize="24px">
      Student First Name *
    </Typography.Header2>
    <Form.Input
      value={studentData.first_name}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          first_name: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Student Last Name *
    </Typography.Header2>
    <Form.Input
      value={studentData.last_name}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          last_name: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Student Email *
    </Typography.Header2>
    <Form.Input
      value={studentData.email}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          email: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Confirm Student Email *
    </Typography.Header2>
    <Form.Input
      value={studentData.email1}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          email1: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Parent First Name *
    </Typography.Header2>
    <Form.Input
      value={studentData.parent_first}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          parent_first: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Parent Last Name *
    </Typography.Header2>
    <Form.Input
      value={studentData.parent_last}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          parent_last: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Parent Email *
    </Typography.Header2>
    <Form.Input
      value={studentData.parentEmail}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          parentEmail: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Confirm Parent Email *
    </Typography.Header2>
    <Form.Input
      value={studentData.parentEmail1}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          parentEmail1: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Student Grade Level *
    </Typography.Header2>
    <Typography.BodyText color="white">
      In the US, the grade levels are as follows: grade 6 (age 11-12), grade 7 (age 12–13), grade 8 (age 13–14), grade 9 (age 14–15), grade 10 (age 15-16), grade 11 (age 16-17), and grade 12 (age 17–18).
    </Typography.BodyText>
    <Form.Dropdown
      value={studentData.grade}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          grade: value
        }))
      }}
    >
      {GRADE_OPTIONS.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      School *
    </Typography.Header2>
    <Form.Input
      value={studentData.school}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          school: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Country *
    </Typography.Header2>
    <Form.Dropdown
      value={studentData.country}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          country: value
        }))
      }}>
      {COUNTRIES.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    {studentData.country === UNITED_STATES && <>
        <Typography.Header2 color="white" fontSize="24px">
          State *
        </Typography.Header2>
        <Form.Dropdown
          value={studentData.state}
          onChange={event => {
            const value = event.target.value
            setStudentData(prevData => ({
              ...prevData,
              state: value
            }))
          }}>
          {STATES.map((value) => (
            renderOption({option: value})
          ))}
        </Form.Dropdown>
        </>
    }

    {studentData.country != UNITED_STATES && <>
        <Typography.Header2 color="white" fontSize="24px">
          State *
        </Typography.Header2>
        <Form.Input
          value={studentData.state}
          onChange={event => {
            const value = event.target.value
            setStudentData(prevData => ({
              ...prevData,
              state: value
            }))
          }}
        />
        </>
    }

    <Typography.Header2 color="white" fontSize="24px">
      City *
    </Typography.Header2>
    <Form.Input
      value={studentData.city}
      onChange={event => {
        const value = event.target.value
        setStudentData(prevData => ({
          ...prevData,
          city: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      Are you a member of any of these organizations?
    </Typography.Header2>
    {ORGS.map((value) => (
      renderMultiOption({key: "orgs", option: value, studentData, setStudentData})
    ))}


    <Typography.Header2 color="white" fontSize="24px">
      I have read and agree to the <a href="/student-agreement" target="_blank">Student Agreement</a> / He leído y acepto el Acuerdo del estudiante
    </Typography.Header2>
    {YES.map((value) => (
      renderSingleOption({key: "studentAgreement", option: value, studentData, setStudentData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      I have read and agree to the <a href="/terms-conditions" target="_blank">Terms and Conditions</a>&nbsp;
       and <a href="/privacy-policy" target="_blank">Privacy Policy</a>. / He leído y acepto los <a href="/terms-conditions" target="_blank">Términos y Condiciones</a> y la <a href="/privacy-policy" target="_blank">Política de Privacidad</a>. *
    </Typography.Header2>
    {YES.map((value) => (
      renderSingleOption({key: "termsConditions", option: value, studentData, setStudentData})
    ))}

    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Form.Button onClick={(event) => { nextPage() }}>
        <Typography.Header color="white" fontSize="24px">
          Submit
        </Typography.Header>
      </Form.Button>
    </div>

    <Typography.BodyText color="white">
      * Required field
    </Typography.BodyText>

    {wrongSubmission &&
    <Typography.BodyText color="white">
      {wrongSubmission}
    </Typography.BodyText>}
  </div>)
}

const SeminarDataInput = ({ setPage, seminarData, setSeminarData, submit, wrongSubmission }) => {
  return (<div style={{ width: '100%' }}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Seminar Registration
    </Typography.Header>
    <Typography.BodyText color="white">
      Please keep in mind the target grade range, course meeting times, frequency, class sizes, and prerequisites (if any).
    </Typography.BodyText>
    <Typography.BodyText color="white">
      Check out all our seminar offerings at <a href="/seminars" target="_blank">here</a>!
    </Typography.BodyText>

    <Typography.Header2 color="white" fontSize="24px">
      Have you taken courses with us before? *
    </Typography.Header2>
    {PAST_COURSES_OPTIONS.map((value) => (
      renderMultiOption({key: "pastCourses", option: value, seminarData, setSeminarData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      How many seminars would you like to be enrolled in? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Of the seminars register for below, you will initially be enrolled in 1-2 seminars, and waitlisted for the others.
    </Typography.BodyText>
    <Form.Dropdown
      value={seminarData.numSeminars}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          numSeminars: value
        }))
      }}>
      {NUM_COURSES.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your first choice seminar? *
    </Typography.Header2>
    <Form.Dropdown
      onChange={inputChanged("firstCourse", setStudentData)}
    >
      {COURSE_LIST.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Form.Button onClick={(event) => { submit() }}>
        <Typography.Header color="white" fontSize="24px">
          Submit
        </Typography.Header>
      </Form.Button>
    </div>

    <Typography.BodyText color="white">
      * Required field
    </Typography.BodyText>

    {wrongSubmission &&
    <Typography.BodyText color="white">
      {wrongSubmission}
    </Typography.BodyText>}
  </div>)
}

// UPDATE THE CONFIRMATION MESSAGE
const Thanks = ({ setPage }) => (
  <>
    <Typography.Header color={Colors.WLF_YELLOW}>Thank you for applying!</Typography.Header>
    <Typography.Header2 color="white">You should receive a confirmation email within the next few days, and we will reach out regarding interviews within a couple weeks. If you have any questions/concerns, please email us at wavelearningfestival@gmail.com.</Typography.Header2>
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Form.Button onClick={() => "/courses"}>
        <Typography.Header color="white" fontSize="24px">
          Back to Seminars Page
        </Typography.Header>
      </Form.Button>
    </div>
  </>
)

const SeminarSignUp = () => {
  const [page, setPage] = useState('studentData')
  const [wrongSubmission, setWrongSubmission] = useState("")
  const [studentData, setStudentData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    email1: "",
    parent_first: "",
    parent_last: "",
    parentEmail: "",
    parentEmail1: "",
    grade: "",
    school: "",
    country: "",
    state: "",
    city: "",
    orgs: "",
    studentAgreement: "",
    termsConditions: ""
  })
  const [seminarData, setSeminarData] = useState({
    email: "",
    pastCourses: "",
    numSeminars: "",
    sem1: "",
    reason1: "",
    sem2: "",
    reason2: "",
    sem3: "",
    reason3: "",
    sem4: "",
    reason4: "",
    sem5: "",
    reason5: "",
    howYouHear: ""
  })

  var requiredStudentFields = (form) => {
    return form.first_name != "" &&
      form.last_name != "" &&
      form.email != "" &&
      form.parent_first != "" &&
      form.parent_last != "" &&
      form.parentEmail != "" &&
      form.grade != "" &&
      form.school != "" &&
      form.country != "" &&
      form.state != "" &&
      form.city != "" &&
      form.studentAgreement != "" &&
      form.termsConditions != "";
  }

  var requiredSeminarFields = (form) => {
    if (form.sem2 != "" && form.reason2 == ""){
      return false;
    }
    if (form.sem3 != "" && form.reason3 == ""){
      return false;
    }
    if (form.sem4 != "" && form.reason4 == ""){
      return false;
    }
    if (form.sem5 != "" && form.reason5 == ""){
      return false;
    }
    return form.pastCourses != "" &&
      form.numSeminars != "" &&
      form.howYouHear != "" &&
      form.pastCourses != "" &&
      form.sem1 != "" &&
      form.reason1 != "";
  }

  const nextPage = () => {
    console.log(studentData);
    var email = studentData.email.toLowerCase();
    var email1 = studentData.email1.toLowerCase();
    var parentEmail = studentData.parentEmail.toLowerCase();
    var parentEmail1 = studentData.parentEmail1.toLowerCase();
    if (email != email1) {
      setWrongSubmission("Student emails do not match.");
    } else if (!emailValidated(email)) {
      setWrongSubmission("Please input a valid student email address");
    } else if (parentEmail != parentEmail1) {
      setWrongSubmission("Parent emails do not match.");
    } else if (!emailValidated(parentEmail)) {
      setWrongSubmission("Please input a valid parent email address");
    } 
    // add check for duplicate account
    else if (!requiredStudentFields(studentData)) {
      setWrongSubmission("Please fill out all required fields marked with an asterisk (*).")
    } else {
      setPage('seminarData');
    }

  }

  const submit = () => {
    console.log(seminarData);
    // add conditions for duplicate registration here
    if (!requiredSeminarFields(seminarData)) {
      setWrongSubmission("Please fill out all required fields marked with an asterisk (*).")
    } else {
      API.graphql(graphqlOperation(createStudent, {
        input: {
          first_name: tutorData.first_name,
          last_name: tutorData.last_name,
          email: tutorData.email,
          school: tutorData.school,
          gradYear: tutorData.gradYear,
          subjects: tutorData.subjects,
          ageRanges: tutorData.ageRanges,
          qualifications: tutorData.qualifications,
          why: tutorData.why,
          experience: tutorData.experience,
          hours: tutorData.hours,
          questions: tutorData.questions,
          othersubjects: tutorData.othersubjects
        }
      }));
      API.graphql(graphqlOperation(createStudent, {
        input: {
          first_name: tutorData.first_name,
          last_name: tutorData.last_name,
          email: tutorData.email,
          school: tutorData.school,
          gradYear: tutorData.gradYear,
          subjects: tutorData.subjects,
          ageRanges: tutorData.ageRanges,
          qualifications: tutorData.qualifications,
          why: tutorData.why,
          experience: tutorData.experience,
          hours: tutorData.hours,
          questions: tutorData.questions,
          othersubjects: tutorData.othersubjects
        }
      }));
      setPage('thanks');
    }

  }

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Navbar />
      <Styles.TeacherBackground>
        <div style={{ maxWidth: 800 }}>
          {page === 'studentData' && StudentDataInput({ setPage, studentData, setStudentData, submit, wrongSubmission })}
          {page === 'seminarData' && SeminarDataInput({ setPage, seminarData, setSeminarData, submit, wrongSubmission })}
          {page === 'thanks' && Thanks({ setPage })}
        </div>
      </Styles.TeacherBackground>
      <Footer />
    </div>
  )
}

export default SeminarSignUp
