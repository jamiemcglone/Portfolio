import React from "react";
import { Paragraph, Heading, LanguagesAndSkillsList, LanguageAndSkillItem, SkillGroup } from "./StyledComponents";

const LangaugesAndSkills = () => {
    return (
    <>
        <Heading>Languages and Skills</Heading>
        <LanguagesAndSkillsList>
            <SkillGroup>
                <LanguageAndSkillItem>Python</LanguageAndSkillItem>
                <LanguageAndSkillItem>Flask</LanguageAndSkillItem>
                <LanguageAndSkillItem>SQL</LanguageAndSkillItem>
                <LanguageAndSkillItem>PostgreSQL</LanguageAndSkillItem>
            </SkillGroup>
            <SkillGroup>
                <LanguageAndSkillItem>JavaScript</LanguageAndSkillItem>
                <LanguageAndSkillItem>React</LanguageAndSkillItem>
                <LanguageAndSkillItem>Express</LanguageAndSkillItem>
                <LanguageAndSkillItem>MongoDB</LanguageAndSkillItem>
                <LanguageAndSkillItem>Mocha</LanguageAndSkillItem>
            </SkillGroup>
            <SkillGroup>
                <LanguageAndSkillItem>Java</LanguageAndSkillItem>
                <LanguageAndSkillItem>Spring</LanguageAndSkillItem>
            </SkillGroup>
            <SkillGroup>
                <LanguageAndSkillItem>Git</LanguageAndSkillItem>
                <LanguageAndSkillItem>TDD</LanguageAndSkillItem>
                <LanguageAndSkillItem>OOP</LanguageAndSkillItem>
                <LanguageAndSkillItem>HTML</LanguageAndSkillItem>
                <LanguageAndSkillItem>CSS</LanguageAndSkillItem>
            </SkillGroup>
        </LanguagesAndSkillsList>
    </>
    
    )
}

export default LangaugesAndSkills;