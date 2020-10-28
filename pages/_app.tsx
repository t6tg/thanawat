/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { AppProps } from 'next/app'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Component {...pageProps} />
}

export default MyApp
