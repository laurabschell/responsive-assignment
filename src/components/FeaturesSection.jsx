import React from 'react'
import styled from "styled-components"

const FeaturesContainer = styled.div`
    /* background-color: bisque; */
    padding: .5rem;
    text-align: center;
    font-weight: 500;
`
const FeatureBadge = styled.div`
    /* background-color: #ff8c00; */
    margin: 2.5rem 0;
`
const Title = styled.h2`
    /* background-color: #1b86a3; */
`
const Text = styled.div`
    /* background-color: #0ad100; */
`

function FeaturesSection() {
    return (
        <FeaturesContainer>
            <FeatureBadge>
                <Title>
                    Premium Materials
                </Title>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur nemo doloremque est dolores ad rem.
                </Text>
            </FeatureBadge>
            <FeatureBadge>
                <Title>
                    Fast Shipping
                </Title>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur nemo doloremque est dolores ad rem.
                </Text>
            </FeatureBadge>
            <FeatureBadge>
                <Title>
                    Quality Assurance
                </Title>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur nemo doloremque est dolores ad rem.
                </Text>
            </FeatureBadge>
        </FeaturesContainer>
    )
}

export default FeaturesSection
