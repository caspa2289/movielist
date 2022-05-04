import { FC } from 'react'
import { IAppHeaderProps } from '@/interfaces'
import { Header } from 'rsuite'
import CustomNextHead from '@/components/CustomNextHead/CustomNextHead'
import styles from './AppHeader.module.scss'

const AppHeader: FC<IAppHeaderProps> = ({ title, description, url }) => {
    return (
        <>
            <CustomNextHead title={title} description={description} url={url} />
            <Header>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.content__title}>MovieList</div>
                        <div className={styles.content__controls}>
                            Welcome, $username
                        </div>
                    </div>
                </div>
            </Header>
        </>
    )
}

export default AppHeader
