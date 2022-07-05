import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
            siteMetadata {
                title
                menuLinks {
                name
                link
                }
            }
            }
        }
    `)

    return (
        <div>
            <header className='flex justify-around bg-sky-800 p-8'>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <h1 className="font-sans text-2xl font-bold text-white">
                    {data.site.siteMetadata.title}
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                    {data.site.siteMetadata.menuLinks.map(link => (
                        <li
                        key={link.name}
                        className="pr-3"
                        >
                        <Link className="text-white hover:text-black" to={link.link}>
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </header>

            <div className="font-sans text-xl text-black p-8">
                <main>
                    <h1 className='justify-center text-2xl font-bold pb-8'>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout

