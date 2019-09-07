import React from "react"

import Header from '../components/header'
import Footer from '../components/footer'
import Side from '../components/side'

import '../styles/sass/import.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className={layoutStyles.mainBody}>
        <div className={layoutStyles.mainContainer}>
          <div className={layoutStyles.pageContainer}>
            {props.children}
          </div>
          <Footer />
        </div>
        <Side />
      </div>
    </div>
  )
}

export default Layout