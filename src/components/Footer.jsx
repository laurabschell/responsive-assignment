import React from 'react'
import styled from "styled-components"

const FooterContainer = styled.div`
    background-color: #DDDDDD;
    display: flex;
    /* justify-content: flex-end; */
    flex-direction: column;
    padding: 1.5rem;
`

const Links = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 60%;
    /* background-color: #53287b; */
    list-style: none;
`

const CoyrightText = styled.p`
    display: flex;
    justify-content: flex-end;
    /* background-color: brown; */
    color: gray;
`

function Footer() {
    return (
        <FooterContainer>
            <Links>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Contacts</li>
            </Links>
            <CoyrightText>Copyright 2016, Original Tombones</CoyrightText>
        </FooterContainer>
    )
}

export default Footer
