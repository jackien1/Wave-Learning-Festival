import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import FeaturedSpeaker from './FeaturedSpeaker'
import { Featured, Row } from './styles'
import AnimateHeight from 'react-animate-height'
import SpeakerCard from './SpeakerCard'

import Jameela from './jameela-jamil.jpg'
import Nate from './nate_saal.jpg'
import Iris from './iris_fu.jpg'
import Jasmine from './jasmine_shao.jpeg'
import Lisa from './lisa_baldwin.jpeg'
import Nicole from './nicole_chung.jpg'
import Ruta from './ruta_sepetys.jpg'
import Andrew from './andrew_cramer.jpg'
import Cliff from './cliff_hsia.jpg'
import { Colors } from '@/styles'

const PastSpeakers = () => {
  const pastSpeakers = [
    {
      name: 'Jasmine Shao: Become an iNfLuEnCeR: How to Grow & Monetize Your Platform!',
      img: Jasmine,
      title: "AKA studyquill! UCLA '24",
      date: 'Tuesday 9/1 8:30-9:30pm EDT',
      desc: <p>How do people become famous? Specifically, how do people talking to themselves in their bedrooms blow up into Internet stars? I don't have all the answers to the age-old puzzle of popularity, but here's what I can tell you: <br/><br/> How to start creating or improve your own content! I'll share the top tips I've learned from my four years of video and photo experience, and my insider reflections on the 'influencer industry' as a whole. <br/><br/> How people seem to make an income out of thin air! I'll show you how monetization, sponsorships, affiliate marketing, and other methods work, so you can be an informed consumer or get started on your Internet career. <br/><br/> And maybe, just maybe... how to become famous.</p>,
      bio: "Hello! My name is Jasmine. I'm the creator behind the YouTube channel and Instagram account @studyquill, where I share tips on studying and bullet journaling. In my four years on social media, I've gained 550,000+ subscribers and 300,000+ Instagram followers. I've collaborated with brands like Google Chromebooks, Texas Instruments, and Grammarly, and have been profiled in the Wall Street Journal and National Geographic textbooks. I also published a book about bullet journaling and interned with the marketing team of my favorite stationery company! Proud Ravenclaw and lover of string crafts.",
      hasTime: false,
      age: "9th - 12th Grade",
      signup: ""
    },
    {
      name: 'Ruta Sepetys: Meet the Author: Ruta Sepetys Discusses Her Novels',
      img: Ruta,
      title: '#1 NYT Bestselling Author of Historical Fiction',
      date: "Tuesday 9/1 7:00-8:00pm EDT",
      desc: <p><b>Seminar 3: Meet the Author: Ruta Sepetys Discusses Her Novels </b><br/>Prior to becoming a bestselling novelist, Ruta Sepetys spent over twenty years in the entertainment industry helping artists and musicians tell stories through song. In this seminar, Ruta will discuss her path to publication and answer questions about two of her New York Times bestselling novels—Salt to the Sea and Between Shades of Gray. </p>,
      bio: 'Ruta Sepetys is a #1 New York Times bestselling author of historical fiction published in over sixty countries and forty languages. Sepetys is considered a “crossover” novelist as her books are read by both students and adults worldwide. Winner of the Carnegie Medal, Ruta is renowned for giving voice to underrepresented history and those who experienced it.  Her books have won or been shortlisted for over forty book prizes, are included on over thirty state reading lists, and are currently in development for film and television. www.rutasepetys.com',
      hasTime: false,
      age: "6th - 12th Grade",
      signup: ""
    },
    {
      name: 'Ruta Sepetys: History in Hiding: The Elusive Power of Historical Fiction',
      img: Ruta,
      title: '#1 NYT Bestselling Author of Historical Fiction',
      date: "Tuesday 8/25 7:00-8:00pm EDT",
      desc: <p><b>Seminar 2: History in Hiding: The Elusive Power of Historical Fiction </b><br/>What determines how history is preserved and recalled? Why do some parts of history penetrate our collective consciousness while others remain hidden? This seminar will explore unearthing buried history and creative research! Topics will include the power of historical fiction to facilitate progress, create pathways for global dialogue, and give voice to the voiceless. Presentation will be followed by discussion and Q & A. Stay tuned for Ruta's third seminar: Meet the Author!</p>,
      bio: 'Ruta Sepetys is a #1 New York Times bestselling author of historical fiction published in over sixty countries and forty languages. Sepetys is considered a “crossover” novelist as her books are read by both students and adults worldwide. Winner of the Carnegie Medal, Ruta is renowned for giving voice to underrepresented history and those who experienced it.  Her books have won or been shortlisted for over forty book prizes, are included on over thirty state reading lists, and are currently in development for film and television. www.rutasepetys.com',
      hasTime: false,
      age: "6th - 12th Grade",
      signup: ""
    },
    {
      img: Andrew,
      name: 'Andrew Cramer: Wizard of Populism',
      date: 'Saturday 8/22 5:00-6:00pm EDT',
      title: 'Professor at Los Angeles Mission College',
      desc: "While L. Frank Baum claimed his classic 'Wonderful Wizard of Oz' was written 'solely to please the children of today', many scholars have interpreted the book as an allegory or metaphor for the political, economic and social events of America in the 1890s. European fairy tales of old often contained political allegory disguised as legend or myth in time of despotism when people were unable, sometimes even forbidden by law, to speak out about harsh, unfair treatment.  This presentation has much to say about the current state of affairs in the United States, where regardless of political persuasion every point of view is called 'fake news' and the divisive politics of populism rules the land.  Professor Cramer will guide attendees through the most common symbols from the book/movie 'Wizard of Oz' and connect them to their most likely historical counterparts.  Using everything from contemporary music to vivid imagery, video clips and even references to modern musicals 'The Wiz' and 'Wicked', Prof. Cramer guarantees you will never look at the land of Oz the same way again!",
      bio: "I graduated from Miami University of Ohio in 1991, earning two Bachelors degrees in English, one in Creative Writing and the other in Professional Writing. After graduation, I joined the US Navy for six years and was stationed in Japan and Hawaii as a public affairs specialist. I got out of the Navy in 1997 and went to work for CBS as a reporter/anchor in Colorado. Two years later, I switched networks to NBC and became a photojournalist. While working for NBC in Springfield, Illinois, I began working on my first Masters degree in American History with a specialty in Native American Studies and Treaties. I left NBC in 2000 to work on my MA full-time and graduated from the University of Illinois-Springfield in 2002. I earned a second Masters degree in American History from the University of Miami-Florida in 2005 specializing in pop culture, sports history, and entertainment. I moved to California in 2006, originally teaching for various community colleges in the San Fernando Valley. I've been teaching at Mission College for over ten years now, and at a couple private high schools in the area as well. I’ve also worked as a background actor for various films and TV shows, and I teach for various online and community colleges from time to time. I am a rabid James Bond & Doctor Who fan and I love going to sports bars (Go Chicago Cubs/White Sox/Bears/Bulls/Blackhawks!). In my free time, I enjoy going to movies, wine tasting, reading mysteries (Harlen Coben) and science fiction (Robert Jordan), and faith-based books on St. Ignatius.",
      hasTime: false,
      age: "High School ages 15-18 (sophomores, juniors, seniors)",
      signup: ""
    },
    {
      name: 'Lisa Baldwin: The Natural Way to Paint',
      img: Lisa,
      title: 'Contemporary Plein Air Painter',
      date: 'Pre-recorded videos sent every Monday, Wednesday, Friday, during Wave 5 (6 videos total)',
      desc: 'Develop the fundamental skills of plein air painting. Students will learn how to sketch, mix colors, the basics of composition, and the use of perspective. Discover like the French Impressionists how to capture natural light, shade, and color. This hands on 6 session course gives students both historical background and practical instruction on how to paint nature from observation. With drawing and painting exercises and coaching students will also be encouraged to develop their own individual painting styles.',
      bio: 'Lisa Baldwin is a contemporary plein air painter who edits her compositions to include only what is essential like a visual haiku. Lisa is from South Eastern Quebec and moved to Los Angeles four and a half years ago. She has always been an outdoors woman and her work is influenced by the paintings of Tom Thomson and the Canadian Group of Seven. They were a collective of early 20th century artists who, like the Impressionists painted outdoors on location. They traveled into the wilderness to paint and believed that a distinct Canadian art could be developed through direct contact with nature. Lisa is currently represented by Topanga Canyon Gallery in Los Angeles and Cube Projects in Ottawa. Her work is in private collections across Canada, the United States, Belgium, Hungary, and China.',
      hasTime: false,
      age: "12+ including adults",
      signup: ""
    },
    {
      name: 'Cliff Hsia: How to Ace Your Job Interviews to Get Hired',
      img: Cliff,
      title: 'Writer, Marketer, Teacher',
      date: 'Wednesday 8/19 7:00-8:00pm EDT',
      desc: <p><b>Seminar 2: How to Ace Your Job Interviews to Get Hired</b>
      <br/>You've landed a job interview. Great! Now what? How do you get past initial phone screens with recruiters? And once you're onsite—or on Zoom nowadays—how do you impress the hiring manager and the rest of the team?
      <br/>In this seminar, you'll learn the skills needed to make it past each part of the recruitment process—from the recruiter to the hiring manager to the broader team. The result? You'll have the subtle and important skills that will help you ace interviews and get the jobs you want.
      <br/>Come with your questions as there will be plenty of time for Q&A with Cliff.</p>,
      bio: <p>Cliff Hsia is a Hawaii-raised, California-based writer, marketer, teacher, traveler, husband, and father. Over the course of his 15+ years marketing career in technology, he has worked for various companies in the Bay Area, including Alibaba, Cisco, Box, and Palo Alto Networks. He's also worked for dozens of companies as a freelance copywriter and editor for startups and big tech giants like Google, Yahoo, and Lyft. Throughout his career, he's learned how to efficiently get more jobs and clients—many at the same time—with a clear and well-written resume, solid interviewing skills, and savvy negotiating techniques.
        <br/>Check out his writing about family travel and lifestyle design at LiveFamilyTravel.com, HuffPost, TODAY, The Good Men Project, and other media publications. Cliff also works as a private writing and English tutor, a Gates Millennium/APIA Scholar mentor, and a YouTube creator.
        <br/>Connect with Cliff here: <a href="https://www.facebook.com/clifftutoring">Facebook</a> and <a href="https://youtu.be/tHFGwMGJDIc">YouTube – 6 Years of Travel Around the World</a></p>,
      hasTime: false,
      age: "9th Grade and up",
      signup: ""
    },
    {

      name: 'Ruta Sepetys: Anatomy of a Page-Turner: Building a Bestselling Novel',
      img: Ruta,
      title: '#1 NYT Bestselling Author of Historical Fiction',
      date: "Tuesday 8/18 7:00-8:00pm EDT",
      desc: <p><b>Seminar 1: Anatomy of a Page-Turner: Building a Bestselling Novel</b><br/>  Why do some books pull you to the page and keep you there? This seminar will examine the elements of compelling story building including plot, stakes, pacing, characters, setting, and voice. Presentation will be followed by a Q & A. Stay tuned for Ruta's second and third seminars!</p>,
      bio: 'Ruta Sepetys is a #1 New York Times bestselling author of historical fiction published in over sixty countries and forty languages. Sepetys is considered a “crossover” novelist as her books are read by both students and adults worldwide. Winner of the Carnegie Medal, Ruta is renowned for giving voice to underrepresented history and those who experienced it.  Her books have won or been shortlisted for over forty book prizes, are included on over thirty state reading lists, and are currently in development for film and television. www.rutasepetys.com',
      hasTime: false,
      age: "6th - 12th Grade",
      signup: ""
    },
    {
      name: 'Cliff Hsia: How to Write a Resumé That Will Get Recruiters’ Attention and Get You Interviews',
      img: Cliff,
      title: 'Writer, Marketer, Teacher',
      date: 'Wednesday 8/5 7:00-8:00pm EDT',
      desc: <p><b>Seminar 1: How to Write a Resumé That Will Get Recruiters’ Attention and Get You Interviews</b>
      <br/>How do you stand out in a crowded field of job applicants? A clear and well-written resumé. A solid LinkedIn profile helps, too.
      <br/>In this session, you'll learn quick and easy steps to write an attention-grabbing resumé and a LinkedIn profile that get you requests for interviews—no matter what your level of work experience may be.
      <br/>Come with your questions as there will be plenty of time for Q&A with Cliff.</p>,
      bio: <p>Cliff Hsia is a Hawaii-raised, California-based writer, marketer, teacher, traveler, husband, and father. Over the course of his 15+ years marketing career in technology, he has worked for various companies in the Bay Area, including Alibaba, Cisco, Box, and Palo Alto Networks. He's also worked for dozens of companies as a freelance copywriter and editor for startups and big tech giants like Google, Yahoo, and Lyft. Throughout his career, he's learned how to efficiently get more jobs and clients—many at the same time—with a clear and well-written resume, solid interviewing skills, and savvy negotiating techniques.
        <br/>Check out his writing about family travel and lifestyle design at LiveFamilyTravel.com, HuffPost, TODAY, The Good Men Project, and other media publications. Cliff also works as a private writing and English tutor, a Gates Millennium/APIA Scholar mentor, and a YouTube creator.
        <br/>Connect with Cliff here: <a href="https://www.facebook.com/clifftutoring">Facebook</a> and <a href="https://youtu.be/tHFGwMGJDIc">YouTube – 6 Years of Travel Around the World</a></p>,
      hasTime: false,
      age: "9th Grade and up",
      signup: ""
    },
    {
      img: Nate,
      name: 'Nate Saal: The Art and Science of Making Chocolate',
      title: 'CEO, CocoTerra Company',
      date: 'Saturday 8/1 5:00-6:00pm EDT',
      desc: "Learn how to make chocolate from bean to bar.  Did you know that chocolate comes from a fruit?  Did you know that chocolate is a fermented food?  Did you know that the chocolate bar is a new invention in the history of chocolate?  We'll explore the ingredients used to make chocolate (and where to get them) as well as all the processing steps required to transform cocoa beans into delicious chocolate.  We'll dig a little deeper into the physics and chemistry involved in each of the processing steps and hopefully turn you into a chocolate geek.  When you see a cacao % on a bar of chocolate, you'll learn what that really means.  When you leave a chocolate bar in a hot car, you'll understand why it ends up looking white and crumbly.  And you'll learn about the chemistry of tempering so you know what's really happening when a recipe asks you to 'temper your chocolate'.  Finally, we'll end with a guide to tasting chocolate.  Grab a bar of your favorite chocolate and learn how to taste like a pro!",
      bio: "I am a San Francisco Bay Area native with a passion for technology and food. For the last 25 years, I’ve been in the start-up world as a founder or part of the founding team of multiple software, middleware and hardware companies.  With academic training in molecular biophysics and biochemistry, I've had a lifelong interest in technology, food science and DIY food making.  Professionally, I've spent my career as a serial entrepreneur bringing new technologies to market.  When I'm not hard at work, you'll find me beekeeping, making wine, olive oil and vinegar, growing exotic fruits, and a host of weekend farming activities.  My latest venture, CocoTerra, sits at the intersection of technology and food.  It draws on my knowledge and skills from all my different business experiences to simplify the chocolate-making process using smart software and hardware design so anyone can become a creative, successful and proud chocolate-maker.  Go to www.cocoterra.com if you are curious to learn more.",
      hasTime: false,
      age: "12+",
      signup: ""
    },
    {
      img: Jameela,
      name: 'Q&A with Jameela Jamil',
      date: 'Thursday 7/30 7:00-8:00pm EDT',
      title: "The Good Place Actress and Women's Body Image Activist",
      bio: "Jameela Jamil is an English-born actress, writer, DJ, model, radio host, and activist. She was discovered at 22 years old when she was teaching English in London, UK. Her first job in media was a main host on T4, the UK's leading youth entertainment show, and she soon went on to become a journalist for Cosmopolitan Magazine and the Huffington Post. 2012 saw many successes for Jamil, when she released her successful clothing line, shot for both British and American Vogue, Glamour Magazine, Cosmopolitan Magazine and Japanese teen vogue, and was nominated for the PPA and BSME awards for her writing. Later that year she was recruited by BBC Radio 1 to host her own show on their network, which would lead to a promotion in 2013 where she made history. She was the first woman in its 60 years on air to host the Official Chart on the esteemed radio station. With much success, including several awards for radio and a growing DJ career she stayed on at the network until 2015, when she left to pursue a writing career in the United States. After signing as a comedy writer at 3ARTS and being taken on by UTA, she was chosen for Micheal Schur’s latest project, The Good Place(2016), to star opposite Kristen Bell. The comedy series aired in the fall of 2016 to tremendous success and accolades and was continued through 2017, 2018 and for its fourth (and sadly last) season, this year. Most recently, she has been an activist on women's body-imaging issues and has openly discussed her struggle with eating disorders, as well as her childhood difficulties, born with congenital hearing loss and labyrinthitis. Her website and instagram page I Weigh promotes 'radical inclusivity, so no one feels alone' and boasts 1.2 million followers. Jamil describes I Weigh as 'a movement... for us to feel valuable and see how amazing we are, and look past the flesh on our bones'. Jamil was one of fifteen women selected to appear on the cover of the 2019 issue of British Vogue 'Forces for Change.' That same year, she was awarded 'Advocate of the Year' from the Ehlers-Danlos Society. She has raised funds and supports efforts to promote both local community projects and access to culture for communities globally.",
      desc: 'Jameela Jamil, actress of hit TV series “The Good Place”, will take part in a live Question-and-Answer session, where she will talk about her life, career, and activism. From hosting a radio show to being featured on the cover of many notable magazines, her career boasts many achievements. She has been called a “Force of Change”, and rightly so. Jamil was the first woman in the history of BBC Radio 1 to host the Official Chart. She has been nominated for numerous awards for her writing. She is a passionate advocate for self-love and racial inclusivity, among many others. Jamil is also the activist behind the 2018 movement ‘I-Weigh’, which aims to “amplify, advocate, and pass the mic”.',
      hasTime: false,
      age: "Any Age",
      signup: ""
    },
    {
      img: Nicole,
      name: 'Nicole Chung: Why Your Stories Matter',
      date: 'Tuesday 7/28 2:30-3:30pm EDT',
      title: 'Author of All You Can Ever Know, Editor in Chief of Catapult Magazine',
      bio: "Nicole Chung's nationally bestselling debut memoir All You Can Ever Know was a finalist for the National Book Critics Circle Award for Autobiography, longlisted for the PEN Open Book Award, and named a Best Book of the Year by The Washington Post, The Boston Globe, NPR, TIME, Library Journal, BuzzFeed, Goodreads, and the Chicago and Seattle Public Library systems, among many others. Nicole has written for numerous publications, including The New York Times, The Guardian, GQ, TIME, and Longreads, and has taught writing workshops for Kundiman, Catapult, and PEN/Faulkner’s Writers in Schools program. She is the editor in chief of the National Magazine Award-winning Catapult magazine, co-editor of the immigration anthology A Map Is Only One Story, and the former managing editor of the beloved, now-shuttered website The Toast. Her next book is forthcoming from Ecco Books/HarperCollins.",
      desc: 'Award-winning author and editor Nicole Chung will cover topics related to writing, revision, publishing, and community in a frank, participant-driven discussion with students.',
      hasTime: false,
      age: "Any Age",
      signup: ""
    }
  ]

  const colors = [Colors.WLF_TURQOUISE, Colors.WLF_YELLOW, Colors.WLF_ORANGE, Colors.WLF_PURPLE]

  return (
    <div>
      <Navbar/>
      <Container style={{ minHeight: '0vh' }}>
        <ContainerInner>
          <Featured>Past Speakers: </Featured>
          {
            pastSpeakers.map((speaker, index) => {
              return <Row key={index}
              >
                <SpeakerCard
                  name={speaker.name}
                  img={speaker.img}
                  title={speaker.title}
                  date={speaker.date}
                  desc={speaker.desc}
                  bio={speaker.bio}
                  color={colors[index % 4]}
                  hasTime={speaker.hasTime}
                  age={speaker.age}
                  signup={speaker.signup}/>          </Row>
            })
          }
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default PastSpeakers
