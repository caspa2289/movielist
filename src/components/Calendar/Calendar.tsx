import styles from './Calendar.module.scss'
import { FC } from 'react'

const Calendar: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.table__wrapper}></div>
        </div>
    )
}

export default Calendar
