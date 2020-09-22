import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Navigation from "../components/navigation"

const Stores = ({ location }) => {
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
                <p class="ml-2 mb-4">Tenkara Fishing Stores</p>
                <p class="ml-2 mb-4">As I visit various Tenkara Fishing Stores throughout Japan I will update this list.</p>
                <p class="ml-2 mb-4">Yokosuka</p>
                <p class="ml-2 mb-4">Kadoya Outdoor Shop 2-8,Honcho,Yokosuka,Japan,238-0041 It is an easy walk from the Yokosukachuo Train Station (Note: Google Maps shows the shop as in the alley. This is incorrect. It is right off the main street diagonal from Surf Taco)
                Yokohama</p>
                <p class="ml-2 mb-4">Sansui FishingStore-Sansui is a chain store but it has a lot of character and a large selection of fishing equipment. Located at:
                3 Chome-30-8 Tsuruyacho Kanagawa Ward, Yokohama, Kanagawa Prefecture 221-0835 Japan it is an easy walk from the Yokohama Train Station.</p>
                <p class="ml-2 mb-4">Tokyo</p>
                <p class="ml-2 mb-4">Groundstore – See my blog post here about this shop. It’s in Chofu and worth stopping in.</p>
                <p class="ml-2 mb-4">Sansui Fishing Store – This particular store is over 110 years old. The sales person who helped us was very friendly and despite not knowing too much Japanese we were able to glean a lot of information from him. Here is a link to Tenkara USA blog post about this store. The store is very small, only about 10′ wide and 50′ long however, it is packed with some awesome Tenkara gear. I highly recommend you check it out if you’re in the area. Here is a link to a helpful map
                Joshuya Fishing Store – This store is located at 1-7 Sakuragaokacho Shibuya, Tokyo 150-0031 Japan</p>
                <p class="ml-2 mb-4">It doesn’t have as much character as Sansui, but it does have a lot of fishing gear. It is four stories tall and is all about fishing. Fly fishing takes up a small corner on the 2nd floor and Tenkara is allocated to one isle on the top floor, which is the smallest floor and has no elevator access. Most of the fishing gear is focused on salt water fishing.</p>
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

export default Stores