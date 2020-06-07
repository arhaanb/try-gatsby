import React from 'react'
import Layout from "../components/layout"
import ProjectItems from '../components/projectitems'
import SEO from '../components/seo'
import firebase from '../firebase'
import ProjectList from "../components/projectlist"
import AddProject from "../components/projectentry"

// firebase.firestore().collection('projects').add({
//     title: 'Talent Fiesta',
//     date: 'April 2020'
// })

const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <h1>Projects</h1>
        <ProjectList></ProjectList>
        <AddProject></AddProject>

        {/* <ProjectItems></ProjectItems>       */}
    </Layout>
)

export default Projects