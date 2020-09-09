/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewsletter = /* GraphQL */ `
  mutation CreateNewsletter(
    $input: CreateNewsletterInput!
    $condition: ModelNewsletterConditionInput
  ) {
    createNewsletter(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateNewsletter = /* GraphQL */ `
  mutation UpdateNewsletter(
    $input: UpdateNewsletterInput!
    $condition: ModelNewsletterConditionInput
  ) {
    updateNewsletter(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteNewsletter = /* GraphQL */ `
  mutation DeleteNewsletter(
    $input: DeleteNewsletterInput!
    $condition: ModelNewsletterConditionInput
  ) {
    deleteNewsletter(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const createDate = /* GraphQL */ `
  mutation CreateDate(
    $input: CreateDateInput!
    $condition: ModelDateConditionInput
  ) {
    createDate(input: $input, condition: $condition) {
      id
      year
      month
      day
      hour
      minute
      second
      createdAt
      updatedAt
    }
  }
`;
export const updateDate = /* GraphQL */ `
  mutation UpdateDate(
    $input: UpdateDateInput!
    $condition: ModelDateConditionInput
  ) {
    updateDate(input: $input, condition: $condition) {
      id
      year
      month
      day
      hour
      minute
      second
      createdAt
      updatedAt
    }
  }
`;
export const deleteDate = /* GraphQL */ `
  mutation DeleteDate(
    $input: DeleteDateInput!
    $condition: ModelDateConditionInput
  ) {
    deleteDate(input: $input, condition: $condition) {
      id
      year
      month
      day
      hour
      minute
      second
      createdAt
      updatedAt
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      first_name
      last_name
      school
      createdAt
      updatedAt
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      first_name
      last_name
      school
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      first_name
      last_name
      school
      createdAt
      updatedAt
    }
  }
`;
export const createTeacherRegistration = /* GraphQL */ `
  mutation CreateTeacherRegistration(
    $input: CreateTeacherRegistrationInput!
    $condition: ModelTeacherRegistrationConditionInput
  ) {
    createTeacherRegistration(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      school
      gradYear
      coFirst
      coLast
      coEmail
      coSchool
      coYear
      seminarTitle
      seminarDesc
      numSessions
      qualifications
      priorTeaching
      engagement
      skills
      previousWaves
      questions
      approved
      createdAt
      updatedAt
    }
  }
`;
export const updateTeacherRegistration = /* GraphQL */ `
  mutation UpdateTeacherRegistration(
    $input: UpdateTeacherRegistrationInput!
    $condition: ModelTeacherRegistrationConditionInput
  ) {
    updateTeacherRegistration(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      school
      gradYear
      coFirst
      coLast
      coEmail
      coSchool
      coYear
      seminarTitle
      seminarDesc
      numSessions
      qualifications
      priorTeaching
      engagement
      skills
      previousWaves
      questions
      approved
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeacherRegistration = /* GraphQL */ `
  mutation DeleteTeacherRegistration(
    $input: DeleteTeacherRegistrationInput!
    $condition: ModelTeacherRegistrationConditionInput
  ) {
    deleteTeacherRegistration(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      school
      gradYear
      coFirst
      coLast
      coEmail
      coSchool
      coYear
      seminarTitle
      seminarDesc
      numSessions
      qualifications
      priorTeaching
      engagement
      skills
      previousWaves
      questions
      approved
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      city
      state
      country
      school
      first_name
      last_name
      email
      grade
      howYouHear
      numCourses
      parentName
      parentEmail
      registeredEvents
      registeredSeminars {
        id
        waitlisted
        absences
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      city
      state
      country
      school
      first_name
      last_name
      email
      grade
      howYouHear
      numCourses
      parentName
      parentEmail
      registeredEvents
      registeredSeminars {
        id
        waitlisted
        absences
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      city
      state
      country
      school
      first_name
      last_name
      email
      grade
      howYouHear
      numCourses
      parentName
      parentEmail
      registeredEvents
      registeredSeminars {
        id
        waitlisted
        absences
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEventAssignments = /* GraphQL */ `
  mutation CreateEventAssignments(
    $input: CreateEventAssignmentsInput!
    $condition: ModelEventAssignmentsConditionInput
  ) {
    createEventAssignments(input: $input, condition: $condition) {
      id
      event
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const updateEventAssignments = /* GraphQL */ `
  mutation UpdateEventAssignments(
    $input: UpdateEventAssignmentsInput!
    $condition: ModelEventAssignmentsConditionInput
  ) {
    updateEventAssignments(input: $input, condition: $condition) {
      id
      event
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventAssignments = /* GraphQL */ `
  mutation DeleteEventAssignments(
    $input: DeleteEventAssignmentsInput!
    $condition: ModelEventAssignmentsConditionInput
  ) {
    deleteEventAssignments(input: $input, condition: $condition) {
      id
      event
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const createSeminarAssignments = /* GraphQL */ `
  mutation CreateSeminarAssignments(
    $input: CreateSeminarAssignmentsInput!
    $condition: ModelSeminarAssignmentsConditionInput
  ) {
    createSeminarAssignments(input: $input, condition: $condition) {
      id
      seminar {
        id
        classTimes
        classDays
        classDates
        courseCategory
        courseDescription
        courseTitle
        edLink
        maxClassSize
        picture
        prereqs
        syllabus
        targetAudience
        teachers
        zoomLink
        createdAt
        updatedAt
      }
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const updateSeminarAssignments = /* GraphQL */ `
  mutation UpdateSeminarAssignments(
    $input: UpdateSeminarAssignmentsInput!
    $condition: ModelSeminarAssignmentsConditionInput
  ) {
    updateSeminarAssignments(input: $input, condition: $condition) {
      id
      seminar {
        id
        classTimes
        classDays
        classDates
        courseCategory
        courseDescription
        courseTitle
        edLink
        maxClassSize
        picture
        prereqs
        syllabus
        targetAudience
        teachers
        zoomLink
        createdAt
        updatedAt
      }
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const deleteSeminarAssignments = /* GraphQL */ `
  mutation DeleteSeminarAssignments(
    $input: DeleteSeminarAssignmentsInput!
    $condition: ModelSeminarAssignmentsConditionInput
  ) {
    deleteSeminarAssignments(input: $input, condition: $condition) {
      id
      seminar {
        id
        classTimes
        classDays
        classDates
        courseCategory
        courseDescription
        courseTitle
        edLink
        maxClassSize
        picture
        prereqs
        syllabus
        targetAudience
        teachers
        zoomLink
        createdAt
        updatedAt
      }
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const createBlogPost = /* GraphQL */ `
  mutation CreateBlogPost(
    $input: CreateBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    createBlogPost(input: $input, condition: $condition) {
      id
      content
      date
      image
      title
      views
      createdAt
      updatedAt
    }
  }
`;
export const updateBlogPost = /* GraphQL */ `
  mutation UpdateBlogPost(
    $input: UpdateBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    updateBlogPost(input: $input, condition: $condition) {
      id
      content
      date
      image
      title
      views
      createdAt
      updatedAt
    }
  }
`;
export const deleteBlogPost = /* GraphQL */ `
  mutation DeleteBlogPost(
    $input: DeleteBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    deleteBlogPost(input: $input, condition: $condition) {
      id
      content
      date
      image
      title
      views
      createdAt
      updatedAt
    }
  }
`;
export const createSeminar = /* GraphQL */ `
  mutation CreateSeminar(
    $input: CreateSeminarInput!
    $condition: ModelSeminarConditionInput
  ) {
    createSeminar(input: $input, condition: $condition) {
      id
      classTimes
      classDays
      classDates
      courseCategory
      courseDescription
      courseTitle
      edLink
      maxClassSize
      picture
      prereqs
      syllabus
      targetAudience
      teachers
      zoomLink
      createdAt
      updatedAt
    }
  }
`;
export const updateSeminar = /* GraphQL */ `
  mutation UpdateSeminar(
    $input: UpdateSeminarInput!
    $condition: ModelSeminarConditionInput
  ) {
    updateSeminar(input: $input, condition: $condition) {
      id
      classTimes
      classDays
      classDates
      courseCategory
      courseDescription
      courseTitle
      edLink
      maxClassSize
      picture
      prereqs
      syllabus
      targetAudience
      teachers
      zoomLink
      createdAt
      updatedAt
    }
  }
`;
export const deleteSeminar = /* GraphQL */ `
  mutation DeleteSeminar(
    $input: DeleteSeminarInput!
    $condition: ModelSeminarConditionInput
  ) {
    deleteSeminar(input: $input, condition: $condition) {
      id
      classTimes
      classDays
      classDates
      courseCategory
      courseDescription
      courseTitle
      edLink
      maxClassSize
      picture
      prereqs
      syllabus
      targetAudience
      teachers
      zoomLink
      createdAt
      updatedAt
    }
  }
`;
export const createTutorRegistration = /* GraphQL */ `
  mutation CreateTutorRegistration(
    $input: CreateTutorRegistrationInput!
    $condition: ModelTutorRegistrationConditionInput
  ) {
    createTutorRegistration(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      school
      gradYear
      subjects
      ageRanges
      qualifications
      why
      experience
      hours
      questions
      othersubjects
      approved
      createdAt
      updatedAt
    }
  }
`;
export const updateTutorRegistration = /* GraphQL */ `
  mutation UpdateTutorRegistration(
    $input: UpdateTutorRegistrationInput!
    $condition: ModelTutorRegistrationConditionInput
  ) {
    updateTutorRegistration(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      school
      gradYear
      subjects
      ageRanges
      qualifications
      why
      experience
      hours
      questions
      othersubjects
      approved
      createdAt
      updatedAt
    }
  }
`;
export const deleteTutorRegistration = /* GraphQL */ `
  mutation DeleteTutorRegistration(
    $input: DeleteTutorRegistrationInput!
    $condition: ModelTutorRegistrationConditionInput
  ) {
    deleteTutorRegistration(input: $input, condition: $condition) {
      id
      first_name
      last_name
      email
      school
      gradYear
      subjects
      ageRanges
      qualifications
      why
      experience
      hours
      questions
      othersubjects
      approved
      createdAt
      updatedAt
    }
  }
`;
export const createEventRegistration = /* GraphQL */ `
  mutation CreateEventRegistration(
    $input: CreateEventRegistrationInput!
    $condition: ModelEventRegistrationConditionInput
  ) {
    createEventRegistration(input: $input, condition: $condition) {
      id
      studentID
      eventID
      first_name
      last_name
      email
      notes
      questions
      extra
      howYouHear
      createdAt
      updatedAt
    }
  }
`;
export const updateEventRegistration = /* GraphQL */ `
  mutation UpdateEventRegistration(
    $input: UpdateEventRegistrationInput!
    $condition: ModelEventRegistrationConditionInput
  ) {
    updateEventRegistration(input: $input, condition: $condition) {
      id
      studentID
      eventID
      first_name
      last_name
      email
      notes
      questions
      extra
      howYouHear
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventRegistration = /* GraphQL */ `
  mutation DeleteEventRegistration(
    $input: DeleteEventRegistrationInput!
    $condition: ModelEventRegistrationConditionInput
  ) {
    deleteEventRegistration(input: $input, condition: $condition) {
      id
      studentID
      eventID
      first_name
      last_name
      email
      notes
      questions
      extra
      howYouHear
      createdAt
      updatedAt
    }
  }
`;
