import { hover } from "@testing-library/user-event/dist/hover";
import styled from "styled-components";

export const Paragraph = styled.p`
text-align: center;
color: white;
font-family: "Open Sans", sans-serif;
font-size: 1.5rem;
padding: 80px;

`

export const ProjectsListItem = styled.ul`
    text-align: center;
    color: white;
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
    list-style: none;
    text-decoration: none;
    border: solid white 1px;
    border-radius: 7px;
    padding: 10px;
    margin: 10px;
    width: 800px;
    `
export const ProjectsListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`

export const ProjectsLinkStyle = styled.a`
    text-decoration: none;
    color: white;
    &:hover{
        border: 5px solid green;
        border-radius: 10px;
    }
    `

export const ProjectsTitle = styled.h1`
    font-family: "Open Sans Bold", Roboto, sans-serif;
    color: white;
    text-align: center;
    padding: 30px;
    `