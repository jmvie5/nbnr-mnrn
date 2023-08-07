import * as React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata.js'
import { StaticImage } from "gatsby-plugin-image"
import { useIntl, IntlContextConsumer, changeLocale, Link } from "gatsby-plugin-intl"
import DropMenu from './DropMenu.js'


const Layout = ({ pageTitle, children }) => {
    const intl = useIntl()

    const languageName = {
        en: "EN",
        fr: "FR"
    }

    const siteMetadata = useSiteMetadata()

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <header className='flex justify-around items-center bg-sky-800/75 p-2 text-white z-50'>
                <title>{pageTitle} | {siteMetadata.title}</title>
                <Link to="/" className='aspect-square min-w-max'>
                    <StaticImage src="../../src/images/logoRound.png" alt="NBNR Logo" width={90} height={90} className='aspect-square min-w-max' />
                </Link>
                
                <h1 className="pl-4 pr-4 font-sans text-3xl text-center font-bold">
                    <intl.formatMessage id={`${siteMetadata.title}`} />
                </h1>
                <div className='flex flex-col p-2'>
                    <div className='flex flex-row place-self-center justify-evenly pb-2 min-w-12'>
                        <IntlContextConsumer>
                            {({ languages, language: currentLocale }) =>
                                languages.map(language => (
                                    <button
                                    key={language}
                                    onClick={() => changeLocale(language)}
                                    className={`p-2 ${currentLocale === language ? "underline text-black rounded-xl" : "text-white hover:underline"}`}
                                    >
                                    {languageName[language]}
                                    </button>
                                ))
                                }
                        </IntlContextConsumer>
                    </div>
                    <div className='place-self-center'><DropMenu/></div>
                </div>
            </header>

            <div>
                <main className="font-sans text-black p-8 bg-transparent">
                    <h1 className='text-3xl font-bold pb-8'><intl.formatMessage id={`${pageTitle}`}/></h1>
                    {children}
                </main>
            </div>

            <footer className='flex flex-col sm:flex-row items-center sm:items-start bg-sky-800/75 text-white p-4
             gap-8 text-sm md:text-base' >
                <div className='basis-2/5'>
                    <h1 className='font-bold text-lg'>
                        <intl.formatMessage id="Contact information"/>
                    </h1>
                    <div className='mt-2'>
                        <div className='flex flex-col xl:flex-row xl:space-x-4 space-y-2 xl:space-y-0'>
                            <a href='https://www.instagram.com/nbnr.mnrn/' className='flex space-x-1.5'>
                                <StaticImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png'
                                    alt='Instagram Logo' width={30} height={30} className='aspect-square'/>
                                <p className='hover:underline'>@nbnr.mnrn</p>
                            </a>

                            <a href='https://www.facebook.com/nbnr.mnrn/' className='flex space-x-1.5'>
                                <StaticImage src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png'
                                    alt='Facebook Logo' width={30} height={30} className='aspect-square'/>
                                <p className='hover:underline'>@nbnr.mnrn</p>
                            </a>

                            <a href='https://www.youtube.com/channel/UC9X4dG-fBwQ0fzSIoD063bw' className='flex space-x-1.5'>
                                <StaticImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/langfr-1920px-YouTube_Logo_2017.svg.png"
                                    alt='YouTube Logo' width={45} height={30} className='aspect-{1.5}'/>
                                <p className='hover:underline'>@NBNR_MNRN</p>
                            </a>
                        </div>
                        <div  className='mt-4'>
                            <a href={(intl.locale === "en") ? 'https://forces.ca/en/contact-us/' : "https://forces.ca/fr/nous-joindre/"}>
                                <StaticImage src="../images/1920px-Canada_wordmark.svg.png" alt="Canada" width={170} height={40}/> 
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className='basis-3/5'>
                    <h1 className='font-bold text-lg'>
                        <intl.formatMessage id="Request NBNR"/>
                    </h1>
                    <p><intl.formatMessage id="Inquire"/></p>
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

