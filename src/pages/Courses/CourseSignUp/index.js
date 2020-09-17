import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import * as Styles from './styles'
import { Colors, Typography, Form } from '@/styles'
import { Container, ContainerInner } from '@/globalStyles'
import Logo from './logo.png'
import Amplify, { API, graphqlOperation } from "aws-amplify"
import { createStudent, createSeminarRegistration } from "../../../graphql/mutations.js"
import { listSeminarRegistrations, listSeminars, listStudents } from "../../../graphql/queries.js"
import { COUNTRIES, UNITED_STATES, STATES } from "./countries";


const renderOption = ({option}) => (
  <option value={option}>{option}</option>
)

const renderSingleOption = ({other, key, option, studentData, setStudentData}) => (
  <Form.RadioInputBackground onClick={() => {
    setStudentData(prevData => {
      var result = {
      ...prevData,
      };
      result[key] = option;
      return result;
    }
  );
  }}>
    <Form.RadioInputButton many={true} selected={studentData[key] == option}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" &&
          <Form.Input
            value={studentData["other" + key]}
            onChange={event => {
              const value = event.target.value;
              setStudentData(prevData => {
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

const renderMultiOptionStudent = ({key, option, studentData, setStudentData}) => (
  <Form.RadioInputBackground onClick={() => {
    const newData = studentData[key];
    const ix = newData.indexOf(option);
    if (ix >= 0) {
      newData.splice(ix,1);
    } else {
      newData.push(option);
    }
    setStudentData(prevData => {
      var result = {...prevData};
      result[key] = newData;
      return result;
  });
  }}>
    <Form.RadioInputButton many={true} selected={studentData[key].indexOf(option) >= 0}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" &&
          <Form.Input
            value={studentData["other" + key]}
            onChange={event => {
              const value = event.target.value;
              setStudentData(prevData => {
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

const renderMultiOptionSeminar = ({key, option, seminarData, setSeminarData}) => (
  <Form.RadioInputBackground onClick={() => {
    const newData = seminarData[key];
    const ix = newData.indexOf(option);
    if (ix >= 0) {
      newData.splice(ix,1);
    } else {
      newData.push(option);
    }
    setSeminarData(prevData => {
      var result = {...prevData};
      result[key] = newData;
      return result;
  });
  }}>
    <Form.RadioInputButton many={true} selected={seminarData[key].indexOf(option) >= 0}/>
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
      <Typography.BodyText color="white">{option}</Typography.BodyText>
      <div style={{height: 40}}>
        {option === "Other" &&
          <Form.Input
            value={seminarData["other" + key]}
            onChange={event => {
              const value = event.target.value;
              setSeminarData(prevData => {
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

// check if student has already registered for courses
var isEmailDuplicated = async (studentEmail)  => {
  const allStudentsList = await API.graphql(graphqlOperation(listSeminarRegistrations));
  const allStudents = allStudentsList.data.listSeminarRegistrations.items;
  var value = 0;
  console.log('allStudents', allStudents)
  for (var i = 0; i < allStudents.length; i++){
    console.log("hereeeeee")
    console.log("email", studentEmail, allStudents[i].email)
    if (allStudents[i].email == studentEmail){
      console.log("also hereeeeee")
      console.log(allStudents[i].email)
      value = 1;
    }
  }
  return value
}

// NEED TO UPDATE THIS!! (check if student has already registered for Tide 1)
// var checkDuplicationSubmit = function(db, email, target, studentData, setErrorMessage, setPage, setWrongSubmission) {
//   db.collection("StudentRegistrations").where("email", "==", email).where("wave5", "==", true).get().then(function(snapshot) {
//     var ls = [];
//     snapshot.forEach(function(snap) {
//       ls.push(snap.data());
//     });
//     if (ls.length > 0) {
//       setWrongSubmission("You have already registered for Wave 5 courses based on your student email. If you want to change your response, please email wavelearningfestival@gmail.com.")
//     }
//     else {
//       target.parentNode.removeChild(target);
//       submit(db, studentData, setErrorMessage, setPage);
//     }
//   })
// }

var emailValidated = function(email) {
  //Based on thouroughly tested regex
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(String(email.replace(" ", "")));
}

var GRADE_OPTIONS = ["", '< 6', '6', '7', '8', '9', '10', '11', '12', '> 12'];

// const partner = "From a Wave partner organization";

var WAYS_TO_HEAR = [
  // partner,
  "From my school (teacher/principal/superintendent)",
  "From a news outlet",
  "From Facebook",
  "From Instagram",
  "From another social media",
  "From a family member",
  "From a friend",
  "Other"
];

var ORGS = ["", "test1", "test2"];

var YES = ["Yes"];

var PAST_COURSES_OPTIONS = [
  "Yes, in Wave 1!",
  "Yes, in Wave 2!",
  "Yes, in Wave 3!",
  "Yes, in Wave 4!",
  "Yes, in Wave 5!",
  "No"
];

var NUM_SEMINARS = ["", "1", "2"];

const StudentDataInput = ({ setPage, studentData, setStudentData, nextPage, wrongSubmission }) => {
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
      How did you hear about us? *
    </Typography.Header2>
    {WAYS_TO_HEAR.map((value) => (
      renderSingleOption({key: "howYouHear", option: value, studentData, setStudentData})
    ))}
{/* 
    { studentData.howYouHear.includes(partner) && <>
      <Typography.Header2 color="white" fontSize="24px">
        Which of our partner organizations are you affiliated with?
      </Typography.Header2>
      <Form.Dropdown
        value={studentData.orgs}
        onChange={event => {
          const value = event.target.value
          setStudentData(prevData => ({
            ...prevData,
            orgs: value
          }))
        }}>
        {ORGS.map((value) => (
          renderOption({key: "orgs", option: value, studentData, setStudentData})
        ))}
      </Form.Dropdown>
      </>
    } */}

    <Typography.Header2 color="white" fontSize="24px">
      I have read and agree to the <a href="/student-agreement" target="_blank" style={{color: Colors.WLF_YELLOW}}>Student Agreement</a> *
    </Typography.Header2>
    {YES.map((value) => (
      renderSingleOption({key: "studentAgreement", option: value, studentData, setStudentData})
    ))}

    <Typography.Header2 color="white" fontSize="24px">
      I have read and agree to the <a href="/terms-conditions" target="_blank" style={{color: Colors.WLF_YELLOW}}>Terms and Conditions</a>&nbsp;
       and <a href="/privacy-policy" target="_blank" style={{color: Colors.WLF_YELLOW}}>Privacy Policy</a>. *
    </Typography.Header2>
    {YES.map((value) => (
      renderSingleOption({key: "termsConditions", option: value, studentData, setStudentData})
    ))}

    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Form.Button onClick={(event) => { nextPage() }}>
        <Typography.Header color="white" fontSize="24px">
          Next
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

const SeminarDataInput = ({ setPage, seminarData, setSeminarData, submit, wrongSubmission, SEMINARS_TITLE}) => {
  
  return (<div style={{ width: '100%' }}>
    <Typography.Header color={Colors.WLF_YELLOW}>
      Seminar Registration
    </Typography.Header>
    <Typography.BodyText color="white">
      Please keep in mind the target grade range, course meeting times, frequency, class sizes, and prerequisites (if any).
    </Typography.BodyText>
    <Typography.BodyText color="white">
      Check out all our seminar offerings <a href="/seminars" target="_blank" color={Colors.WLF_YELLOW}>here</a>!
    </Typography.BodyText>

    <Typography.Header2 color="white" fontSize="24px">
      Have you taken courses with us before? *
    </Typography.Header2>
    {PAST_COURSES_OPTIONS.map((value) => (
      renderMultiOptionSeminar({key: "pastCourses", option: value, seminarData, setSeminarData})
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
      {NUM_SEMINARS.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>

    <Typography.Header2 color="white" fontSize="24px">
      What is your first choice seminar? *
    </Typography.Header2>
    <Form.Dropdown
      value={seminarData.sem1}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          sem1: value
        }))
      }}>
      {SEMINARS_TITLE.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>
      
    <Typography.Header2 color="white" fontSize="24px">
      Why are you interested in taking your first choice seminar? *
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 3-5 sentences.
    </Typography.BodyText>
    <Form.BigInput
      value={seminarData.reason1}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          reason1: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      What is your second choice seminar?
    </Typography.Header2>
    <Form.Dropdown
      value={seminarData.sem2}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          sem2: value
        }))
      }}>
      {SEMINARS_TITLE.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>
      
    <Typography.Header2 color="white" fontSize="24px">
      Why are you interested in taking your second choice seminar?
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 3-5 sentences.
    </Typography.BodyText>
    <Form.BigInput
      value={seminarData.reason2}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          reason2: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      What is your third choice seminar?
    </Typography.Header2>
    <Form.Dropdown
      value={seminarData.sem3}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          sem3: value
        }))
      }}>
      {SEMINARS_TITLE.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>
      
    <Typography.Header2 color="white" fontSize="24px">
      Why are you interested in taking your third choice seminar?
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 3-5 sentences.
    </Typography.BodyText>
    <Form.BigInput
      value={seminarData.reason3}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          reason3: value
        }))
      }}
    />

    <Typography.Header2 color="white" fontSize="24px">
      What is your fourth choice seminar?
    </Typography.Header2>
    <Form.Dropdown
      value={seminarData.sem4}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          sem4: value
        }))
      }}>
      {SEMINARS_TITLE.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>
      
    <Typography.Header2 color="white" fontSize="24px">
      Why are you interested in taking your fourth choice seminar?
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 3-5 sentences.
    </Typography.BodyText>
    <Form.BigInput
      value={seminarData.reason4}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          reason4: value
        }))
      }}
    />

<Typography.Header2 color="white" fontSize="24px">
      What is your fifth choice seminar?
    </Typography.Header2>
    <Form.Dropdown
      value={seminarData.sem5}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          sem5: value
        }))
      }}>
      {SEMINARS_TITLE.map((value) => (
        renderOption({option: value})
      ))}
    </Form.Dropdown>
      
    <Typography.Header2 color="white" fontSize="24px">
      Why are you interested in taking your fifth choice seminar?
    </Typography.Header2>
    <Typography.BodyText color="white">
      Please limit your response to 3-5 sentences.
    </Typography.BodyText>
    <Form.BigInput
      value={seminarData.reason5}
      onChange={event => {
        const value = event.target.value
        setSeminarData(prevData => ({
          ...prevData,
          reason5: value
        }))
      }}
    />

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
  <div>
    <Typography.Header color={Colors.WLF_YELLOW}>Thanks for signing up!</Typography.Header>
    <Typography.BodyText color="white" style={{fontSize: 21}}>
      You and/or your parent should receive a confirmation email in a few days. <br/><br/>
      We never want financial ability to prevent anyone from being able to learn. In order for us to provide accessible educational resources to students across the world, we need your help! <br/><br/>
      If you have the means, please donate to help Wave better serve our students. (We recommend $5 per seminar, but any amount is greatly appreciated!)
      <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left', marginTop:-10, fontSize:24}}>
        <Form.Button style={{textAlign: 'center', alignItems: 'center', marginRight:20 }}>
          <a href="/" style={{ textDecoration: 'none', color: 'white', margin: 'auto'}}><b>Home</b></a>
        </Form.Button> 
        <Form.Button style={{textAlign: 'center', alignItems: 'center' }}>
          <a href="/donate" style={{ textDecoration: 'none', color: 'white', margin: 'auto'}}><b>Donate</b></a>
        </Form.Button>
      </div>
    </Typography.BodyText>
    </div>
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
    howYouHear: [],
    orgs: [],
    studentAgreement: "",
    termsConditions: ""
  })
  const [seminarData, setSeminarData] = useState({
    email: "",
    pastCourses: [],
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
    reason5: ""
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
      form.termsConditions != "" && 
      form.howYouHear != "";
  }

  var requiredSeminarFields = (form) => {
    // if (form.sem2 != "" && form.reason2 == ""){
    //   return false;
    // }
    // if (form.sem3 != "" && form.reason3 == ""){
    //   return false;
    // }
    // if (form.sem4 != "" && form.reason4 == ""){
    //   return false;
    // }
    // if (form.sem5 != "" && form.reason5 == ""){
    //   return false;
    // }
    // console.log("made it past sem2-5");
    return form.pastCourses != "" &&
      form.numSeminars != "" &&
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
    if (!requiredStudentFields(studentData)) {
      setWrongSubmission("Please fill out all required fields marked with an asterisk (*).")
    } else if (isEmailDuplicated(email) == 1){
      setWrongSubmission("You have already registered for Tide 1 under this student email!")
    } else if (email != email1) {
      setWrongSubmission("Student emails do not match.");
    } else if (!emailValidated(email)) {
      setWrongSubmission("Please input a valid student email address");
    } else if (parentEmail != parentEmail1) {
      setWrongSubmission("Parent emails do not match.");
    } else if (!emailValidated(parentEmail)) {
      setWrongSubmission("Please input a valid parent email address");
    } else {
      setPage('seminarData');
      window.scroll(0,0);
    }

  }

  const submit = () => {
    console.log(seminarData);
    // add conditions for duplicate registration here
    if (!requiredSeminarFields(seminarData)) {
      setWrongSubmission("Please fill out all required fields marked with an asterisk (*).")
    } else if ((seminarData.sem1 == seminarData.sem2 && seminarData.sem1 != "") || 
      (seminarData.sem2 == seminarData.sem3 && seminarData.sem2 != "") ||
      (seminarData.sem3 == seminarData.sem4 && seminarData.sem3 != "") ||
      (seminarData.sem4 == seminarData.sem5 && seminarData.sem4 != "") 
      ){
      setWrongSubmission("You may not register for the same course multiple times.")
    } else if (seminarData.sem2 != "" && seminarData.reason2 == "") {
      setWrongSubmission("Please briefly explain why you are interested in taking your second choice course.")
    } else if (seminarData.sem3 != "" && seminarData.reason3 == "") {
      setWrongSubmission("Please briefly explain why you are interested in taking your third choice course.")
    } else if (seminarData.sem4 != "" && seminarData.reason4 == "") {
      setWrongSubmission("Please briefly explain why you are interested in taking your fourth choice course.")
    } else if (seminarData.sem5 != "" && seminarData.reason5 == "") {
      setWrongSubmission("Please briefly explain why you are interested in taking your fifth choice course.")
    } else {
      API.graphql(graphqlOperation(createStudent, {
        input: {
          first_name: studentData.first_name,
          last_name: studentData.last_name,
          email: studentData.email.toLowerCase(),
          parent_first_name: studentData.parent_first,
          parent_last_name: studentData.parent_last,
          parentEmail: studentData.parentEmail.toLowerCase(),
          grade: studentData.grade,
          school: studentData.school,
          country: studentData.country,
          state: studentData.state,
          city: studentData.city,
          howYouHear: studentData.howYouHear,
          orgs: studentData.orgs
        }
      }));
      var semId = [];
      const values = [seminarData.sem1, seminarData.sem2, seminarData.sem3, seminarData.sem4, seminarData.sem5];
      console.log(seminarData);
      for (var i = 0; i < 5; i++){
        for (var j = 0; j < SEMINARS_LIST.length; j++){
          if (SEMINARS_LIST[j][0] == values[i]){
            semId.push(SEMINARS_LIST[j][1]);
            break;
          }
        }
      }
      console.log('semid', semId)
      API.graphql(graphqlOperation(createSeminarRegistration, {
        input: {
          email: studentData.email.toLowerCase(),
          pastCourses: seminarData.pastCourses,
          numSeminars: seminarData.numSeminars,
          sem1: semId[0],
          sem2: semId[1],
          sem3: semId[2],
          sem4: semId[3],
          sem5: semId[4],
          // sem1: seminarData.sem1,
          // sem2: seminarData.sem2,
          // sem3: seminarData.sem3,
          // sem4: seminarData.sem4,
          // sem5: seminarData.sem5,
          reason1: seminarData.reason1,
          reason2: seminarData.reason2,
          reason3: seminarData.reason3,
          reason4: seminarData.reason4,
          reason5: seminarData.reason5
        }
      }));
      setPage('thanks');
    }

  }

  const [SEMINARS_LIST, setSeminarList] = useState(null)
  const [SEMINARS_TITLE, setSeminarTitle] = useState(null)
  const fetchSeminars = async () => {
    try { 
      var SEMINARS_LIST = [""];
      var SEMINARS_TITLE = [""];
      const semData = await API.graphql(graphqlOperation(listSeminars));
      const semList = semData.data.listSeminars.items;
      for (var sem of semList){
        SEMINARS_LIST.push([sem.courseTitle, sem.id])
        SEMINARS_TITLE.push(sem.courseTitle)
      }
      SEMINARS_TITLE.sort((a, b) => {
        let fa = a[0], fb = b[0];
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      });
      setSeminarList(SEMINARS_LIST)
      setSeminarTitle(SEMINARS_TITLE);
      console.log('list', SEMINARS_LIST);
      console.log('title', SEMINARS_TITLE)
    } catch (error) {
        console.log('error on fetching seminars', error);
    }
  }

  useEffect(() => {
    fetchSeminars();
  }, []);


  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Navbar />
      <Styles.SignupBackground>
        {page === 'studentData' && StudentDataInput({ setPage, studentData, setStudentData, nextPage, wrongSubmission })}
        {page === 'seminarData' && SeminarDataInput({ setPage, seminarData, setSeminarData, submit, wrongSubmission, SEMINARS_TITLE })}
        {page === 'thanks' && Thanks({ setPage })}
      </Styles.SignupBackground>
      <Footer />
    </div>
  )
}

export default SeminarSignUp
