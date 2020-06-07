import React from 'react'
import Link from 'gatsby-link'

const AddProject = () => (
    <div>
        <h5>Add projects</h5>
        <form>
            <label>Project Name</label>
            <input type="text"></input>
            <label>Date</label>
            <input type="text"></input>
            <button>Add Project Entry</button>
        </form>
    </div>
)


export default AddProject