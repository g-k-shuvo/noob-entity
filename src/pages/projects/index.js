import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import { portfolio, projects } from "../../styles/projects.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const Projects = ({ data }) => {
  const projectsItems = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {projectsItems.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt={project.frontmatter.title}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export default Projects

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
