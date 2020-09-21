import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo.js"
import Navigation from "../components/navigation.js"
import Pager from "../components/pager.js"

const Search = props => {
    const { data } = props
    const allPosts = data.allMarkdownRemark.edges

    const emptyQuery = ""

    const [ state, setState ] = useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInput = event => {
        const query = event.target.value
        const { data } = props

        // this is how we get all of our posts   
        const posts = data.allMarkdownRemark.edges || []

        // return all filtered posts   
        const filteredData = posts.filter(post => {
            // de-structure data from post frontmatter
            const { title, description } = post.node.frontmatter
            return (
                // standardize data with .toLowerCase()
                // return true if the description, title or tags
                // contains the query string 
                description.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) 
            )
        })
        // update state according to the latest query and results
        setState({
            query, //with current query string from the 'Input' event
            filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
        })
    }

    const { filteredData, query } = state

    const hasSearchResults = filteredData && query !== emptyQuery

    const posts = hasSearchResults ? filteredData : allPosts

    return (
        <div>
            <SEO />
            <Navigation />
            <Link to="/" class="uppercase font-bold text-red-500">Take me back to the Home Page</Link>
            <div class="flex flex-col w-full pl-24 mb-4">
                <p class="font-bold text-2xl">Content</p>
                <input
                    class="border-2 border-solid pl-2 text-red-500 w-1/3 h-12" 
                    type="text"
                    aria-label="Search"
                    placeholder="Enter search query..."
                    onChange={handleInput}
                />
            </div>
            
            {posts.map(({ node }) => {
                const { excerpt } = node 

                const { slug } = node.fields
                const { title, date, description } = node.frontmatter
    

                return (
                    <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
                        <article key={slug}>
                            <header>
                                <p class="pl-2 text-xl font-bold">
                                    <Link to={slug}>{title}</Link>
                                </p>
                                <p class="pl-2">{date}</p>
                                <p 
                                dangerouslySetInnerHTML={{
                                    __html: description || excerpt,
                                }}
                                class="pl-2 italic text-gray-700"
                                />
                            
                            </header>
                        </article>
                        {/*<Pager /> */}
                    </div>
                
                )
            })}
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

export default Search

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
            edges {
                node {
                    excerpt
                    id
                    frontmatter {
                        title
                        description
                        date(formatString: "MMMM DD, YYYY")
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
