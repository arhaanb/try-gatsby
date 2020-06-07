import React, { useState, useEffect } from 'react'
import Link from 'gatsby-link'
import firebase from '../firebase'

function useProj() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .onSnapshot((snapshot) => {
                const newProjects = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setProjects(newProjects)
            })
    }, [])

    return proj
}

const ProjectList = () => (
    useProj()

    < div >
    <h2>Yo</h2>

    <label>Sort By:</label>
    <select>
        <option>Time (fastest first)</option>
        <option>Time (slowest first)</option>
        <option disaled>---</option>
        <option>Title (a -> z)</option>
        <option>Title (z -> a)</option>
        <option>RANDI</option>
    </select>

    <ol>
        {TimeRanges.map((title) =>
            <li key={time.id}>
                {time.title}, {time.date}
            </li>
        )}
        <li>
            BHOSDA
                </li>
    </ol>
    </div >
)


export default ProjectList