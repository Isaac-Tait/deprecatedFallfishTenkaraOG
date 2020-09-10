import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Navigation from "../components/navigation.js"
import Image from "gatsby-image"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const data = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/FfT_Logo.png/"}) {
        childImageSharp {
          fixed(width: 535, height: 145) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  if (location.pathname === rootPath) {
    header = (
      <Image
        fixed={data.logo.childImageSharp.fixed}
        alt="Fallfish Tenkara"
        
      />
    )
  } else {
    header = (
        <Link to={`/`}>
            <Image
            fixed={data.logo.childImageSharp.fixed}
            alt="Fallfish Tenkara"
            // imgStyle={{
            //   minWidth: 500,
            //   paddingLeft: `2px`,
            // }}
          />
        </Link>
    )
  }
  return (
    <div class="flex flex-col">
      <Navigation />
      <header>{header}</header>
      <main>{children}</main>
      <div class="bg-gray-500">
        <footer>
          © 2014 - {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://tailwindcss.com">TailwindCSS</a> 
        </footer>
      </div>
    </div>
  )
}

export default Layout
