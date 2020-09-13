import React from 'react'
import { NavbarContainer } from './styles'
import Logo from '@/components/Navbar/logo.svg'

const Navbar = ({ first, last }) => {
  return (
    <NavbarContainer>
      <img src={Logo}/>
      <p>{first} {last}</p>
    </NavbarContainer>
  )
}

export default Navbar
