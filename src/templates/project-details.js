import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {
  details,
  featured,
  htmlStyle,
} from "../styles/project-details.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  const featuredImg = getImage(data.markdownRemark.frontmatter.featuredImg)

  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <GatsbyImage image={featuredImg} alt={title} />
        </div>
        <div className={htmlStyle} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
