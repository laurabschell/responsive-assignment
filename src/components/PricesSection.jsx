import React from 'react'
import styled from "styled-components"

const PricingContainer = styled.div`
    /* background-color: blue; */
    padding: 1rem;
    text-align: center;
`

const PricingCard = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    /* background-color: #4f4fce; */
    margin: 1rem;
`

const Title = styled.h4`
    text-transform: uppercase;
    line-height: 300%;
    background-color: #DDDDDD;
`

const Price = styled.p`
    /* background-color: #00ffff; */
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 200%;
`

const List = styled.ul`
    /* background-color: #cc00ff; */
    list-style: none;
    margin: .5em 0;
    line-height: 200%;
`

const Button = styled.button`
    background-color: #ffcc00;
    border: none;
    border-radius: 2px;
    padding: .5rem .8em;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin: .8rem;
`

function PricesSection() {
    return (
        <PricingContainer>
            <PricingCard>
                <Title>Tenor Trombone</Title>
                <Price>$600</Price>
                <List>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum.</li>
                </List>
                <Button>Select</Button>
            </PricingCard>
            <PricingCard>
                <Title>Bass Trombone</Title>
                <Price>$900</Price>
                <List>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum.</li>
                </List>
                <Button>Select</Button>
            </PricingCard>
            <PricingCard>
                <Title>Valve Trombone</Title>
                <Price>$1200</Price>
                <List>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum.</li>
                </List>
                <Button>Select</Button>
            </PricingCard>\
        </PricingContainer>
    )
}

export default PricesSection
