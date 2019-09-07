import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h2 className="mb80">Welcome to H2O7 Blog</h2>
      <ul className={blogStyles.blogList}>
        {
          data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li className={blogStyles.blogItem}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p><time>{edge.node.frontmatter.date}</time></p>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </Layout>
  )
}

export default BlogPage