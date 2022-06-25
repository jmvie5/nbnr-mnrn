import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    background,
    header,
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from "./layout.module.css"

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
        <div className={background}>
            <header className={header}>
                
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <h1 className={siteTitle}>
                    {data.site.siteMetadata.title}
                </h1>
                <nav>
                    <ul className={navLinks}>
                    {data.site.siteMetadata.menuLinks.map(link => (
                        <li
                        key={link.name}
                        className={navLinkItem}
                        >
                        <Link className={navLinkText} to={link.link}>
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            
            </header>
            <div className={container}>
                <main>
                    <h1>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout

