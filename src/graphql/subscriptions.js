/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNewsletter = /* GraphQL */ `
  subscription OnCreateNewsletter {
    onCreateNewsletter {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNewsletter = /* GraphQL */ `
  subscription OnUpdateNewsletter {
    onUpdateNewsletter {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNewsletter = /* GraphQL */ `
  subscription OnDeleteNewsletter {
    onDeleteNewsletter {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDate = /* GraphQL */ `
  subscription OnCreateDate {
    onCreateDate {
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
export const onUpdateDate = /* GraphQL */ `
  subscription OnUpdateDate {
    onUpdateDate {
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
export const onDeleteDate = /* GraphQL */ `
  subscription OnDeleteDate {
    onDeleteDate {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
      id
      first_name
      last_name
      school
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher {
    onUpdateTeacher {
      id
      first_name
      last_name
      school
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher {
    onDeleteTeacher {
      id
      first_name
      last_name
      school
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeacherRegistration = /* GraphQL */ `
  subscription OnCreateTeacherRegistration {
    onCreateTeacherRegistration {
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
export const onUpdateTeacherRegistration = /* GraphQL */ `
  subscription OnUpdateTeacherRegistration {
    onUpdateTeacherRegistration {
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
export const onDeleteTeacherRegistration = /* GraphQL */ `
  subscription OnDeleteTeacherRegistration {
    onDeleteTeacherRegistration {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateEventAssignments = /* GraphQL */ `
  subscription OnCreateEventAssignments {
    onCreateEventAssignments {
      id
      event
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEventAssignments = /* GraphQL */ `
  subscription OnUpdateEventAssignments {
    onUpdateEventAssignments {
      id
      event
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEventAssignments = /* GraphQL */ `
  subscription OnDeleteEventAssignments {
    onDeleteEventAssignments {
      id
      event
      waitlisted
      absences
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSeminarAssignments = /* GraphQL */ `
  subscription OnCreateSeminarAssignments {
    onCreateSeminarAssignments {
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
export const onUpdateSeminarAssignments = /* GraphQL */ `
  subscription OnUpdateSeminarAssignments {
    onUpdateSeminarAssignments {
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
export const onDeleteSeminarAssignments = /* GraphQL */ `
  subscription OnDeleteSeminarAssignments {
    onDeleteSeminarAssignments {
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
export const onCreateBlogPost = /* GraphQL */ `
  subscription OnCreateBlogPost {
    onCreateBlogPost {
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
export const onUpdateBlogPost = /* GraphQL */ `
  subscription OnUpdateBlogPost {
    onUpdateBlogPost {
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
export const onDeleteBlogPost = /* GraphQL */ `
  subscription OnDeleteBlogPost {
    onDeleteBlogPost {
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
export const onCreateSeminar = /* GraphQL */ `
  subscription OnCreateSeminar {
    onCreateSeminar {
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
export const onUpdateSeminar = /* GraphQL */ `
  subscription OnUpdateSeminar {
    onUpdateSeminar {
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
export const onDeleteSeminar = /* GraphQL */ `
  subscription OnDeleteSeminar {
    onDeleteSeminar {
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
