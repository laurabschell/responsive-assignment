import React from 'react'
import styled from 'styled-components'
import logo from "../assets/page-logo.png"

const NavbarContainer = styled.div`
    background-color: #eee;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: .5rem 0;
    position: sticky;
    top: 0;
`
    
const LogoImg = styled.img`
    /* background-color: #0707b6; */
    width: 80%;
    padding: .6rem;
`
const NavLinks = styled.div`
    /* background-color: #fdb600; */
    display: flex;
    flex-direction: column;
    text-align: center;
`

const NavAnchor = styled.a`
    text-decoration: none;
    color: #000;
    line-height: 160%;
`

function Navbar() {
    return (
        <NavbarContainer>
                <LogoImg src={logo} alt="here goes the company logo" />
            <NavLinks>
                <NavAnchor href="#">Features</NavAnchor>
                <NavAnchor href="#">How It Works</NavAnchor>
                <NavAnchor href="#">Pricing</NavAnchor>
            </NavLinks>
        </NavbarContainer>
    )
}

export default Navbar
