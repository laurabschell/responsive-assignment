import React from 'react'
import styled from "styled-components"

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    background-color: #FDFDCF;
    width: 85%;
    opacity: 90%;
    border-radius: 0 0 10px 0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    flex-direction: column; 
    padding: .8rem;
    position: fixed;
    top: 0;
    z-index: 6;
    /* justify-content: center; */
    /* text-align: center; */
    /* background-color: #105a10; */
`
const Title = styled.h4`
    text-align: center;
    font-weight: 300;
    /* line-height: 150%; */
`

const Select = styled.select`
    width: 100%;
    margin: .5rem 0;
`

const Test = styled.div`
    display: flex;
    /* background-color: turquoise; */
    display: flex;
    justify-content: space-between;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    background-color: #525252;
    margin-bottom: .5rem;
    border: none;
    border-radius: 5px;
    padding: .8rem 2.5rem;
    /* justify-content: space-between; */
    color: white;
    font-size: 1rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
const References = styled.div`
    /* background-color: #dd006f; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
`
const ReferencesText = styled.p`
    /* background-color: #703955; */
    font-size: .8rem;
    line-height: 200%;
`
const Anchor = styled.a`
    /* text-decoration: none; */
    font-size: .8rem;
    text-align: center;
    color: black;
    margin: 0 0 1rem 0;
`

function Form() {
    return (
        <FormContainer>
            <Title>Select Test Suite:</Title>
            <form>
                <Select disabled>
                    <option>Product Landing Page</option>
                </Select>
            </form>
            <Test>
                <Buttons>
                    <Button>Run Tests</Button>
                    <Button>Tests</Button>
                </Buttons>
                <References>
                    <ReferencesText>Tests Failed</ReferencesText>
                    <ReferencesText>Tests Passed</ReferencesText>
                    <ReferencesText>Tests Executing</ReferencesText>
                </References>
            </Test>
            <Anchor href="#">Ask for help</Anchor>
        </FormContainer>
)
}

export default Form
