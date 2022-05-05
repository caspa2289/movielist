import 'rsuite/dist/rsuite.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CustomProvider } from 'rsuite'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CustomProvider theme="dark">
            <Component {...pageProps} />
        </CustomProvider>
    )
}

export default MyApp
