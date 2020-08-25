import React from 'react'
import { NavbarContainer } from './styles'
import Logo from '@/components/Navbar/logo.svg'

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={Logo}/>
      <p>Karly Hou</p>
    </NavbarContainer>
  )
}

export default Navbar
