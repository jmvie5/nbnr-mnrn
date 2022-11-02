import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { useIntl, Link, IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import useWindowSize from '../../modules/windowSize.js'
import DropMenu from './DropMenu.js'


const Layout = ({ pageTitle, description, children }) => {
    const intl = useIntl()

    const languageName = {
        en: "EN",
        fr: "FR"
    }

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

    let isSmallWindow
    let windowWidth = useWindowSize().width

    if (windowWidth < 1000) {
        isSmallWindow = true;
    } else if (windowWidth > 1000) {
        isSmallWindow = false;
    };

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <header className='flex justify-around items-center bg-sky-800/75 p-4 text-white z-50'>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <meta name="description" content={description}/>
                <StaticImage src="../images/logoRound.webp" alt="NBNR Logo" width="80" height="80" className='aspect-square' />
                <h1 className="pl-4 pr-4 font-sans text-2xl font-bold">
                    <intl.formatMessage id={`${data.site.siteMetadata.title}`} />
                </h1>
                <div className='flex flex-col-reverse'>
                    {isSmallWindow
                    ? <div> {DropMenu()} </div>
                    : <nav>
                        <ul className="flex space-x-4">
                        {data.site.siteMetadata.menuLinks.map(link => (
                            <li
                            key={link.name}
                            className="pr-3"
                            >
                                <Link className="hover:text-black" to={link.link}>
                                    <intl.formatMessage id={`${link.name}`} />
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </nav>
                    }
                    
                    <div className='place-self-center justify-evenly pb-2'>
                        <IntlContextConsumer>
                            {({ languages, language: currentLocale }) =>
                                languages.map(language => (
                                    <button
                                    key={language}
                                    onClick={() => changeLocale(language)}
                                    className={`mr-4 p-1 ${currentLocale === language ? "underline text-black rounded-xl" : "text-white"}`}
                                    >
                                    {languageName[language]}
                                    </button>
                                ))
                                }
                        </IntlContextConsumer>
                    </div>
                </div>

                
            </header>

            <div>
                <main className="font-sans text-xl text-black p-8 bg-transparent">
                    <h1 className='text-3xl font-bold pb-8'><intl.formatMessage id={`${pageTitle}`}/></h1>
                    {children}
                </main>
                
            </div>

            <footer className='flex flex-col sm:flex-row items-center sm:items-start bg-sky-800/75 text-white p-4 gap-8 text-sm md:text-base' >
                <div className='basis-2/5'>
                    <h1 className='font-bold'>
                        <intl.formatMessage id="Contact information"/>
                    </h1>
                    <intl.formatMessage id="Find NBNR online:"/>
                    <div className='mt-2'>
                        <div className='flex flex-col xl:flex-row xl:space-x-4 space-y-2 xl:space-y-0'>
                            <a href='https://www.instagram.com/nbnr.mnrn/' className='flex space-x-1.5'>
                                <StaticImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png'
                                    alt='Instagram Logo' width="30" height="30" className='aspect-square'/>
                                <p className='underline'>@nbnr.mnrn</p>
                            </a>

                            <a href='https://www.facebook.com/nbnr.mnrn/' className='flex space-x-1.5'>
                                <StaticImage src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png'
                                    alt='Facebook Logo' width="30" height="30" className='aspect-square'/>
                                <p className='underline'>@nbnr.mnrn</p>
                            </a>

                            <a href='https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw' className='flex space-x-1.5'>
                                <StaticImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/langfr-1920px-YouTube_Logo_2017.svg.png"
                                    alt='YouTube Logo' width="45" height="30" className='aspect-{1.5}'/>
                                <p className='underline'>@NBNR_MNRN</p>
                            </a>
                        </div>
                        <div  className='mt-4'>
                            <a href='https://www.canada.ca/'>
                                <StaticImage src="../images/1920px-Canada_wordmark.svg.png" alt="Canada" width="170" height="40"/> 
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className='basis-3/5'>
                    <h1 className='font-bold'>
                        <intl.formatMessage id="Request NBNR"/>
                    </h1>
                    <intl.formatMessage id="Inquire"/>
                    <ul className='list-none pl-8'>
                        <li>
                            <intl.formatMessage id="Internal"/>
                            : +NAVRES HQ SSO BANDS NBNR@NAVRES HQ@Quebec</li>
                        <li>
                            <intl.formatMessage id="External"/>
                            : <a href='mailto:bands.navreshq_fanfares.qgresnav@forces.gc.ca' className='underline'>bands.navreshq_fanfares.qgresnav@forces.gc.ca</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Layout

