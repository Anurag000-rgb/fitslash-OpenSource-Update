import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/global/BackgroundSection"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection img=
    {data.img.childImageSharp.fluid} title ="FitSlash Site"></BackgroundSection>
    
  </Layout>
);

export const query = graphql`
{
  img:file(relativePath:{eq:"fit.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
