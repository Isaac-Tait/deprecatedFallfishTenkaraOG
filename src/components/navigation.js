import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata {
                    linkOne
                    linkTwo
                    linkThree
                    linkFour
                    linkFive
                    linkSix
                    linkSeven
                    linkEight
                        menuLinks {
                            link
                            name
                        }
                }
            }
        }
    `);

const { 
        linkOne,
        linkTwo,
        linkThree,
        linkFour,
        linkFive,
        linkSix,
        linkSeven,
        linkEight,
        } = data.site.siteMetadata

    return (
        <div class="bg-red-500 mb-2 lg:flex lg:items-center lg:justify-between">
            <button class="block">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z" 
                        fill="#ffffff"
                    />
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M3 10C3 9.44772 3.44772 9 4 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H4C3.44772 11 3 10.5523 3 10Z" 
                        fill="#ffffff"
                    />
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z" 
                        fill="#ffffff"
                    />
                </svg>
            </button>

            <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:m-2 lg:text-lg lg:font-bold lg:text-white">
                <Link to="/learning-japanese">{linkOne}</Link>
            </span>
            <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                <Link to="/tenkara-fishing-store">{linkTwo}</Link>
            </span>
            <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                <Link to="/keiryu-fishing-season">{linkThree}</Link>
            </span>
            <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                <Link to="/japanese-fishing-license">{linkFour}</Link>
            </span>
            <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                <Link to="/toll-roads">{linkFive}</Link>
            </span>
            <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                <Link to="/links">{linkSix}</Link>
            </span>
            <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:text-lg lg:font-bold lg:text-white">
                <Link to="/about">{linkSeven}</Link>
            </span>
            <span class="sm:mt-1 sm:px-2 sm:block sm:text-white sm:hover:text-black lg:mr-2 lg:text-lg lg:font-bold lg:text-white">
                <Link to="/tenkara-101">{linkEight}</Link>
            </span>
        </div>  
    );
};