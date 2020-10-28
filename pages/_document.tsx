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
                        content="https://t6tg.com/toloveyoumore.png"
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
