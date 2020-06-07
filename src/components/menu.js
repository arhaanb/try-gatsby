import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
    <div style={{ background: '#f4f4f4' }}>
        <div className='container'>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
)


export default Menu