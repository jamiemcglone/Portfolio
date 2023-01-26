import React from "react";
import { Paragraph, ProjectsListItem, ProjectsListContainer, ProjectsLinkStyle, Heading } from "./StyledComponents.js";

const Projects = () => {
    const allProjects = [
                    {
                        title: "Space Explorers",
                        type: "Group Javascript React Project",
                        url: "https://github.com/treneff/space_explorers"
                    },
                    {
                        title: "Songaniser",
                        type: "Solo Python Flask Project",
                        url: "https://github.com/jamiemcglone/Songaniser-Project"
                    },
                    {
                        title: "Terminal BlackJack",
                        type: "Python Terminal Game",
                        url: "https://replit.com/@jwm2108/Blackjack-Terminal-Game#main.py"
                    }
]

    const ProjectList = allProjects.map((project) => {
            return(
                <ProjectsLinkStyle href={project.url} target="_blank">
                    <ProjectsListItem>
                        <p>Title: {project.title}</p>
                        <p>Technologies: {project.type}</p>
                        <p>Click to find out more!</p>
                    </ProjectsListItem>
                </ProjectsLinkStyle>

            )
        })


    return(
        <>
        <Heading>Projects</Heading>
        <ProjectsListContainer>
                {ProjectList}
        </ProjectsListContainer>
        </>
    )
}


export default Projects;