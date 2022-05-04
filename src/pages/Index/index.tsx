import { FC } from 'react'
import AppHeader from '@/components/AppHeader/AppHeader'
import styles from './Index.module.scss'

const Home: FC = () => {
    return (
        <>
            <AppHeader
                title="MovieList - Main"
                description="MovieList`s main page"
            />
            <main className={styles.wrapper}>
                <div>LALMFLMAlm</div>
                <h1>scdrerve</h1>
            </main>
        </>
    )
}

export default Home
