/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SideBar from "./sidebar"
import "../styles/index.scss"
import Footer from "./Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Header />
      <SideBar />
      <div>
        <main>{children}</main>
      <Footer/>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
