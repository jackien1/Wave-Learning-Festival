import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, ContainerInner } from "@/globalStyles";
import { Colors, Typography } from "@/styles";

const FAQStudents = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <ContainerInner>
          <Typography.Header style={{ color: Colors.WLF_PURPLE }}>
            FAQ - Instructors
          </Typography.Header>
          <br />
          <Typography.Header style={{ color: Colors.WLF_BLACK, fontSize: 28 }}>
            Engaged Seminars
          </Typography.Header>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            When will classes start?
          </Typography.Header2>
          <Typography.BodyText>
            Tide 1 will start on Monday, October 5th and end on Friday, November 6th!
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            How long will my teaching session be?
          </Typography.Header2>
          <Typography.BodyText>
            That will be up to you, as the instructor. Seminars can range from meeting every two weeks (3 sessions total) to twice a week (10 sessions total) for five weeks. 
            The long-form structure will give you more time to build on a topic that excites you and allows your students to learn a greater depth of information. 
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Will I be getting any support when planning my course curriculum?
          </Typography.Header2>
          <Typography.BodyText>
            Yes! You will be planning your course with the help of Wave Learning
            Festival’s Engaged Seminars team. Together, you will build and structure
            your class programming to make sure your class is a success. 
            Our team will also be in contact throughout the
            duration of your seminar, should you have any questions or request
            any additional support.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Do I have to know what I’m teaching before I apply?
          </Typography.Header2>
          <Typography.BodyText>
            Yes, you will apply with a topic and description for your course.
            However, you do not need to have your full course curriculum
            finalized before you apply. If you are having a hard time deciding
            between classes you’d like to teach or would like some inspiration,
            contact{" "}
            <a href="mailto: wavelearningfestival@gmail.com">
              wavelearningfestival@gmail.com
            </a>{" "}
            with questions.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Is it possible to co-teach with another person?
          </Typography.Header2>
          <Typography.BodyText>
            Yes! In fact, we encourage it—double the ideas and half the work is
            awesome for everyone involved. When filling out the Instructor
            Application form, make sure you add your co-teacher’s name and contact
            information. You only need to submit one form per pair.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            What should I teach?
          </Typography.Header2>
          <Typography.BodyText>
            All topics are valid, whether traditional or a bit eccentric!
            Whatever you choose to teach, our priority is to keep classes fun
            and engaging—think discussions, collaborative work, and hands-on
            projects.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            What are some examples of classes that might be taught?
          </Typography.Header2>
          <Typography.BodyText>
            The Art of Writing Poetry: a Workshop, Debate Anything, US Foreign
            Involvement, Is It Inevitable? Combating Climate Change,
            Introduction to Cryptography, Scripting for Data Analysis,
            Interactive Game Theory, Analyzing Contemporary Art, Discussing
            Faulkner’s Works, and on and on and on… (hint: Stanford Splash/MIT
            Splash have some pretty cool ideas!)
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Do I have to assign homework? Do I have to proctor exams?
          </Typography.Header2>
          <Typography.BodyText>
            Absolutely not! As an instructor, you will have control over the amount
            of interactive work you would like to assign. There won’t be any
            official system in which to assign feedback for student work.
            However, if you would like to have a platform on which to give
            feedback, you will have the chance to coordinate with WLF’s
            Engaged Seminars team and come up with a solution that works with the
            structure of your course.
          </Typography.BodyText>
          <br />
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, fontSize: 20 }}>
            Who can I contact with questions about Wave Learning Festival?
          </Typography.Header2>
          <Typography.BodyText>
            Send all questions to{" "}
            <a href="mailto: wavelearningfestival@gmail.com">
              wavelearningfestival@gmail.com
            </a>
            .
          </Typography.BodyText>
          <Typography.BodyText><br/>You may also sign up for our <a href="/#updates">Newsletter</a> with imporant updates about our progress!</Typography.BodyText>
        </ContainerInner>
      </Container>

      <Footer />
    </div>
  );
};

export default FAQStudents;
