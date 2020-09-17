import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

function Slider() {
    const [index, setIndex] = useState(0)
    const { allFile } = useStaticQuery(
        graphql`
        query {
            allFile(
                sort: { fields: name, order: DESC }
                filter: { relativeDirectory: { eq: "sliders" }}
                ) {
                  edges {
                      node {
                          id
                          name
                          childImageSharp {
                            fluid(maxWidth: 900, maxHeight: 255, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }  
    `)

    const length = allFile.edges.length - 1
    const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
    const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
    const { node } = allFile.edges[index]

    return (
        <div>
            <div class="m-2 shadow-xl overflow-hidden rounded-lg">
                <Image 
                    fluid={node.childImageSharp.fluid}
                    key={node.id}
                    alt="Slider Images"
                />
            </div>
            <div class="flex w-1/2 justify-between mx-auto">
                <button class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black" onClick={() => handlePrevious()}>&#11013; Image</button>
                <button class="tracking-wide m-2 inline-block px-3 py-1 rounded-lg shadow-lg bg-red-500 text-white hover:bg-gray-300 hover:text-black" onClick={() => handleNext()}>Image &#10145;</button>
            </div>
        </div>
    )
};

export default Slider
