import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const Paragraph = styled.p`
text-align: center;
color: white;
font-family: "Open Sans", sans-serif;
font-size: 1.5rem;

`

export const ProjectsListItem = styled.p`
    text-align: center;
    align-items: center;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
    list-style: none;
    text-decoration: none;
    border: solid white 1px;
    border-radius: 7px;
    width: 40rem;
    &:hover{
        border: 3px solid white;
        border-radius: 20px;
        box-shadow: 2px 5px;
    }
    @media (max-width: 500px) {

        width: 15rem;
        
    }
    `
export const ProjectsListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 25px;
    padding-bottom: 25px;
`

export const ProjectsLinkStyle = styled.a`
    text-decoration: none;
    color: white;

    `

export const Heading = styled.h1`
    font-family: "Open Sans Bold", Roboto, sans-serif;
    color: white;
    text-align: center;
    `

export const LanguagesAndSkillsList = styled.ul`
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
`

export const LanguageAndSkillItem = styled.li`
    color: white;
    list-style: none;
    font-size: 1.5rem;
    text-align: center;
    padding: 5px;
`

export const SkillGroup = styled.div`
    flex-direction: row;
    justify-content: center;
    margin: 10px;
    padding: 20px;
`

export const IconsFooter = styled.footer`
    text-align: center;
    color: white;
    padding: 10px;
    text-decoration: none;
`

export const TheFooter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    `

export const LinkWord = styled.a`
    text-decoration: none;
    color: white;
    :hover {
        font-size: 1.3rem;
        text-decoration: underline;
    }
    `