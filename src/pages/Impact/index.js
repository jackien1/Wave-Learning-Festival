import React, { useContext, useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  HeaderImage,
  AboutDescription,
  Highlight,
  HighlightStyle1,
  Button,
  MediumImage,
  MetaContainer,
  MediumContainer,
  SubHeaderContainer,
  DescItem,
  Input,
  NewsLetter,
  Error,
  Popup,
  FeaturedImage,
  FeaturedLink,
  ContainerInner,
  Announcements,
  Card,
} from './styles'
import { Colors, Typography, Form } from '@/styles'
import './styles.css'
import * as Assets from './assets'
import { FirebaseContext } from '@/firebaseContext'
import { MdFormatAlignCenter } from 'react-icons/md'
import { TiSortAlphabeticallyOutline } from 'react-icons/ti'
import Map from './map.js'

const Impact = () => {

  return (
    <MetaContainer>
      <Navbar />
      <Map />
      <MediumContainer>
        See where we have reached! Map write up here!
      </MediumContainer>
      <Footer />
    </MetaContainer>
  )
}

export default Impact
