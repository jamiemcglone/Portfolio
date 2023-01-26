import React from "react";
import { IconsFooter, TheFooter, LinkWord } from "./StyledComponents.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <TheFooter>
        <IconsFooter>
            <LinkWord href="https://www.linkedin.com/in/jamie-mcglone-943914236/">LinkedIn</LinkWord>
        </IconsFooter>
        <IconsFooter>
            <LinkWord href="https://github.com/jamiemcglone">GitHub</LinkWord>
        </IconsFooter>
        </TheFooter>
    )
}

export default Footer;