import 'rsuite/dist/rsuite.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CustomProvider } from 'rsuite'
import UserProvider from '@/HOCs'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <CustomProvider>
                <Component {...pageProps} />
            </CustomProvider>
        </UserProvider>
    )
}

export default MyApp
