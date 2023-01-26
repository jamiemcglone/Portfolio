import React from "react";
import styled from "styled-components";
import { Paragraph, Heading } from "./StyledComponents.js";

const About = () => {
    return(
        <>
        <Heading>Hi, I'm Jamie McGlone.</Heading>
        <Paragraph>
            I am an ambitious and creative software developer based in Edinburgh, who is currently studying at CodeClan.
        </Paragraph>
        </>
    )
}

// const Title = styled.h1`
//     text-align: center;
//     font-family: "futura";
//     color: white;
// `

export default About;