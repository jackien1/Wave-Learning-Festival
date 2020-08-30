import React from 'react'
import { NavbarContainer } from './styles'
import Logo from '@/components/Navbar/logo.svg'

// eslint-disable-next-line react/prop-types
const Navbar = ({ user }) => {
  return (
    <NavbarContainer>
      <img src={Logo}/>
      <p>{user}</p>
    </NavbarContainer>
  )
}

export default Navbar
