import React from "react"
//import { Link } from "gatsby"
import { graphql } from 'gatsby'
// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/global/BackgroundSection"
import Info from "../components/Home/info";
import Menu from "../components/Home/menu";
import Products from "../components/Home/products";
import Contact from "../components/Home/contact";
const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application','react']}/>
    <BackgroundSection img=
    {data.img.childImageSharp.fluid} title ="FitSlash Site"></BackgroundSection>
    <Info/>
    <Products />
    <Menu items={data.menu}/>
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
  menu: allContentfulProteinItem {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        category
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default IndexPage
