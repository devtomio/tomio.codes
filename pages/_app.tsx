import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Progress from 'nextjs-progressbar';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>Tomio</title>
            <meta name="description" content="The personal website of Tomio. https://github.com/1chiSensei" />
            <link rel="icon" href="/pfp.jpg" />
            <link rel="manifest" href="/manifest.json" />
            <meta charSet="UTF-8" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Patrick+Hand&family=Arvo&display=swap"
                rel="stylesheet"
            />

            <link rel="preload" href="/fonts/genshin.woff" as="font" type="font/woff" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/genshin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
            <link rel="preload" href="/js/script.js" as="script" type="text/javascript" crossOrigin="anonymous" />

            <link rel="apple-touch-icon" href="/icons/apple-icon-180.png" />

            <meta name="apple-mobile-web-app-capable" content="yes" />

            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2048-2732.png"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2732-2048.png"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1668-2388.png"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2388-1668.png"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1536-2048.png"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2048-1536.png"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1668-2224.png"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2224-1668.png"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1620-2160.png"
                media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2160-1620.png"
                media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1284-2778.png"
                media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2778-1284.png"
                media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1170-2532.png"
                media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2532-1170.png"
                media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1125-2436.png"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2436-1125.png"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1242-2688.png"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2688-1242.png"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-828-1792.png"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1792-828.png"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1242-2208.png"
                media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-2208-1242.png"
                media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-750-1334.png"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1334-750.png"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-640-1136.png"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            />
            <link
                rel="apple-touch-startup-image"
                href="/icons/apple-splash-1136-640.png"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            />

            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="theme-color" content="#4a4a4a" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Yoshida Tomio" />
            <meta name="language" content="English" />
            <meta content="https://tomio.codes/pfp.jpg" property="og:image" />
            <meta content="Tomio" property="og:title" />

            <meta content="Tomio's personal homepage." property="og:description" />
            <meta content="Tomio's personal homepage." name="description" />

            <meta name="revisit-after" content="2 days" />
            <meta name="keywords" content="1chi, 1chiSensei, Yoshida Tomio, Developer, Github" />

            <meta property="og:locale" content="en_US" />
            <link rel="canonical" href="https://tomio.codes/" />
            <meta property="og:url" content="https://tomio.codes/" />
            <meta property="og:site_name" content="Tomio" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://tomio.codes/" />
            <meta property="twitter:title" content="Tomio" />
            <meta property="twitter:description" content="Tomio's personal homepage." />
            <meta property="twitter:image" content="https://tomio.codes/pfp.jpg" />
        </Head>

        <Progress color="#fff" options={{ showSpinner: false }} />
        <Component {...pageProps} />
    </>
);

export default App;
