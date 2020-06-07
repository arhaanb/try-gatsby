import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <h1>Contact</h1>
        <p>contact me papi.</p>

        <form method="post" action="http://localhost:5000/arhaanapi">
            <label>Name</label>
            <input type="text" name="name" id="name" />

            <label>Email</label>
            <input type="email" name="email" id="email" />

            <label>Subject</label>
            <input type="text" name="subject" id="subject" />

            <label>Message</label>
            <textarea name="message" id="message" rows="5" />

            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
        </form>
    </Layout>
)

export default Contact
