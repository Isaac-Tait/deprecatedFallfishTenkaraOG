import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Navigation from "../components/navigation"

const Tenkara = ({ location }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    const data = useStaticQuery(graphql`
    query {
      desktopLogo: file(absolutePath: { regex: "/FfT_Logo_Desktop.png/"}) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 50) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      mobileLogo: file(
        absolutePath: { regex: "/FfT_Logo_Mobile.png/"}
      ) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
`)

const logos = [
  data.mobileLogo.childImageSharp.fluid,
  {
    ...data.desktopLogo.childImageSharp.fluid,
    media: `(min-width: 768px)`
  }
]

    if (location.pathname === rootPath) {
        header = (
        <div class="ml-20 mr-20 mb-2">
            <Image
            fluid={logos}        
            alt="Fallfish Tenkara"
            />
        </div>
        )
    } else {
        header = (
        <div class="ml-20 mr-20 mb-2">
            <Link to={`/`}>
            <Image
                fluid={logos}
                alt="Fallfish Tenkara"
            />
            </Link>
        </div>
            
        )
    }
    return (
        <div>
            <Navigation />
            <header class="pr-2 md:w-2/3">{header}</header>
            <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
              <p class="ml-2 mb-4"> What is Tenkara?</p>
              <p class="ml-2 mb-4">I am glad you asked!</p>
              <p class="ml-2 mb-4">Tenkara is essentially fly-fishing without the reel.</p>
              <p class="ml-2 mb-4">Tenkara originated in Japan. The word ‘Tenkara’ is a Japanese word and is loosely translated “From Heaven“.</p>
              <p class="ml-2 mb-4">As you may have gathered from the lack of a reel, Tenkara is simple.</p>
              <p class="ml-2 mb-4">Tenkara rods lack a reel seat and line guides so they are much cheaper to manufacturer than “traditional” fly rods.</p>
              <p class="ml-2 mb-4">Tenkara is fun and easy to learn.</p>
              <p class="ml-2 mb-4">What are the benefits of Tenkara vs. other forms of fishing?</p>
              <p class="ml-2 mb-4">The rods are lightweight and collapse into themselves for easy and quick transportation/setup. You can fish one handed (which is great for cold weather fishing)! You do not need bulky heavy tackle boxes and vests stuffed to the gills with gear. It is also an extremely effective method of fishing in terms of how many fish you will bring to hand.</p>
              <p class="ml-2 mb-4">A little history ---</p>
              <p class="ml-2 mb-4">As I mentioned early, Tenkara originated in Japan. It started as an effective method for mountain fishermen to catch fish. It became a mainstream activity when the Samurai adopted it as a leisure pass-time way back in the Japanese Edo Era. Tenkara was introduced in the United States in 2009 by Tenkara USA and has been spreading like wildfire ever since.</p>
              <p class="ml-2 mb-4">So what is next?</p>
              <p class="ml-2 mb-4">There are hundreds if not thousands of Tenkara rod options currently on the market. Check out My Tenkara Rods page to see what rods I use.</p>
              <p class="ml-2 mb-4">If you have any questions about Tenkara, Tenkara in Japan, or just want to say hi feel free to contact me directly.</p>
              <p class="ml-2 mb-4">See you on the water!</p>
            </div>
            <div class="bg-red-500">
                <footer class="flex items-center justify-between text-xs md:text-base">
                    <div class="ml-2">
                        © 2014 - {new Date().getFullYear()}, Built with
                        {` `}
                        <a 
                        href="https://www.gatsbyjs.org"
                        class="hover:text-white"
                        target="_blank"  
                        rel="noopener noreferrer" 
                        > Gatsby</a> and 
                        <a 
                        href="https://tailwindcss.com"
                        class="hover:text-white"
                        target="_blank"  
                        rel="noopener noreferrer" 
                        > TailwindCSS</a>
                    </div>

                    <div>
                        <span class="ml-20 mr-2"> Another 
                        <a 
                            href="https://www.mountaintopcoding.com"
                            class="hover:text-white"
                            target="_blank"  
                            rel="noopener noreferrer" 
                        > mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Tenkara