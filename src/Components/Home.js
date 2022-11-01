import React from 'react'
import styled from "styled-components";
import Section from './Section';
function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"

            />
            <Section 
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="CUSTOM ORDER"
                rightBtnText="EXISTING INVENTORY"
            />
            <Section 
                title="Lowest Cost Solar Panels In America"
                description="Money Back Gurantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="ORDER NOW"
                rightBtnText="LEARN MORE"
            />
             <Section 
                title="Solar For New Roofs"
                description="Solar Roofs Costs Less Than a New Roofs"
                backgroundImg="solar-roof.jpg"
                leftBtnText="ORDER NOW"
                rightBtnText="LEARN MORE"
            />
             <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="BUY NOW"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`