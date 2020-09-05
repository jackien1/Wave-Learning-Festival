import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { FirebaseContext } from '../../../firebaseContext'
import { Colors, Typography } from '@/styles'

const CoursesUpcoming = () => {

    return (<div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <Typography.Header color={Colors.WLF_YELLOW}>
            Stay tuned for Tides!
          </Typography.Header>
          <Typography.BodyText color="black">
            Tide 1 will run from October 5th to November 6th. Student registration will open on September 15th! In the meantime, click <a href="/subscribe">here</a> to subscribe to our newsletter.
          </Typography.BodyText>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>)
}

export default CoursesUpcoming
