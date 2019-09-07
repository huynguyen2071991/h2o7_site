import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerWrapper}>
        <p>Create by {data.site.siteMetadata.author}, © 2019</p>
      </div>
    </footer>
  )
}

export default Footer