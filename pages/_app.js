import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// TODO figure out why font loading causes a flicker
// import 'fontsource-raleway/latin.css'

import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Head from "next/head";
import Script from 'next/script'
import * as gtag from './gtag'

const App = ({Component, pageProps}) => {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            <Head>
                <title>Sid Ghodke</title>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"/>
                <meta name="description" content="A healthy dose of what I'm working on currently"/>
                <meta name="author" content="Sid Ghodke"/>
                <link rel="icon" href="/favicon.png"/>
                <link href="//fonts.googleapis.com/css?family=Raleway:400,100,300,500,800" rel="stylesheet"
                      type="text/css"/>
            </Head>

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script id="site-tag"
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script id="ga-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                
                            gtag('config', '${gtag.GA_TRACKING_ID}', {
                              page_path: window.location.pathname,
                            });
                        `,
                    }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default App
