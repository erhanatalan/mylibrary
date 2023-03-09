import React, { useState } from 'react'
import { HamburgerIcon, Logo, Menu, MenuLink, Navx } from './Navbar.style'
import {menuIcon} from '../../helper/iconData'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleIcon = ()=>{
    setShowMenu(!showMenu)
  }
  return (
    <Navx justify='space-between' wrap="wrap">
      <Logo to="/">MyLibrary</Logo>
      
      <Menu showMenu={showMenu}>
        <MenuLink to='/'>Home</MenuLink>
        <MenuLink to='/about'>About</MenuLink>
        {/* <MenuLink to='/register'>Register</MenuLink> */}
        {/* <MenuLink to='/login'>Login</MenuLink> */}
        <MenuLink to='/login'>Logout</MenuLink>
      </Menu>
      <HamburgerIcon onClick={handleIcon}>
        {menuIcon}
      </HamburgerIcon>
    </Navx>
  )
}

export default Navbar;