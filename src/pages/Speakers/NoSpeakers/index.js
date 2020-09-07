import React, { useState, useEffect, useContext } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import { FirebaseContext } from '../../../firebaseContext'
import { Colors, Typography } from '@/styles'

const NoSpeakers = () => {

    return (<div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <Typography.Header color={Colors.WLF_YELLOW}>
            Fall Speakers
          </Typography.Header>
          <Typography.BodyText color="black">
            For the Fall, we will be featuring college and career panels and many exciting speakers. Stay tuned!
          </Typography.BodyText>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>)
}

export default NoSpeakers
