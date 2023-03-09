import React from 'react'
import { HamburgerIcon, Logo, Menu, MenuLink, Navx } from './Navbar.style'
import {menuIcon} from '../../helper/iconData'
const Navbar = () => {
  return (
    <Navx justify='space-between'>
      <Logo to="/">MyLibrary</Logo>
      
      <Menu>
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='/about'>About</MenuLink>
        <MenuLink to='/register'>Register</MenuLink>
        <MenuLink to='/login'>Login</MenuLink>
        <MenuLink to='/login'>Logout</MenuLink>
      </Menu>
      <HamburgerIcon>
        {menuIcon}
      </HamburgerIcon>
    </Navx>
  )
}

export default Navbar;