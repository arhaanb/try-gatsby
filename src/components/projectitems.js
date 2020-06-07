import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import projects from '../../data/projects'

const AboutContainer = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
`

const AboutBox = styled.div`
    border: 2px #f5f5f5 solid;
    padding: 20px;
    margin: 0 10px 20px 0;
    text-align: center;
    position: relative;
    &:hover {
        transition: all 0.25s ease;
        transform: translateY(-2px)
    } 
    i {
        font-size: 0.9em;
        white-space: pre;
    }
`

const Title = styled.div`
    font-size: 1.15em;
    font-weight: 600;
    margin: 20px;
`

// const ButtonDiscord = styled.button`
//     font-family: 'europa';
//     margin-top: 10px;
//     border: 0;
//     border-radius: 3px;
//     color: white;
//     background: rgba(0,0,0,0.8);
//     font-size: 1.4rem;
//     cursor: pointer;
//     transition: transform 0.3s ease;
//     &:hover {
//         transform: translateY(-2px);
//         outline: none;
//         color: white;
//     } 
// `


const ProjectItems = () => (
    <AboutContainer>
        {projects.map(({ id, name, date, desc, link }) => (
            <a href={link} target="_blank">
                <AboutBox>
                    <Title>{name}</Title>
                    <info>
                        <i>{date}</i>
                        <main>{desc}</main>
                    </info>
                </AboutBox>
            </a>
        ))}
    </AboutContainer>
)

export default ProjectItems