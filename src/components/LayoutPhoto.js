import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import BackgroundSlider from 'react-background-slider'
import image1 from "../images/NBNR_StPat_2018.jpg"
import image2 from "../images/NBNR_FierteMTL_2018.jpg"
import image3 from "../images/NBNR_FierteMTL_2019.jpg"


const LayoutPhoto = ({ pageTitle, children }) => {

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
        <div className="min-h-screen flex flex-col justify-between">
            <header className='flex justify-around bg-sky-800 opacity-75 p-8 text-white'>
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

            <div>
                <BackgroundSlider
                images={[image1, image2, image3]}
                duration={10} transition={2}
                />
                <main className="flex place-content-center font-sans text-xl text-black p-8 bg-transparent">
                    <h1 className='text-2xl font-bold pb-8 place-content-center'>{pageTitle}</h1>
                    {children}
                </main>
                
            </div>

            <footer className='flex justify-around bg-sky-800 opacity-75 text-white p-4 gap-x-8'>
                <div>
                    <h1 className='font-bold'>Contact information</h1>
                    <p>Find NBNR online:</p>
                    <ul className='lg:flex lg:space-x-4 lg:items-baseline space-y-1.5'>
                        <li>   
                            <a href='https://www.instagram.com/nbnr.mnrn/' className='flex space-x-1.5'>
                                <StaticImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png'
                                    alt='Instagram Logo' width="30" height="30" className='aspect-square'/>
                                <p className='underline'>@nbnr.mnrn</p>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/nbnr.mnrn/' className='flex space-x-1.5'>
                                <StaticImage src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png'
                                    alt='Facebook Logo' width="30" height="30" className='aspect-square'/>
                                <p>@nbnr.mnrn</p>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw' className='flex space-x-1.5'>
                                <StaticImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/langfr-1920px-YouTube_Logo_2017.svg.png"
                                    alt='YouTube Logo' width="45" height="30" className='aspect-{1.5}'/>
                                <p>@NBNR_MNRN</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold'>Request NBNR</h1>
                    <p>
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

export default LayoutPhoto

