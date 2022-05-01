import styles from '../../../styles/Home.module.scss'
import { FC } from 'react'
import { withAppHeader } from '@/HOCs'

const Home: FC = () => {
    return (
        <div className={styles.container}>
            <div>LAKLMFLMAlm</div>
            <h1>scdrerve</h1>
        </div>
    )
}

export default withAppHeader(Home)
