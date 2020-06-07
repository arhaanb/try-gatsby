import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Arhaan Bahadur</h1>
    <p>I'm a 16 year old web developer based in New Delhi. I study in the Mother's International School, and I'm the President of my school's technology club MINET.</p>
    <Link to="/about/">About</Link> <br />
  </Layout>
)

export default IndexPage
