import React from "react";
import styled from "styled-components";
import { Paragraph } from "./StyledComponents.js";
const About = () => {
    return(
        <>
        <Paragraph>
            Jamie McGlone is an ambitious and hardworking software developer based in Edinburgh, who is currently studying at CodeClan.
        </Paragraph>
        </>
    )
}

const Title = styled.h1`
    text-align: center;
    font-family: "futura";
`

export default About;