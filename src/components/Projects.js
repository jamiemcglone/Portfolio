import React from "react";
import { Paragraph, ProjectsListItem, ProjectsListContainer } from "./StyledComponents.js";

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
                <ProjectsListItem>
                    <p>Title: {project.title}</p>
                    <p>Technologies: {project.type}</p>
                    <p><a href={project.url} target="_blank">See more here!</a></p>

                </ProjectsListItem>
            )
        })


    return(
        <>
        <Paragraph>See some of my projects below!</Paragraph>
        <ProjectsListContainer>
                {ProjectList}
        </ProjectsListContainer>
        </>
    )
}


export default Projects;