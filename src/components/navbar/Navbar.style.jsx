import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from '../../styles/Flex'

export const Navx = styled(Flex)`
    background:${({theme})=> theme.colors.navbarBGColor};
    padding: 1rem 2rem;
    text-transform:${({theme})=> theme.letter.textTransformU};

`

export const Logo = styled(NavLink)`
    padding:1rem 1rem ;
    /* margin-right: 4rem; */
    max-height:60px;
    width:100px;
    color: ${({theme})=> theme.colors.logoColor};
    text-decoration: none;
    font-weight: 800;
    font-size: 1.5rem;

`

export const Menu = styled(Flex)`
    font-weight: bold;
    transition:all 0.3s ease-in;
    @media(max-width:${({theme})=> theme.screens.sm}) {
        margin-top: 3.2rem;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        width:100%;
        max-height:${({showMenu})=> showMenu ? "300px" : "0"};
        overflow:hidden;
    }
`

export const MenuLink = styled(NavLink)`
    text-align:center;
    padding: 1rem 2rem;
    cursor: pointer;
    text-decoration:none;
    color: ${({theme})=> theme.colors.linkColor};
    transition:all 0.3s ease-in;
    &:hover{
        color: ${({theme})=> theme.colors.linkHoverColor};
    }

`

export const HamburgerIcon = styled.div`
    width:100px;
    padding:1rem 0 ;
    max-height:60px;
    display:none;
    vertical-align:middle;
    color: ${({theme})=> theme.colors.navIconColor};
    justify-content:end;
    cursor: pointer;
    @media(max-width:${({theme})=> theme.screens.sm}) {
        display:block;
        justify-content:flex-end;
    }
`