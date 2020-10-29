/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <title>T6TG | Thanawat Gulati</title>
                    <meta
                        name="description"
                        content="I'll be waiting for you
                        Here inside my heart
                        I'm the one who wants to love you more
                        You will see I can give you
                        Everything you need
                        Let me be the one to love you more"
                    />
                    <link rel="icon" href="/favicon.png" />
                    <meta
                        property="og:url"
                        content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
                    />
                    <meta property="og:type" content="article" />
                    <meta
                        property="og:title"
                        content="T6TG | Thanawat Gulati"
                    />
                    <meta
                        property="og:description"
                        content="I'll be waiting for you
                        Here inside my heart
                        I'm the one who wants to love you more
                        You will see I can give you
                        Everything you need
                        Let me be the one to love you more"
                    />
                    <meta
                        property="og:image"
                        content="https://t6tg.com/static/toloveyoumore.png"
                    />
                    <meta name="application-name" content="T6TG" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta name="apple-mobile-web-app-title" content="T6TG" />
                    <meta
                        name="description"
                        content="I'll be waiting for you
                        Here inside my heart
                        I'm the one who wants to love you more
                        You will see I can give you
                        Everything you need
                        Let me be the one to love you more"
                    />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="msapplication-TileColor" content="#1A202C" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#1A202C" />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/static/icons/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/static/icons/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link
                        rel="shortcut icon"
                        href="/static/icons/favicon.png"
                    />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" content="https://t6tg.com" />
                    <meta name="twitter:title" content="T6TG" />
                    <meta
                        name="twitter:description"
                        content="I'll be waiting for you
                        Here inside my heart
                        I'm the one who wants to love you more
                        You will see I can give you
                        Everything you need
                        Let me be the one to love you more"
                    />
                    <meta
                        name="twitter:image"
                        content="https://t6tg.com/static/toloveyoumore.png"
                    />
                    <meta name="twitter:creator" content="@t6tg_" />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:title"
                        content="T6TG | Thanawat Gulati"
                    />
                    <meta
                        property="og:description"
                        content="I'll be waiting for you
                        Here inside my heart
                        I'm the one who wants to love you more
                        You will see I can give you
                        Everything you need
                        Let me be the one to love you more"
                    />
                    <meta property="og:site_name" content="T6TG" />
                    <meta property="og:url" content="https://t6tg.com" />
                    <meta
                        property="og:image"
                        content="https://t6tg.com/static/toloveyoumore.png"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
