import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from '../../styles/Flex'

export const Navx = styled(Flex)`
    background:${({theme})=> theme.colors.navbarBGColor};
    padding: 1rem 2rem;
    text-transform:${({theme})=> theme.letter.textTransformU};

`

export const Logo = styled(NavLink)`
    padding:1rem 0 ;
    color: ${({theme})=> theme.colors.logoColor};
    text-decoration: none;
    font-weight: 800;
    font-size: 1.5rem;

`

export const Menu = styled(Flex)`
    font-weight: bold;
    @media(max-width:${({theme})=> theme.screens.sm}) {
        margin-top: 2rem;
        flex-direction: column;
        width:100%;
        max-height:${({showMenu})=> showMenu ? "300px" : "0"};
        transition:all 0.3s ease-in;
        overflow:hidden;

    }
`

export const MenuLink = styled(NavLink)`
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
    color: ${({theme})=> theme.colors.navIconColor};
    display:none;
    display:flex;
    justify-content:end;
    cursor: pointer;
    @media(max-width:${({theme})=> theme.screens.sm}) {
        display:block;
        justify-content:flex-end;

    }

`