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
