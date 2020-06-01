import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import './styles.css'

import Geobiology from "./headshot/geobiology-astrobiology.png"

const Courses = () => {
    return(
        <div>
            <Navbar/>
            <Container>
            <ContainerInner>
            <p>
              We are excited to offer 23 courses across a variety of subjects. Our volunteer educators have worked hard to prepare engaging and thoughtful curricula, and can't wait to share their passions with you. Click each course for more info, and feel free to send any questions to <a href="mailto:wavelf.logistics@gmail.com">wavelf.logistics@gmail.com</a>.
            </p>
            <div class="container">
            <div class="row">

            <div class="column">
              <a href="course-coding-activities">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Coding through Activities</p>
                  <p class="teacher">Ethar Hussein & Salma Kamni</p>
                  <p class="school">Amos Alonzo Stagg High School '20, Stanford University '24</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-financial-literacy">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Financial Literacy</p>
                  <p class="teacher">Maria Estrada</p>
                  <p class="school">Williams College '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-great-speeches">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Great Speeches in History</p>
                  <p class="teacher">Samarth Desai & Nicholas Danby</p>
                  <p class="school">Harvard University '20</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-kanye-west">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">From "Jesus Walks" to "Jesus is King": The Discography of Kanye West</p>
                  <p class="teacher">Angel Mata</p>
                  <p class="school">Harvard University '22</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-physics">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Physics: From Newton to Relativity, Black Holes, Inflation, the Universe and Beyond</p>
                  <p class="teacher">Kylee Carden</p>
                  <p class="school">MIT '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-joy">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Where and Why is Joy?</p>
                  <p class="teacher">Abby McElroy</p>
                  <p class="school">Harvard University '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-laughs">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">The Art of Laughs: Writing Your First Stand-Up Comedy Set</p>
                  <p class="teacher">Phoebe Barr</p>
                  <p class="school">Harvard University '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-contemporary-art">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Contemporary Art: Principles, Movements, & Practice</p>
                  <p class="teacher">Karly Hou</p>
                  <p class="school">Harvard University '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-butterflies">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Butterflies, Berries, and “Beauty to Set the World Right:” Hip-Hop and Social Activism</p>
                  <p class="teacher">Callia Chuang & Talia Blatt</p>
                  <p class="school">Harvard University '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-intro-cs">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">An Introduction to the Applications of Computer Science</p>
                  <p class="teacher">Kevin Bao & Ian Zhang</p>
                  <p class="school">Henry M. Gunn High School '21</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-cinema">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">An Overview of American Cinema: 1945 - Present</p>
                  <p class="teacher">Margaret Lu</p>
                  <p class="school">University of Pennsylvania '22</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-investing">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Fundamentals of Investing</p>
                  <p class="teacher">Max Bricken & James Bowden</p>
                  <p class="school">Caltech '23</p>
                </div>
              </a>
            </div>
            <div class="column">
              <a href="course-psychology">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">A Crash Course in Social Psychology</p>
                  <p class="teacher">Claire Garret</p>
                  <p class="school">Whitman College '20</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-climate-crisis">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Developing Solutions to Tackle the Climate Crisis</p>
                  <p class="teacher">Charles Hua, Kiana Ziadkhanpour</p>
                  <p class="school">Harvard University '22</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-intro-neuroscience">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Intro to Neuroscience: Mind, Brain and Behavior</p>
                  <p class="teacher">Elizabeth Kinard</p>
                  <p class="school">Harvard University '22</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-poetry">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Poetry for Self Expression</p>
                  <p class="teacher">Chioma Ugochukwu</p>
                  <p class="school">Harvard University '23</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-links-mythologies">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">The Links in Mythologies</p>
                  <p class="teacher">Annetta Venford</p>
                  <p class="school">Henry M. Gunn High School '21</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-computer-security">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Intro to Computer Security: How to Protect Your Data</p>
                  <p class="teacher">Elizabeth Truchan</p>
                  <p class="school">MIT '20</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-statistical-machine">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Statistical Machine and Deep Learning in Natural Language Processing</p>
                  <p class="teacher">Asher Noel</p>
                  <p class="school">Harvard ‘23</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-corona-anxiety">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Corona and Anxiety</p>
                  <p class="teacher">Lizzie Letsou</p>
                  <p class="school">Williams College '23</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-campaigns-elections">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Campaigns and Elections 101</p>
                  <p class="teacher">Willow Taylor Chiang Yang</p>
                  <p class="school">The Nueva Upper School '21</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-great-numbers">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Three Great Numbers of Math</p>
                  <p class="teacher">Michael Kielstra</p>
                  <p class="school">Harvard '22</p>
                </div>
              </a>
            </div>

            <div class="column">
              <a href="course-sign-language-2">
                <div class="course">
                  <div class="image-container">
                    <img src={Geobiology} />
                  </div>
                  <p class="name">Introduction to American Sign Language</p>
                  <p class="teacher">Emma Doughty</p>
                  <p class="school"></p>
                </div>
              </a>
            </div>
        </div>
        </div>
        <h1>Course Schedule</h1>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=8tk6cntof4tuog58lv572ikcp4%40group.calendar.google.com&ctz=America%2FBoston"
            style={{'border': '0px', 'width':'100%', 'height':'600px', 'frameborder':'0px', 'scrolling':'no'}}>
          </iframe>
        <h1>Register by 6/13 to take a class in this wave!</h1>
	<p>Sign-ups are on a first-come-first-serve basis. If you are unavailable for this wave, sign up for <a href = "www.wavelf.org/#newsletter">updates</a> to be the first to register for future waves!</p>
            <iframe
              title="form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdEci1eOpQ8IvYSFCxsgQOXfKL5LpJhZRWvfBLrrzAPrgyuZw/viewform?embedded=true"
              width="100%"
              height="500"
              frameborder="0"
              marginheight="0"
              marginwidth="0">Loading…
            </iframe>
            </ContainerInner>
          </Container>
            <Footer/>
        </div>
    )
}

export default Courses
