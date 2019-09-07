import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerWrapper}>
        <h1 className={headerStyles.logo}><Link to="/">{data.site.siteMetadata.title}</Link></h1>
        <nav className={headerStyles.globalNav}>
          <ul className={headerStyles.globalMenu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header