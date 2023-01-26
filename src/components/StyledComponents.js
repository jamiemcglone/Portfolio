import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const Paragraph = styled.p`
text-align: center;
color: white;
font-family: "Open Sans", sans-serif;
font-size: 1.5rem;
margin-top: 3.5rem;
margin-bottom: 3.5rem;

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
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
`

export const ProjectsLinkStyle = styled.a`
    text-decoration: none;
    color: white;

    `

export const Heading = styled.h1`
    font-family: "Open Sans Bold", Roboto, sans-serif;
    color: white;
    text-align: center;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    `

export const LanguagesAndSkillsList = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    @media (max-width: 500px) {
        width: 25rem;
        flex-direction: column;
    }
`

export const LanguageAndSkillItem = styled.div`
    color: white;
    list-style: none;
    font-size: 1.5rem;
    text-align: center;
    padding: .5rem;
`

export const SkillGroup = styled.div`
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    @media (max-width: 500px) {
        margin-top: .5rem;
        margin-bottom: .5rem;
    }
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
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
    `

export const LinkWord = styled.a`
    text-decoration: none;
    color: white;
    :hover {
        font-size: 1.3rem;
        text-decoration: underline;
        border: 3px solid white;
        border-radius: 10px;
        box-shadow: 1px 2.5px;
    }
    `