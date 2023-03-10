import React, { useState } from 'react'
import { HamburgerIcon, Logo, Menu, MenuLink, Navx } from './Navbar.style'
import {menuIcon} from '../../helper/iconData'
const Navbar = ({setUser}) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleIcon = ()=>{
    setShowMenu(!showMenu)
  }
  const hanleOut = ()=>{
    setUser(false)
    sessionStorage.clear();
  }
  return (
    <Navx justify='space-between' wrap="wrap">
      <Logo to="/">MyLibrary</Logo>
      
      <Menu showMenu={showMenu}>
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='/about'>About</MenuLink>
        <MenuLink to='/login' onClick={hanleOut} >Logout</MenuLink>
      </Menu>
      <HamburgerIcon onClick={handleIcon}>
        {menuIcon}
      </HamburgerIcon>
    </Navx>
  )
}

export default Navbar;