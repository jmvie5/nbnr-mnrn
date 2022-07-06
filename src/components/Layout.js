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
            <header className='flex justify-around bg-sky-800 p-8 text-white'>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <h1 className="font-sans text-2xl font-bold">
                    {data.site.siteMetadata.title}
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                    {data.site.siteMetadata.menuLinks.map(link => (
                        <li
                        key={link.name}
                        className="pr-3"
                        >
                        <Link className="hover:text-black" to={link.link}>
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </header>

            <div className="font-sans text-xl text-black p-8 bg-sky-100">
                <main>
                    <h1 className='justify-center text-2xl font-bold pb-8'>{pageTitle}</h1>
                    {children}
                </main>
                
            </div>

            <footer className='flex justify-around bg-sky-800 text-white p-8'>
                <div>
                    <h1 className='font-bold pb-4'>Contact information</h1>
                    <p className='pb-4'>Find NBNR online:</p>
                    <ul className='list-none pl-8 underline'>
                        <li><a href='https://www.instagram.com/nbnr.mnrn/'>Instagram @nbnr.mnrn</a></li>
                        <li><a href='https://www.facebook.com/nbnr.mnrn/'>Facebook @nbnr.mnrn</a></li>
                        <li><a href='https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw'>YouTube @NBNR_MNRN</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold pb-4'>Request NBNR</h1>
                    <p className='pb-4'>
                        To inquire about a performance by NBNR, please send a detailed request to the officer in charge: 
                    </p>
                    <ul className='list-none pl-8'>
                        <li>Internal: +NAVRES HQ SSO BANDS NBNR@NAVRES HQ@Quebec</li>
                        <li>External: <a href='mailto:bands.navreshq_fanfares.qgresnav@forces.gc.ca' className='underline'>bands.navreshq_fanfares.qgresnav@forces.gc.ca</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Layout

