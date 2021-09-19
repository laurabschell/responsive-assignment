import React from 'react'
import styled from 'styled-components'
import hamburgerClosed from "../assets/hamburgerClosed.png"

const HamburgerContainer = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
`

const HamburgerBars = styled.img`
    /* background-color: #00c200; */
    width: 2.5rem;
`

const HamburgerToggle = ({handleToggle}) => {

    return (
        <HamburgerContainer onClick={handleToggle}>
            <HamburgerBars src={hamburgerClosed} alt="hamburger toogle" />
        </HamburgerContainer>
    )
}

export default HamburgerToggle
