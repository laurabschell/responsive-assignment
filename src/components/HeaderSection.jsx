import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    /* background-color: aquamarine; */
    text-align: center;
    padding: .7rem 0;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    /* background-color: #15b313; */
    font-size: 1.5rem;
    font-weight: 900;
    /* margin: 0 0 1rem 0; */
`

const Input = styled.input`
    margin: 1rem auto;
    /* display: flex;
    justify-content: center; */
    padding: .3rem;
    width: 70%;
`

const Button = styled.input`
    /* display: flex; */
    /* justify-content: center; */
    margin: 0 auto;
    background-color: #F1C40F;
    width: 140px;
    border: none;
    border-radius: 2px;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 200%;
`

function HeaderSection() {
    return (
        <HeaderContainer>
            <Title>
                Handcrafted, home-made masterpieces
            </Title>
            <form>
                <Input type="email" placeholder="Enter yout email address" required/>
                <Button type="submit" value="GET STARTED" />
            </form>
        </HeaderContainer>
    )
}

export default HeaderSection
