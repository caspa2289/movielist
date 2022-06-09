import { FC } from 'react'
import { IAppHeaderProps } from '@/interfaces'
import { Header } from 'rsuite'
import CustomNextHead from '@/components/CustomNextHead/CustomNextHead'
import styles from './AppHeader.module.scss'
import { getTimeOfDayGreeting } from '@/utils/scripts'
import { useUser } from '@/hooks/useUser'

const AppHeader: FC<IAppHeaderProps> = ({ title, description, url }) => {
    const { userData } = useUser()
    const greetingText = `${getTimeOfDayGreeting()}, ${userData.name}`

    return (
        <>
            <CustomNextHead title={title} description={description} url={url} />
            <Header>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.content__title}>Заметошная</div>
                        <div className={styles.content__controls}>
                            {greetingText}
                        </div>
                    </div>
                </div>
            </Header>
        </>
    )
}

export default AppHeader
