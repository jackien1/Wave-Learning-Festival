/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewsletter = /* GraphQL */ `
  query GetNewsletter($id: ID!) {
    getNewsletter(id: $id) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const listNewsletters = /* GraphQL */ `
  query ListNewsletters(
    $filter: ModelNewsletterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsletters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDate = /* GraphQL */ `
  query GetDate($id: ID!) {
    getDate(id: $id) {
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
export const listDates = /* GraphQL */ `
  query ListDates(
    $filter: ModelDateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
      id
      first_name
      last_name
      school
      createdAt
      updatedAt
    }
  }
`;
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        school
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeacherRegistration = /* GraphQL */ `
  query GetTeacherRegistration($id: ID!) {
    getTeacherRegistration(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listTeacherRegistrations = /* GraphQL */ `
  query ListTeacherRegistrations(
    $filter: ModelTeacherRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeacherRegistrations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      city
      state
      country
      school
      first_name
      last_name
      age
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        city
        state
        country
        school
        first_name
        last_name
        age
        howYouHear
        numCourses
        parentName
        parentEmail
        registeredEvents
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventAssignments = /* GraphQL */ `
  query GetEventAssignments($id: ID!) {
    getEventAssignments(id: $id) {
      id
      event
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const listEventAssignmentss = /* GraphQL */ `
  query ListEventAssignmentss(
    $filter: ModelEventAssignmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventAssignmentss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        event
        waitlisted
        absences
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSeminarAssignments = /* GraphQL */ `
  query GetSeminarAssignments($id: ID!) {
    getSeminarAssignments(id: $id) {
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
export const listSeminarAssignmentss = /* GraphQL */ `
  query ListSeminarAssignmentss(
    $filter: ModelSeminarAssignmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeminarAssignmentss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        waitlisted
        absences
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlogPost = /* GraphQL */ `
  query GetBlogPost($id: ID!) {
    getBlogPost(id: $id) {
      id
      content
      date
      image
      title
      createdAt
      updatedAt
    }
  }
`;
export const listBlogPosts = /* GraphQL */ `
  query ListBlogPosts(
    $filter: ModelBlogPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        date
        image
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSeminar = /* GraphQL */ `
  query GetSeminar($id: ID!) {
    getSeminar(id: $id) {
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
export const listSeminars = /* GraphQL */ `
  query ListSeminars(
    $filter: ModelSeminarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeminars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
